import userModel from "../models/UserModel.js"

// Add products to the user's cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;
        const userData = await userModel.findById(userId);
        let cartData =  await userData.CartData || {};

        if (cartData[itemId]) {
            cartData[itemId] += 1; 
        } else {
            cartData[itemId] = 1; 
        }

        await userModel.findByIdAndUpdate(userId, { CartData: cartData });
        res.json({ success: true, message: 'Added to Cart' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Remove products from the user's cart
const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = await userData.CartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId] > 1) {
                cartData[itemId] -= 1; 
            } else {
                delete cartData[itemId]; 
            }
        }

        await userModel.findByIdAndUpdate(userId, { CartData: cartData });
        res.json({ success: true, message: 'Removed from Cart' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update the quantity of an item in the user's cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, quantity } = req.body;
        if (quantity < 0) {
            return res.json({ success: false, message: 'Quantity cannot be negative' });
        }

        const userData = await userModel.findById(userId);
        let cartData = await userData.CartData || {};

        if (quantity === 0) {
            delete cartData[itemId]; 
        } else {
            cartData[itemId] = quantity; 
        }

        await userModel.findByIdAndUpdate(userId, { CartData: cartData });
        res.json({ success: true, message: 'Cart updated successfully' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Get the user's cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body; // Make sure this is populated correctly
        const userData = await userModel.findById(userId);

        if (!userData) {
            return res.json({ success: false, message: 'User not found' });
        }

        // Make sure you're accessing the correct property
        let cartData = userData.CartData || {}; 

        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//clear all cart data
const clearCart = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ success: false, message: 'User ID is required' });
        }
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        await userModel.findByIdAndUpdate(userId, { CartData: {} });

        res.json({ success: true, message: 'Cart cleared successfully' });
    } catch (error) {
        console.error('Error clearing cart:', error);
        res.status(500).json({ success: false, message: 'An error occurred while clearing the cart' });
    }
};


export { addToCart, removeFromCart, updateCart, getUserCart, clearCart }