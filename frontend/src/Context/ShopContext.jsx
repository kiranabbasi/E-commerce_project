import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BackendUrl } from "../App";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const Currency = '$';
    const DeliveryFee = 10;
    const [Search, setSearch] = useState("");
    const [ShowSearch, setShowSearch] = useState(false);
    const [CartItems, setCartItems] = useState({});
    const [Products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const AddToCart = async (itemId) => {
        let CartData = structuredClone(CartItems);
        const productExists = Products.some(product => product._id === itemId);
    
        if (!productExists) {
            toast.error("Product does not exist!");
            return;
        }
        if(!token){
            toast.error("Authorize Login first.")
            return;
        }
    
        CartData[itemId] = (CartData[itemId] || 0) + 1;
        setCartItems(CartData);
        
        if (token) {
            try {
                await axios.post(`${BackendUrl}/api/cart/add`, { itemId }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error('An error occurred while adding to cart');
            }
        }
    };
    
    const RemoveFromCart = async (itemId) => {
        let CartData = structuredClone(CartItems);
        if (CartData[itemId]) {
            CartData[itemId] = Math.max(CartData[itemId] - 1, 0);
        }
        setCartItems(CartData);

        if (token) {
            try {
                await axios.post(`${BackendUrl}/api/cart/remove`, { itemId }, { headers: { token } }); 
            } catch (error) {
                console.log(error);
                toast.error(error.message);  // Display actual error message
            }
        }
    };
    
    const UpdateQuantity = async (itemId, Quantity) => {
        let CartData = structuredClone(CartItems);
        CartData[itemId] = Quantity;
        setCartItems(CartData);

        if (token) {
            try {
                await axios.post(`${BackendUrl}/api/cart/update`, { itemId, Quantity }, { headers: { token } }); 
            } catch (error) {
                console.log(error);
                toast.error(error.message);  // Display actual error message
            }
        }
    };

    const clearCart = async () => {
        setCartItems({});  
        
        if (token) {
            try {
                const response = await axios.post(
                    `${BackendUrl}/api/cart/clear`, 
                    { userId: token.userId }, 
                    { headers: { token } } 
                );
                if (response.data.success) {
                    console.log('Cart cleared successfully');
                } else {
                    console.log('Error clearing the cart');
                }
            } catch (error) {
                console.log(error);
                toast.error('An error occurred while clearing the cart');
            }
        }
    };
    

    const getUserCart = async (token) => {
        if (token) {
            try {
                const response = await axios.post(
                    `${BackendUrl}/api/cart/get`, 
                    { userId: token.userId }, // Pass the userId
                    { headers: { token } } // Include the token in headers
                );
                if (response.data.success) {
                    setCartItems(response.data.cartData);
                } else {
                    toast.error(response.data.message || 'Error fetching cart data');
                }
            } catch (error) {
                console.log(error.response); // Log the error response for debugging
                toast.error(error.message);
            }
        }
    };
    
    
    const getCartCount = () => {
        let TotalCount = 0;
        for (const items in CartItems) {
            if (CartItems[items] > 0) {
                TotalCount += CartItems[items];
            }
        }
        return TotalCount;
    };
    
    const getCartAmount = () => {
        let TotalAmount = 0;
        for (const items in CartItems) {
            let ItemInfo = Products.find((product) => product._id === items);
            if (CartItems[items] > 0 && ItemInfo) {
                TotalAmount += ItemInfo.prize * CartItems[items];
            }
        }
        return TotalAmount;
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${BackendUrl}/api/product/listProduct`);
                if (response.data.success) {
                    setProducts(response.data.Products);
                } else {
                    toast.error(response.data.message || 'Error displaying products');
                }
            } catch (err) {
                toast.error('Error fetching the list');
            } 
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            getUserCart(storedToken);
        }
    }, []);

    // This effect runs whenever the token changes
    useEffect(() => {
        if (token) {
            getUserCart(token);
        }
    }, [token]);

    const value = {
        Products, Currency, DeliveryFee,
        Search, setSearch, ShowSearch, setShowSearch,
        CartItems, setCartItems, AddToCart, RemoveFromCart,
        getCartCount, UpdateQuantity, clearCart,
        getCartAmount, navigate,
        token, setToken,
        BackendUrl,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;  
