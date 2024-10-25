import { Schema, Types, model } from "mongoose";

const collection = "carts"
const schema = new Schema({
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    product_id: { type: Types.ObjectId, ref: "products", required: true },
    quantity: { type: String, default: 1 },
    state: { type: String, default: "reserved", enum: [ "reserved", "pais", "delivered" ] },
});

const Cart = model(collection, schema);
export default Cart;