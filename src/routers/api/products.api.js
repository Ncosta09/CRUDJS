import { Router } from "express";
import { 
    createProduct, 
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct 
} from "../../controllers/products.controller.js";
import validateProductData from "../../middlewares/validData.mid.js";

const productsRouter = Router();

//productsRouter.get("/", index);
productsRouter.get("/", getAllProducts);
productsRouter.get("/:pid", getProduct);
productsRouter.post("/", validateProductData , createProduct);
productsRouter.put("/:pid", updateProduct);
productsRouter.delete("/:pid", deleteProduct);

export default productsRouter;