import React, { useState } from "react";
import backgroundImage from "../../assets/FormImages/inspection-order.jpg";

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        cardNumber: "",
        cardExpiry: "",
        cardCVV: "",
        name: "",
        address: "",
        postalCode: "",
        amount: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Payment:", formData);
        // Add your payment submission logic here
    };

    return (
        <div className="relative w-full h-screen bg-gray-200">
            <img
                src={backgroundImage}
                alt="Payment Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-60">
                <div className="bg-white bg-opacity-90 p-10 max-w-3xl w-full shadow-2xl rounded-lg space-y-6 text-gray-800">
                    <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                        Secure Payment
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="1234 5678 9012 3456"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    name="cardExpiry"
                                    value={formData.cardExpiry}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="MM/YY"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    name="cardCVV"
                                    value={formData.cardCVV}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="123"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Cardholder Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="123 Main St"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Postal Code
                            </label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="A1B 2C3"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="100.00"
                            />
                        </div>

                        <div className="text-center mt-8">
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition transform hover:scale-105 duration-300 ease-out"
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
