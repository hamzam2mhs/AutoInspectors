import React from "react";
import { useCart } from "../../contexts/CartContext";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Cart = ({ isCartOpen, onClose }) => {
    const { cartItems, removeFromCart } = useCart();

    if (typeof onClose !== "function") {
        console.error("The 'onClose' prop must be a function.");
        return null;
    }

    // Calculate subtotal
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <Dialog open={isCartOpen} onClose={onClose} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="text-gray-400 hover:text-gray-500"
                                        >
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {cartItems.length === 0 ? (
                                                    <p className="text-gray-500">Your cart is empty</p>
                                                ) : (
                                                    cartItems.map((item, index) => (
                                                        <li key={index} className="flex py-6">
                                                            <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    className="h-full w-full object-cover"
                                                                />
                                                            </div>
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>{item.name}</h3>
                                                                    <p className="ml-4">${item.price}</p>
                                                                </div>
                                                                <div className="mt-1 text-sm text-gray-500">{item.description}</div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Qty: {item.quantity}</p>
                                                                    <button
                                                                        onClick={() => removeFromCart(item.id)}
                                                                        className="font-medium text-red-500 hover:text-red-700"
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">
                                        Shipping and taxes calculated at checkout.
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or{" "}
                                            <button
                                                type="button"
                                                onClick={onClose}
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Cart;
