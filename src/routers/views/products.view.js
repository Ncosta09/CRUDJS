import { Router } from "express";
import { showAllProducts, showProduct } from "../../controllers/products.controller.js";

const productsViewRouter = Router();

productsViewRouter.get("/", showAllProducts);
productsViewRouter.get("/:pid", showProduct);

export default productsViewRouter;