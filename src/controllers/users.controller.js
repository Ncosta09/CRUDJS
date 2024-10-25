import usersManager from "../data/managers/users.manager.js";

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await usersManager.create(data);
        return res.status(201).json({ response, message: "USER CREATED" })
    } catch (error) {
        return next(error);
    }
}

const readAll = async (req, res, next) => {
    try {
        const filter = req.query;
        const response = await usersManager.readAll(filter);
        return res.status(200).json({ response, message: "USERS READ" })
    } catch (error) {
        return next(error);
    }
}

const read = async (req, res, next) => {
    try {
        const id = req.params.uid;
        const response = await usersManager.read(id);
        return res.status(200).json({ response, message: "USER READ" })
    } catch (error) {
        return next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.uid;
        const data = req.body;
        const response = await usersManager.update(id, data);
        if(!response){
            return res.status(404).json({ response, message: "USER NOT FOUND" })
        }else{
            return res.status(200).json({ response, message: "USER UPDATED" })
        }
    } catch (error) {
        return next(error);
    }
}

const destroy = async (req, res, next) => {
    try {
        const id = req.params.uid;
        const response = await usersManager.destroy(id);
        if(!response){
            return res.status(404).json({ response, message: "USER NOT FOUND" })
        }else{
            return res.status(200).json({ response, message: "USER UPDATED" })
        }
    } catch (error) {
        return next(error);
    }
}

export {
    create,
    readAll,
    read,
    update,
    destroy
}



// import usersManager from "../data/managers/users.manager.js";

// async function getAllUsers(req, res, next) {
//     try {
//         let { category } = req.query;
//         let response;

//         if(!category){
//             response = await usersManager.readAll();
//         }else{
//             response = await usersManager.readAll(category);
//         }

//         if(response.length > 0){
//             return res.status(200).json({ message: "READ ALL USERS: ", response });
//         }else{
//             const error = new Error("USERS NOT FOUND");
//             error.statusCode = 404;

//             throw error;
//         }

//     } catch (error) {
//         return next(error);
//     }
// }

// async function getUser(req, res, next) {
//     try {
//         const { pid } = req.params;
//         const response = await usersManager.read(pid);

//         if(response){
//             return res.status(200).json({ message: "READ USER: ", response });
//         }else{
//             const error = new Error("USER NOT FOUND");
//             error.statusCode = 404;

//             throw error;
//         }

//     } catch (error) {
//         return next(error);
//     }
// }

// async function createUser(req, res, next) {
//     try {
//         const { 
//             email, 
//             password, 
//             photo = 'default-photo-path.png', 
//             role = 0
//         } = req.body;
        
//         const data = {
//             email,
//             password,
//             photo,
//             role
//         };
    
//         const responseManager = await usersManager.create(data);
    
//         return res.status(201).json({ message: "USER CREATED: ", response: responseManager })
        
//     } catch (error) {
//         return next(error);
//     }

//     // try {
//     //     const data = req.body;
//     //     const responseManager = await usersManager.create(data);

//     //     return res.status(201).json({ message: "USER CREATED: ", response: responseManager })

//     // } catch (error) {
//     //     return next(error);
//     // }
// }

// async function updateUser(req, res, next) {
//     try {
//         const { pid } = req.params;
//         const newUserData = req.body;
//         const responseManager = await usersManager.update(pid, newUserData);

//         if(!responseManager){
//             const error = new Error(`USER WITH ID: ${pid} NOT FOUND`);
//             error.statusCode = 404;

//             throw error;
//         }else{
//             return res.status(200).json({ message: "USER UPDATED: ", response: responseManager })
//         }

//     } catch (error) {
//         return next(error);
//     }
// }

// async function deleteUser(req, res, next) {
//     try {
//         const { pid } = req.params;
//         const responseManager = await usersManager.delete(pid);

//         if(!responseManager){
//             const error = new Error("USER NOT FOUND");
//             error.statusCode = 404;

//             throw error;
//         }else{
//             return res.status(200).json({ message: "USER DELETED: ", response: responseManager });
//         }

//     } catch (error) {
//         return next(error);
//     }
// }

// async function authenticateUser(req, res, next) {
//     const { email, password } = req.body;
//     console.log(req.body);

//     try {
//         const user = await usersManager.authenticate(email, password);
//         console.log("ver user "+ user);

//         if(user){
//             await usersManager.update(user.id, { isOnline: true });
//             return res.redirect(`/users/profile/${user.id}`);
            
//         } else {
//             return res.render("login", { error: "Invalid email or password" });
//         }
//     } catch (error) {
//         return next(error);
//     }
// }

// async function creteViewUser(req, res, next) {
//     try {
//         const { 
//             email, 
//             password, 
//             photo, 
//             role = 0
//         } = req.body;
        
//         const data = {
//             email,
//             password,
//             photo,
//             role,
//             isOnline: false
//         };

//         console.log(data);
        
    
//         await usersManager.create(data);
    
//         return res.redirect("/users/login")
        
//     } catch (error) {
//         return next(error);
//     }
// }

// async function logOutView(req, res, next) {
//     try {
//         const { email } = req.body;

//         const user = await usersManager.findByEmail(email);
//         console.log("este es el user: " + user);
        
//         if (user) {
//             await usersManager.update(user.id, { isOnline: false });
//         }
        
//         res.redirect("/users/login");
//     } catch (error) {
//         return next(error);
//     }
// }

// async function profileView(req, res, next) {
//     try {
//         const userId = req.params.id;
//         const user = await usersManager.read(userId); 

//         if (user && user.isOnline) {
//             res.render("profile", { user });
//         } else {
//             res.redirect("/users/login");
//         }
//     } catch (error) {
//         return next(error);
//     }
// }

// export{
//     getAllUsers,
//     getUser,
//     createUser,
//     updateUser,
//     deleteUser,

//     // VIEWS
//     authenticateUser,
//     creteViewUser,
//     logOutView,
//     profileView
// }