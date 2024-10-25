import { Schema, model } from "mongoose";

const collection = "users"
const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, default: "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" },
    role: { type: String, enum: [ "user", "admin", "prem" ], default: "user" },
    isOnline: { type: Boolean, default: false }
});

const User = model(collection, schema);
export default User;