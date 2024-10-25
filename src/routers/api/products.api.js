import { Router } from "express";
import { create, destroy, read, readAll, update } from "../../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", create);
productsRouter.get("/", readAll);
productsRouter.get("/:pid", read);
productsRouter.put("/:pid", update);
productsRouter.delete("/:pid", destroy);

export default productsRouter;

// import { Router } from "express";
// import { 
//     createProduct, 
//     deleteProduct,
//     getAllProducts,
//     getProduct,
//     updateProduct 
// } from "../../controllers/products.controller.js";
// import { 
//     validateProductData,
//     validateProductUpdateData 
// } from "../../middlewares/validData.mid.js";

// const productsRouter = Router();

// //productsRouter.get("/", index);
// productsRouter.get("/", getAllProducts);
// productsRouter.get("/:pid", getProduct);
// productsRouter.post("/", validateProductData, createProduct);
// productsRouter.put("/:pid", validateProductUpdateData, updateProduct);
// productsRouter.delete("/:pid", deleteProduct);

// export default productsRouter;