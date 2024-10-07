import { Router } from "express";
import { 
    adminProducts,
    deleteViewProduct,
    showAllProducts,
    showEditProduct,
    showProduct,
    updateViewProduct
} from "../../controllers/products.controller.js";

const productsViewRouter = Router();

//VER TODOS
productsViewRouter.get("/", showAllProducts);
productsViewRouter.get("/admin", adminProducts); 

//ELIMIMNAR
productsViewRouter.delete("/admin/:pid", deleteViewProduct);

//ACTUALIZAR
productsViewRouter.get("/admin/edit/:pid", showEditProduct);
productsViewRouter.post("/admin/:pid", updateViewProduct);

//VER SOLO UNO
productsViewRouter.get("/:pid", showProduct);

export default productsViewRouter;