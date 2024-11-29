import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import backgroundImage from "../assets/FormImages/inspection-order.jpg"; // Replace this with the actual path to your background image

const PaymentPage = () => {
    const { cartItems } = useCart(); // Access cart items
    const [formData, setFormData] = useState({
        cardHolderName: "",
        postalCode: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
    });

    // Calculate the subtotal
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
    const gst = subtotal * 0.05; // GST: 5% of subtotal
    const pst = subtotal * 0.07; // PST: 7% of subtotal
    const total = subtotal + gst + pst; // Total including taxes

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add logic to send payment data to backend
        console.log("Submitting payment:", formData);
        console.log("Total amount:", total);
        alert("Payment successful!");
    };

    return (
        <div
            className="relative w-full h-screen bg-gray-200"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
                <div className="bg-white bg-opacity-90 p-10 max-w-3xl w-full shadow-2xl rounded-lg space-y-6 text-gray-800">
                    <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                        Secure Payment
                    </h1>

                    {/* Payment Form */}
                    <form className="mt-8" onSubmit={handleSubmit}>
                        <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
                            {/* Cardholder Name */}
                            <div>
                                <label
                                    htmlFor="cardHolderName"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    id="cardHolderName"
                                    name="cardHolderName"
                                    value={formData.cardHolderName}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Postal Code */}
                            <div>
                                <label
                                    htmlFor="postalCode"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="A1B 2C3"
                                />
                            </div>

                            {/* Card Number */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="cardNumber"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="1234 5678 9012 3456"
                                />
                            </div>

                            {/* Expiry Date */}
                            <div>
                                <label
                                    htmlFor="expDate"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    id="expDate"
                                    name="expDate"
                                    value={formData.expDate}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="MM/YY"
                                />
                            </div>

                            {/* CVV */}
                            <div>
                                <label
                                    htmlFor="cvv"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="123"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-8">
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition transform hover:scale-105 duration-300 ease-out"
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>

                    {/* Summary Section */}
                    <div className="bg-white p-6 rounded-md mt-8">
                        <h3 className="text-lg font-bold text-gray-800">Summary</h3>
                        <ul className="text-gray-800 mt-6 space-y-3">
                            <li className="flex justify-between text-sm">
                                Subtotal <span className="font-bold">${subtotal.toFixed(2)}</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                Manitoba GST (5%) <span className="font-bold">${gst.toFixed(2)}</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                Manitoba PST (7%) <span className="font-bold">${pst.toFixed(2)}</span>
                            </li>
                            <hr className="border-t mt-2" />
                            <li className="flex justify-between text-base font-bold">
                                Total <span>${total.toFixed(2)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
