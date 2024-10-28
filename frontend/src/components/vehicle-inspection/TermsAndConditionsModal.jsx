import React, { useState, useEffect } from "react";

const TermsAndConditionsModal = ({ onAccept, onCancel }) => {
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

    // Track scrolling in the modal
    const handleScroll = (e) => {
        const bottom =
            e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        setIsScrolledToBottom(bottom);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>

                <div
                    className="h-64 overflow-y-auto border border-gray-300 p-4 rounded"
                    onScroll={handleScroll}
                >
                    {/* Scrollable content of the terms and conditions */}
                    <p className="mb-4">
                        <strong>Disclaimer of Warranty:</strong> The inspection report provided is based on the vehicle's condition at the time of the inspection. We make no warranties, either express or implied, regarding the accuracy, completeness, or reliability of the information presented in the report. The report is for informational purposes only and does not guarantee the future performance, condition, or safety of the vehicle.
                    </p>

                    <p className="mb-4">
                        <strong>Limitation of Liability:</strong> We shall not be liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use of our inspection report or services. You acknowledge that the responsibility for decisions regarding the purchase, sale, or use of the vehicle remains with you, the customer.
                    </p>

                    <p className="mb-4">
                        <strong>No Legal Recourse:</strong> By accepting this report, you waive any right to bring legal action against us or our inspectors for any claims arising from the content of the report, the condition of the vehicle, or the use of our services.
                    </p>

                    <p className="mb-4">
                        <strong>Agreement to Terms:</strong> By commissioning and using our services, you acknowledge that you have read and understood these terms and conditions, and you agree to be bound by them.
                    </p>
                </div>

                {/* Accept button becomes enabled only when scrolled to the bottom */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onAccept}
                        disabled={!isScrolledToBottom}
                        className={`px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ease-out ${
                            isScrolledToBottom
                                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105"
                                : "bg-gray-400 text-gray-200"
                        }`}
                    >
                        Accept
                    </button>
                    <button
                        className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsModal;
