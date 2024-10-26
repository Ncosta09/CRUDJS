import { Router } from "express";
import { showAllProducts } from "../../controllers/products.controller.js";
// import productsViewRouter from "./products.view.js";
// import usersViewRouter from "./users.view.js";

const viewRouter = Router();

viewRouter.use("/", showAllProducts);
// viewRouter.use("/products", productsViewRouter);
// viewRouter.use("/users", usersViewRouter);

export default viewRouter;