import productsManager from "../data/products.manager.js";

async function getAllProducts(req, res, next) {
    try {
        let { category } = req.query;
        let response;

        if(!category){
            response = await productsManager.readAll();
        }else{
            response = await productsManager.readAll(category);
        }

        if(response.length > 0){
            return res.status(200).json({ message: "READ ALL PRODUCTS: ", response });
        }else{
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;

            throw error;
        }

    } catch (error) {
        return next(error);
    }
}

async function getProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const response = await productsManager.read(pid);

        if(response){
            return res.status(200).json({ message: "READ PRODUCT: ", response })
        }else{
            const error = new Error("PRODUCT NOT FOUND");
            error.statusCode = 404;

            throw error;
        }

    } catch (error) {
        return next(error);
    }
}

async function createProduct(req, res, next) {
    try {
        const data = req.body;
        const responseManager = await productsManager.create(data);

        return res.status(201).json({ message: "PRODUCT CREATED: ", response: responseManager })

    } catch (error) {
        return next(error);
    }
}

async function updateProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const newProductData = req.body;
        const responseManager = await productsManager.update(pid, newProductData);

        if(!responseManager){
            const error = new Error(`PRODUCT WITH ID: ${pid} NOT FOUND`);
            error.statusCode = 404;

            throw error;
        }else{
            return res.status(200).json({ message: "PRODUCT UPDATED: ", response: responseManager })
        }

    } catch (error) {
        return next(error);
    }
}

async function deleteProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const responseManager = await productsManager.delete(pid);
        
        if(!responseManager){
            const error = new Error("PRODUCT NOT FOUND");
            error.statusCode = 404;

            throw error;
        }else{
            return res.status(200).json({ message: "PRODUCT DELETED: ", response: responseManager });
        }

    } catch (error) {
        return next(error);
    }
}

export{
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}