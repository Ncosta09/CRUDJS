import { Schema, model } from "mongoose";
import mongoosePaginator from "mongoose-paginate-v2";

const collection = "products"
const schema = new Schema({
    title: { type: String, required: true },
    photo: { type: String, default: "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" },
    category: { type: String, default: "none" },
    price: { type: Number, default: 1 },
    stock: { type: Number, default: 1 }
});

schema.plugin(mongoosePaginator);
const Product = model(collection, schema);
export default Product;