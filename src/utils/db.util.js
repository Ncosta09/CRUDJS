import { connect } from "mongoose";

function dbConnect() {
    try {
        connect(process.env.DB_LINK);
        console.log("Mongo DB connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default dbConnect;