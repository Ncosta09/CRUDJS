import fs from "fs";
import crypto from "crypto";

class ProductsManager {
    constructor(path){
        this.path = path;
        this.exists();
    }
    exists(){
        const exists = fs.existsSync(this.path);

        if(exists){
            console.log("File already exists!");
        }else{
            fs.writeFileSync(this.path, JSON.stringify([]));

            console.log("File created!");
        }
    }
    async readAll(){
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);

            return parseData;

        } catch (error) {
            console.log(error);

            throw error;
        }
    }
    async read(id){
        try {
            const all = await this.readAll();
            const one = all.find((each) => each.id === id);

            return one;

        } catch (error) {
            console.log(error);

            throw error;
        }
    }
    async create(productData){
        try {
            productData.id = crypto.randomBytes(12).toString("hex");

            const allProducts = await this.readAll();
            allProducts.push(productData);

            const stringData = JSON.stringify(allProducts, null, 1);
            await fs.promises.writeFile(this.path, stringData);

            return productData.id;

        } catch (error) {
            console.log(error);

            throw error;
        }
    }
    async update(id, newProductData){
        try {
            const all = await this.readAll();
            const index = all.findIndex((product) => product.id === id);

            if(index === -1){
                return null;
            }

            all[index] = { ...all[index], ...newProductData };
            const stringData = JSON.stringify(all, null, 1);
            await fs.promises.writeFile(this.path, stringData);

            return all[index];

        } catch (error) {
            console.log(error);

            throw error;
        }
    }
    async delete(id){
        try {
            const all = await this.readAll();
            const filteredProduct = all.filter((product) => product.id !== id);

            if(all.length === filteredProduct.length){
                return null;
            }

            const stringData = JSON.stringify(filteredProduct, null, 1);
            await fs.promises.writeFile(this.path, stringData);

            return `PRODUCT WITH ID: ${id} DELETED`;

        } catch (error) {
            console.log(error);

            throw error;
        }
    }
}

const productsManager = new ProductsManager("./src/data/fs/products.json");
export default productsManager;