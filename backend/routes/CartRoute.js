import express from 'express';
import { getUserCart, addToCart, removeFromCart, updateCart, clearCart } from '../controllers/CartController.js';
import authUser from '../middleware/Auth.js';

const cartRouter = express.Router();

cartRouter.post('/get', authUser, getUserCart);
cartRouter.post('/add', authUser, addToCart);
cartRouter.post('/remove', authUser, removeFromCart);
cartRouter.post('/update', authUser, updateCart);
cartRouter.post('/clear', authUser, clearCart);

export default cartRouter;
