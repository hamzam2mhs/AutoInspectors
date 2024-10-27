import React, { useState, useRef, useEffect } from "react";

const TermsAndConditionsModal = ({ onAccept, onCancel }) => {
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false); // Track if scrolled to bottom
    const termsRef = useRef(null); // Reference to the terms container

    // Function to check if the user has scrolled to the bottom
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = termsRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
            setIsScrolledToBottom(true);
        }
    };

    useEffect(() => {
        const termsElement = termsRef.current;
        if (termsElement) {
            termsElement.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (termsElement) {
                termsElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
                <div
                    ref={termsRef}
                    className="h-60 overflow-y-auto mb-4 text-gray-700"
                >
                    <p className="mb-4">
                        <strong>Disclaimer of Warranty</strong> <br />
                        The inspection report provided is based on the vehicle's condition
                        at the time of the inspection. We make no warranties, either express
                        or implied, regarding the accuracy, completeness, or reliability of
                        the information presented in the report. The report is for
                        informational purposes only and does not guarantee the future
                        performance, condition, or safety of the vehicle.
                    </p>
                    <p className="mb-4">
                        <strong>Limitation of Liability</strong> <br />
                        We shall not be liable for any damages, including but not limited to
                        direct, indirect, incidental, or consequential damages, arising from
                        the use of our inspection report or services. You acknowledge that
                        the responsibility for decisions regarding the purchase, sale, or
                        use of the vehicle remains with you, the customer.
                    </p>
                    <p className="mb-4">
                        <strong>No Legal Recourse</strong> <br />
                        By accepting this report, you waive any right to bring legal action
                        against us or our inspectors for any claims arising from the content
                        of the report, the condition of the vehicle, or the use of our
                        services.
                    </p>
                    <p className="mb-4">
                        <strong>Agreement to Terms</strong> <br />
                        By commissioning and using our services, you acknowledge that you
                        have read and understood these terms and conditions, and you agree
                        to be bound by them.
                    </p>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="bg-gray-400 px-4 py-2 rounded text-white"
                    >
                        Cancel
                    </button>
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

                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsModal;
