import React from "react"; // Import React for JSX support
import { render } from "@testing-library/react"; // Import render for component rendering in tests
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing context
import Navbar from "../components/Navbar/navbar"; // Import the Navbar component to be tested
import { CartProvider } from "../contexts/CartContext"; // Import CartProvider to mock cart context

/**
 * Test Suite for Navbar Component
 */
describe("Navbar Component", () => {
    /**
     * Test Case: Verify that the Navbar logo renders correctly
     */
    test("renders the Navbar logo", () => {
        // Render the Navbar component within required context (CartProvider and BrowserRouter)
        const { getByAltText } = render(
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </CartProvider>
        );

        // Assertion: Check if the logo is rendered by looking for its alt text
        expect(getByAltText("Car Inspection Logo")).toBeInTheDocument();
    });

    // Additional tests can be added below...
});
