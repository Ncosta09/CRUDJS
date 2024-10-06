import usersManager from "../data/users.manager.js";

async function getAllUsers(req, res, next) {
    try {
        let { category } = req.query;
        let response;

        if(!category){
            response = await usersManager.readAll();
        }else{
            response = await usersManager.readAll(category);
        }

        if(response.length > 0){
            return res.status(200).json({ message: "READ ALL USERS: ", response });
        }else{
            const error = new Error("USERS NOT FOUND");
            error.statusCode = 404;

            throw error;
        }

    } catch (error) {
        return next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const { pid } = req.params;
        const response = await usersManager.read(pid);

        if(response){
            return res.status(200).json({ message: "READ USER: ", response });
        }else{
            const error = new Error("USER NOT FOUND");
            error.statusCode = 404;

            throw error;
        }

    } catch (error) {
        return next(error);
    }
}

async function createUser(req, res, next) {
    try {
        const { 
            email, 
            password, 
            photo = 'default-photo-path.png', 
            role = 0
        } = req.body;
        
        const data = {
            email,
            password,
            photo,
            role
        };
    
        const responseManager = await usersManager.create(data);
    
        return res.status(201).json({ message: "USER CREATED: ", response: responseManager })
        
    } catch (error) {
        return next(error);
    }

    // try {
    //     const data = req.body;
    //     const responseManager = await usersManager.create(data);

    //     return res.status(201).json({ message: "USER CREATED: ", response: responseManager })

    // } catch (error) {
    //     return next(error);
    // }
}

async function updateUser(req, res, next) {
    try {
        const { pid } = req.params;
        const newUserData = req.body;
        const responseManager = await usersManager.update(pid, newUserData);

        if(!responseManager){
            const error = new Error(`USER WITH ID: ${pid} NOT FOUND`);
            error.statusCode = 404;

            throw error;
        }else{
            return res.status(200).json({ message: "USER UPDATED: ", response: responseManager })
        }

    } catch (error) {
        return next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const { pid } = req.params;
        const responseManager = await usersManager.delete(pid);

        if(!responseManager){
            const error = new Error("USER NOT FOUND");
            error.statusCode = 404;

            throw error;
        }else{
            return res.status(200).json({ message: "USER DELETED: ", response: responseManager });
        }

    } catch (error) {
        return next(error);
    }
}

async function authenticateUser(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await usersManager.authenticate(email, password);

        if(user){
            return res.redirect("/products");
        } else {
            return res.render("login", { error: "Invalid email or password" });
        }
    } catch (error) {
        return next(error);
    }
}

async function creteViewUser(req, res, next) {
    try {
        const { 
            email, 
            password, 
            photo, 
            role = 0
        } = req.body;
        
        const data = {
            email,
            password,
            photo,
            role
        };

        console.log(data);
        
    
        await usersManager.create(data);
    
        return res.redirect("/users/login")
        
    } catch (error) {
        return next(error);
    }
}

export{
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,

    // VIEWS
    authenticateUser,
    creteViewUser
}