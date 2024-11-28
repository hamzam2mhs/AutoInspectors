import React, { createContext, useContext, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom hook to access the Cart Context
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component to manage cart state and provide context
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add an item to the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]); // Append the new item to the cart
    };

    // Remove an item from the cart by its unique ID
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    // Clear all items from the cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Provide the cart state and actions to children components
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
