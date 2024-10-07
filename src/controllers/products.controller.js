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
        const {
            title,
            photo = 'default-photo-path.png',
            category = 'default',
            price = 1,
            stock = 1
        } = req.body;
        
        const data = {
            title,
            photo,
            category,
            price,
            stock
        };
    
        const responseManager = await productsManager.create(data);
    
        return res.status(201).json({ message: "PRODUCT CREATED", response: responseManager });
        
    } catch (error) {
        return next(error);
    }

    // try {
    //     const data = req.body;
    //     const responseManager = await productsManager.create(data);

    //     return res.status(201).json({ message: "PRODUCT CREATED: ", response: responseManager })

    // } catch (error) {
    //     return next(error);
    // }
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

async function showAllProducts(req, res, next) {
    try {

        let { category } = req.query;
        let all;

        if(!category){
            all = await productsManager.readAll();
        }else{
            all = await productsManager.readAll(category);
        }

        if(all.length > 0){
            return res.render("products", {data: all});
        }else{
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;

            throw error;
        }

    } catch (error) {
        return next(error);
    }
}

async function showProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const one = await productsManager.read(pid);

        if(one){
            return res.render("productDetail", {data: one})
        }else{
            const error = new Error("PRODUCT NOT FOUND");
            error.statusCode = 404;

            throw error;
        }

    } catch (error) {
        return next(error);
    }
}

async function adminProducts(req, res, next) {
    try {

        let { category } = req.query;
        let all;

        if(!category){
            all = await productsManager.readAll();
        }else{
            all = await productsManager.readAll(category);
        }

        if(all.length > 0){
            return res.render("admin", {data: all});
        }else{
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;

            throw error;
        }

    } catch (error) {
        return next(error);
    }
}

async function deleteViewProduct(req, res, next) {
    try {
        const { pid } = req.params;

        const responseManager = await productsManager.delete(pid);
        
        if (!responseManager) {
            const error = new Error("PRODUCT NOT FOUND");
            error.statusCode = 404;
            throw error;
        } else {
            return res.status(200).json({ message: "Producto eliminado correctamente" });
        }

    } catch (error) {
        return next(error);
    }
}

async function showEditProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const product = await productsManager.read(pid);

        if (product) {
            return res.render("edit", { product });
        } else {
            const error = new Error("PRODUCT NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}

async function updateViewProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const updatedData = req.body;
        const responseManager = await productsManager.update(pid, updatedData);

        if (!responseManager) {
            const error = new Error(`PRODUCT WITH ID: ${pid} NOT FOUND`);
            error.statusCode = 404;
            throw error;
        } else {
            return res.redirect('/products/admin');
        }
    } catch (error) {
        return next(error);
    }
}


export{
    // api
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    
    // vistas
    showAllProducts,
    showProduct,
    adminProducts,
    deleteViewProduct,
    showEditProduct,
    updateViewProduct
}