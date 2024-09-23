import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
} from "../../controllers/users.controller.js";
//import middleware

const usersRouter = Router();

//usersRouter.get("/", index);
usersRouter.get("/", getAllUsers);
usersRouter.get("/:pid", getUser);
usersRouter.post("/", createUser);
usersRouter.put("/:pid", updateUser);
usersRouter.delete("/:pid", deleteUser);

export default usersRouter;