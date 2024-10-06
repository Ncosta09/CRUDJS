import express from "express";
import morgan from "morgan";
import cors from "cors";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import router from "./src/routers/index.router.js"
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";

try {

    const server = express();
    const port = 8080;
    const ready = () => console.log("server ready on port " + port);
    
    server.use(express.urlencoded({extended: true}));
    server.use(express.json());
    server.use(morgan("dev"));
    server.use(cors());
    server.use("/public", express.static("public"));
    
    server.engine("handlebars", engine());
    server.set("view engine", "handlebars");
    server.set("views", __dirname + "/src/views");

    server.use(router);
    server.use(errorHandler);
    server.use(pathHandler);
    
    server.listen(port, ready);

} catch (error) {
    
    console.log(error);   
}