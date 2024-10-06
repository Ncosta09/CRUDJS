import { Router } from "express";
import { authenticateUser, creteViewUser } from "../../controllers/users.controller.js";

const usersViewRouter = Router();

usersViewRouter.get("/login", (req, res) => { res.render("login"); });
usersViewRouter.post("/login", authenticateUser);

usersViewRouter.get("/register", (req, res) => { res.render("register"); });
usersViewRouter.post("/register", creteViewUser);

export default usersViewRouter;