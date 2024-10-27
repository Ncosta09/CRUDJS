import { Router } from "express";
import { registerUser } from "../../controllers/users.controller.js";

const usersViewRouter = Router();

usersViewRouter.get("/login", (req, res) => { res.render("login"); });
usersViewRouter.post("/login", );

usersViewRouter.get("/register", (req, res) => { res.render("register"); });
usersViewRouter.post("/register", registerUser);

// usersViewRouter.get("/profile/:id", );
// usersViewRouter.post("/logout", );

export default usersViewRouter;