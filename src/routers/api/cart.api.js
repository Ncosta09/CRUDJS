import { Router } from "express";
import { calculateTotlal, create, destroy, read, readAll, update } from "../../controllers/cart.controller.js";

const cartsRouter = Router();

cartsRouter.post("/", create);
cartsRouter.get("/", readAll);
cartsRouter.get("/total/:uid", calculateTotlal);
cartsRouter.get("/:cid", read);
cartsRouter.put("/:cid", update);
cartsRouter.delete("/:cid", destroy);

export default cartsRouter;