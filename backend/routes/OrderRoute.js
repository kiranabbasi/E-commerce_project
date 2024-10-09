import express from 'express';
import {placeOrder, placeOrderStripe, verifyStripe, allOrders, userOrders, UpdateStatus } from '../controllers/OrderController.js'
import AdminAuth from '../middleware/AdminAuther.js';
import authUser from '../middleware/Auth.js';

const orderRouter = express.Router()

orderRouter.post('/listorders' , AdminAuth, allOrders);
orderRouter.post('/status', AdminAuth, UpdateStatus)

//payment features
orderRouter.post('/ordercod', authUser, placeOrder)
orderRouter.post('/orderstripe', authUser, placeOrderStripe)
orderRouter.post('/verifyStripe', authUser, verifyStripe)

//userfeature
orderRouter.post('/userorders', authUser, userOrders)


export default orderRouter;