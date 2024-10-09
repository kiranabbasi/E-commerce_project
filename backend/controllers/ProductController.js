import { v2 as cloudinary} from 'cloudinary';
import ProductModel from '../models/ProductModel.js';

//function for adding products
const addProduct = async (req, res) => {
    try {
        const { name, description, Category, Color, prize, BestSeller } = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter(item => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const ProductData = {
            name,
            description,
            Category,
            prize: Number(prize),
            Color,
            BestSeller,  // This now directly reflects the value from the frontend
            image: imagesUrl,
            date: Date.now()
        };

        console.log(ProductData);

        const Product = new ProductModel(ProductData);
        await Product.save();

        res.json({ success: true, message: "Product added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


//function for list products 
const listProducts = async (req,res) => {
    try {
        const Products = await ProductModel.find({});
        res.json({success:true, Products}) 

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

//function for removing product
const removeProduct = async (req,res) => {
    try {
        await ProductModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message: "Product removed"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }

}

//function for single Product info;
const singleProduct = async (req,res) => {
    try {
        const {ProductId} = req.body
        const Product = await ProductModel.findById(ProductId);
        res.json({success:true, Product})

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export {addProduct, listProducts, removeProduct, singleProduct};