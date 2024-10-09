import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: {type: Array, required: true},
    name: {type:String, required: true},
    description: {type:String, required: true},
    prize: {type: Number, required: true},
    Category: {type: String, required: true},
    Color: {type: String, required: true},
    BestSeller: {type: Boolean},
    date: {type: Number, required: true}

})

const ProductModel = mongoose.models.Products || mongoose.model("Products", productSchema);

export default ProductModel;