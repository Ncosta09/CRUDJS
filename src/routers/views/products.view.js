import { Router } from "express";
import { showProduct } from "../../controllers/products.controller.js";

const productsViewRouter = Router();

//VER SOLO UNO
productsViewRouter.get("/:pid", showProduct);

//VER TODOS
// productsViewRouter.get("/admin", adminProducts); 

// //ELIMIMNAR
// productsViewRouter.delete("/admin/:pid", deleteViewProduct);

// //CREAR
// productsViewRouter.get("/admin/create", (req, res) => { res.render("create"); });
// productsViewRouter.post("/admin/create", createViewProduct);

// //ACTUALIZAR
// productsViewRouter.get("/admin/edit/:pid", showEditProduct);
// productsViewRouter.post("/admin/:pid", updateViewProduct);


export default productsViewRouter;