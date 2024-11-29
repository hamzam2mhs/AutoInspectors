import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Cart = ({ isCartOpen, onClose }) => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    // Ensure the onClose prop is valid
    if (typeof onClose !== "function") {
        console.error("The 'onClose' prop must be a function.");
        return null;
    }

    // Calculate the subtotal
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate("/payment", {
                state: {
                    cartItems,
                    subtotal,
                },
            });
            onClose(); // Close the cart after navigating
        }
    };

    return (
        <Dialog
            open={isCartOpen}
            onClose={onClose}
            className="fixed inset-0 z-50 flex"
        >
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />

            {/* Cart Panel */}
            <div
                className={`bg-gray-900 text-white shadow-xl w-full max-w-md h-screen fixed right-0 transform transition-transform ${
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center bg-gray-800 px-4 py-3">
                    <h2 className="text-lg font-bold">Shopping Cart</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="p-4 overflow-y-auto" style={{ maxHeight: "80vh" }}>
                    {cartItems.length === 0 ? (
                        <p className="text-gray-400">Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col border-b border-gray-700 py-2"
                                >
                                    <div className="flex justify-between items-center">
                                        {/* Vehicle Type */}
                                        <h3 className="font-medium text-lg">{item.name}</h3>
                                        {/* Price */}
                                        <p className="text-sm text-gray-400">${item.price}</p>
                                    </div>
                                    {/* Details: Year, Make, Model */}
                                    <div className="text-sm text-gray-400 mt-1">
                                        {item.details.year} {item.details.make} {item.details.model}
                                        {item.details.addons && item.details.addons.length > 0 && (
                                            <div className="mt-2">
                                                <p className="text-sm font-bold">Add-ons:</p>
                                                {item.details.addons.map((addon, i) => (
                                                    <p key={i} className="text-sm">
                                                        {addon.name}: ${addon.price}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* Remove Button */}
                                    <div className="flex justify-end mt-2">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 text-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-700 px-4 py-3">
                    <div className="flex justify-between text-lg">
                        <span>Subtotal (CAD)</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        disabled={cartItems.length === 0}
                        className={`w-full mt-4 py-2 rounded-lg ${
                            cartItems.length === 0
                                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                : "bg-yellow-500 text-black hover:bg-yellow-600"
                        }`}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default Cart;
