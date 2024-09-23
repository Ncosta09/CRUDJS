import fs from "fs";
import crypto from "crypto";

class UsersManager {
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
    async create(userData){
        try {
            userData.id = crypto.randomBytes(12).toString("hex");

            const allUsers = await this.readAll();
            allUsers.push(userData);

            const stringData = JSON.stringify(allUsers, null, 1);
            await fs.promises.writeFile(this.path, stringData);

            return userData.id;

        } catch (error) {
            console.log(error);

            throw error;
        }
    }
    async update(id, newUserData){
        try {
            const all = await this.readAll();
            const index = all.findIndex((user) => user.id === id);
    
            if(index === -1){
                return null;
            }
    
            all[index] = { ...all[index], ...newUserData };
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
            const filteredUser = all.filter((user) => user.id !== id);

            if(all.length === filteredUser.length){
                return null;
            }

            const stringData = JSON.stringify(filteredUser, null, 1);
            await fs.promises.writeFile(this.path, stringData);

            return `USER WITH ID: ${id} DELETED`;

        } catch (error) {
            console.log(error);

            throw error;
        }
    }
}

const usersManager = new UsersManager("./src/data/fs/users.json");
export default usersManager;