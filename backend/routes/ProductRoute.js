import express from 'express';
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/ProductController.js';
import upload from '../middleware/Multer.js';
import AdminAuth from '../middleware/AdminAuther.js';

const ProductRouter = express.Router();

ProductRouter.post('/add', AdminAuth, upload.fields([{name:'image1', maxCount:1},{name:'image2', maxCount:1},{name:'image3', maxCount:1},{name:'image4', maxCount:1}]), addProduct);
ProductRouter.post('/remove', removeProduct);
ProductRouter.get('/listProduct', listProducts);
ProductRouter.post('/singleProduct', singleProduct);

export default ProductRouter;