import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/navbar"; // Update the path if necessary
import { CartProvider } from "../contexts/CartContext"; // Use the CartProvider for testing

// Mock the `useNavigate` function from react-router-dom
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("Admin Button Navigation in Navbar", () => {
    test("navigates to the admin page when the Admin button is clicked", () => {
        const mockNavigate = jest.fn();

        // Mock `useNavigate`
        const { useNavigate } = require("react-router-dom");
        useNavigate.mockReturnValue(mockNavigate);

        // Render the Navbar wrapped with CartProvider and BrowserRouter
        const { getByText } = render(
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </CartProvider>
        );

        // Find the Admin button and simulate a click
        const adminButton = getByText(/Admin/i);
        expect(adminButton).toBeInTheDocument();
        fireEvent.click(adminButton);

        // Check if the `useNavigate` function was called with the correct arguments
        expect(mockNavigate).toHaveBeenCalledWith("/admin", { state: { resetAuth: true } });
    });
});
