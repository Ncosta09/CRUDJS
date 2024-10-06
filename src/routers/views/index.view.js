import { Router } from "express";
import productsViewRouter from "./products.view.js";
import usersViewRouter from "./users.view.js";

const viewRouter = Router();

viewRouter.get("/", (req, res, next)=> {
    try {
        return res.render("index");
    } catch (error) {
        return next(error);
    }
});

viewRouter.use("/products", productsViewRouter);
viewRouter.use("/users", usersViewRouter);

export default viewRouter;