import { Router } from "express";
import productsViewRouter from "./products.view.js";
import usersViewRouter from "./users.view.js";

const viewRouter = Router();

viewRouter.get("/", (req, res, next)=> {
    try {
        return res.redirect("/products"); //res.render("index") pero me confundi en la creacion del proyecto
    } catch (error) {
        return next(error);
    }
});

viewRouter.use("/products", productsViewRouter);
viewRouter.use("/users", usersViewRouter);

export default viewRouter;