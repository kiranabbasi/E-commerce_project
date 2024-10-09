import userModel from "../models/UserModel.js"
import orderModel from "../models/OrderModel.js";
import Stripe from 'stripe';

//global variables;
const currency = 'usd';
const deliveryCharges = 10;
//gateway initialize
const  stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//Placing order cash on delivery
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(), 
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        res.status(200).json({ success: true, message: 'Order placed successfully', order: orderData });
        
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ success: false, message: 'Error placing order' });
    }
};
 

//Placing order using stripe
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const {origin} = req.headers;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now(), 
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map((item) =>({
            price_data:{
                currency: currency,
                product_data: {
                    name:item.name
                },
                unit_amount: item.prize * 100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data:{
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: deliveryCharges * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`, 
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment', 
        })

        res.json({success:true, session_url:session.url});


    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ success: false, message: 'Error placing order' });
    }
}

//verify Stripe
const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.body;

    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} });
            res.json({ success: true });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false });
        }
    } catch (error) {
        console.log("Error in verifyStripe:", error);
        res.status(500).json({ success: false, message: 'Error placing order' });
    }
    
};


//Display all orders placed in admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders})
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ success: false, message: 'Error fetching order' });
    }
}


//Display user orders placed in admin panel
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success: true , orders})
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ success: false, message: 'Error placing order' });
    }
}

//Update order status from Admin panel
const UpdateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body;

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message: 'status Updated'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export {placeOrder, placeOrderStripe, verifyStripe, allOrders, userOrders, UpdateStatus}