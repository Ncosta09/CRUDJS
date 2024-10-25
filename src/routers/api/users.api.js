import { Router } from "express";
import { create, destroy, read, readAll, update } from "../../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.post("/", create);
usersRouter.get("/", readAll);
usersRouter.get("/:uid", read);
usersRouter.put("/:uid", update);
usersRouter.delete("/:uid", destroy);

export default usersRouter;

// import { Router } from "express";
// import { 
//     createUser,
//     deleteUser,
//     getAllUsers,
//     getUser,
//     updateUser
// } from "../../controllers/users.controller.js";
// import { 
//     validateUserData,
//     validateUserUpdateData
// } from "../../middlewares/validData.mid.js";


// const usersRouter = Router();

// //usersRouter.get("/", index);
// usersRouter.get("/", getAllUsers);
// usersRouter.get("/:pid", getUser);
// usersRouter.post("/", validateUserData, createUser);
// usersRouter.put("/:pid", validateUserUpdateData, updateUser);
// usersRouter.delete("/:pid", deleteUser);

// export default usersRouter;