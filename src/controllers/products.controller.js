import productsManager from "../data/managers/products.manager.js";

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await productsManager.create(data);
        return res.status(201).json({ response, message: "PRODUCT CREATED" })
    } catch (error) {
        return next(error);
    }
}

const readAll = async (req, res, next) => {
    try {
        const filter = req.query;
        const response = await productsManager.readAll(filter);
        return res.status(200).json({ response, message: "PRODUCTS READ" })
    } catch (error) {
        return next(error);
    }
}

const paginate = async (req, res, next) => {
    try {
        // const filter = req.query;
        const { page, limit } = req.query
        const response = await productsManager.paginate({}, { page, limit });
        return res.status(200).json({ response, message: "PRODUCTS READ" })
    } catch (error) {
        return next(error);
    }
}

const read = async (req, res, next) => {
    try {
        const id = req.params.pid;
        const response = await productsManager.read(id);
        return res.status(200).json({ response, message: "PRODUCT READ" })
    } catch (error) {
        return next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.pid;
        const data = req.body;
        const response = await productsManager.update(id, data);
        if(!response){
            return res.status(404).json({ response, message: "PRODUCT NOT FOUND" })
        }else{
            return res.status(200).json({ response, message: "PRODUCT UPDATED" })
        }
    } catch (error) {
        return next(error);
    }
}

const destroy = async (req, res, next) => {
    try {
        const id = req.params.pid;
        const response = await productsManager.destroy(id);
        if(!response){
            return res.status(404).json({ response, message: "PRODUCT NOT FOUND" })
        }else{
            return res.status(200).json({ response, message: "PRODUCT UPDATED" })
        }
    } catch (error) {
        return next(error);
    }
}

async function showAllProducts(req, res, next) {
    try {
        // const filter = req.query;
        const { page, limit } = req.query
        const response = await productsManager.paginate({}, { page, limit: limit || 8, lean: true });
        return res.render("index", {data: response});

    } catch (error) {
        return next(error);
    }
}

async function showProduct(req, res, next) {
    try {
        const pid = req.params.pid;
        console.log(pid)
        const response = await productsManager.read(pid);
        return res.render("productDetail", {data: response})
    } catch (error) {
        return next(error);
    }
}

export {
    create,
    readAll,
    paginate,
    read,
    update,
    destroy,
    showAllProducts,
    showProduct
}

// async function showProduct(req, res, next) {
//     try {
//         const { pid } = req.params;
//         const one = await productsManager.read(pid);

//         if(one){
//             return res.render("productDetail", {data: one})
//         }else{
//             const error = new Error("PRODUCT NOT FOUND");
//             error.statusCode = 404;

//             throw error;
//         }

//     } catch (error) {
//         return next(error);
//     }
// }

// async function adminProducts(req, res, next) {
//     try {

//         let { category } = req.query;
//         let all;

//         if(!category){
//             all = await productsManager.readAll();
//         }else{
//             all = await productsManager.readAll(category);
//         }

//         if(all.length > 0){
//             return res.render("admin", {data: all});
//         }else{
//             const error = new Error("PRODUCTS NOT FOUND");
//             error.statusCode = 404;

//             throw error;
//         }

//     } catch (error) {
//         return next(error);
//     }
// }

// async function deleteViewProduct(req, res, next) {
//     try {
//         const { pid } = req.params;

//         const responseManager = await productsManager.delete(pid);
        
//         if (!responseManager) {
//             const error = new Error("PRODUCT NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         } else {
//             return res.status(200).json({ message: "Producto eliminado correctamente" });
//         }

//     } catch (error) {
//         return next(error);
//     }
// }

// async function showEditProduct(req, res, next) {
//     try {
//         const { pid } = req.params;
//         const product = await productsManager.read(pid);

//         if (product) {
//             return res.render("edit", { product });
//         } else {
//             const error = new Error("PRODUCT NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error);
//     }
// }

// async function updateViewProduct(req, res, next) {
//     try {
//         const { pid } = req.params;
//         const updatedData = req.body;
//         const responseManager = await productsManager.update(pid, updatedData);

//         if (!responseManager) {
//             const error = new Error(`PRODUCT WITH ID: ${pid} NOT FOUND`);
//             error.statusCode = 404;
//             throw error;
//         } else {
//             return res.redirect('/products/admin');
//         }
//     } catch (error) {
//         return next(error);
//     }
// }

// async function createViewProduct(req, res, next) {

//     try {
//         const {
//             title,
//             photo,
//             category,
//             price,
//             stock
//         } = req.body;
        
//         const data = {
//             title,
//             photo,
//             category,
//             price,
//             stock
//         };
    
//         await productsManager.create(data);
    
//         return res.redirect('/products/admin');
        
//     } catch (error) {
//         return next(error);
//     }
// }

// export{
//     // api
//     getAllProducts,
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct,
    
//     // vistas
//     showAllProducts,
//     showProduct,
//     adminProducts,
//     deleteViewProduct,
//     showEditProduct,
//     updateViewProduct,
//     createViewProduct
// }