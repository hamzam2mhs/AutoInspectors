import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/navbar"; // Update the path if necessary
import { CartProvider } from "../contexts/CartContext";

describe("Cart in Mobile Menu", () => {
    beforeAll(() => {
        // Set a smaller viewport to simulate mobile screen
        window.innerWidth = 375;
        window.dispatchEvent(new Event("resize"));
    });

    afterAll(() => {
        // Reset the viewport size after the test
        window.innerWidth = 1024;
        window.dispatchEvent(new Event("resize"));
    });

    test('shows "Cart" text in the mobile menu', () => {
        const mockCartItems = [];
        const { getByRole, getByText } = render(
            <CartProvider value={{ cartItems: mockCartItems }}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </CartProvider>
        );

        // Find the menu toggle button
        const menuToggleButton = getByRole("button", { name: /menu/i }); // Update based on accessible name if necessary
        expect(menuToggleButton).toBeInTheDocument();

        // Simulate a click to open the menu
        fireEvent.click(menuToggleButton);

        // Check that the "Cart" text appears in the mobile menu
        const cartText = getByText(/Cart/i);
        expect(cartText).toBeInTheDocument();
    });
});
