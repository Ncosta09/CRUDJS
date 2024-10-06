import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
} from "../../controllers/users.controller.js";
import { 
    validateUserData,
    validateUserUpdateData
} from "../../middlewares/validData.mid.js";


const usersRouter = Router();

//usersRouter.get("/", index);
usersRouter.get("/", getAllUsers);
usersRouter.get("/:pid", getUser);
usersRouter.post("/", validateUserData, createUser);
usersRouter.put("/:pid", validateUserUpdateData, updateUser);
usersRouter.delete("/:pid", deleteUser);

export default usersRouter;