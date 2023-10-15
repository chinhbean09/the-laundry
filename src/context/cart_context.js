import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';

const CartContext = createContext();
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("laundryCart");
    if (localCartData  == []){
        return [];
    } else {
    return JSON.parse(localCartData);
    }
}
const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
};

const CartProvider = ({ children }) => {

    const [state, disptach] = useReducer(reducer, initialState);

    const addToCart = (id, amount, product) => {
        disptach({ type: "ADD_TO_CART", payload: { id, amount, product } })
    };

    //increment and decrement the product in cart

    const setDecrease = (id) => {
        disptach({ type: "SET_DECREMENT", payload:id});
    }

    const setIncrease = (id) => {
        disptach({ type: "SET_INCREMENT", payload:id});
    }


//to remove the item from cart
    const removeItem = (id) => {
        disptach({ type: "REMOVE_ITEM", payload: id });
    }

    //to clean cart
    const cleanCart = () => {
        disptach({ type: "CLEAR_CART"});
    }



    // to add the data in localStorage 
    // get vs set

    useEffect(() => {
        // disptach({ type: "CART_TOTAL_ITEM" });
        // disptach({ type: "CART_TOTAL_PRICE"});
        localStorage.setItem("laundryCart", JSON.stringify(state.cart));
    },[state.cart])


    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, cleanCart, setDecrease, setIncrease}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
};

export { CartProvider, useCartContext };