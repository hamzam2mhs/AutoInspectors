// File: src/__tests__/MobileMenuToggle.test.jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";

// Mock the useCart hook
jest.mock("../contexts/CartContext", () => ({
    useCart: jest.fn(() => ({
        cartItems: [], // Mock an empty cart for the test
    })),
}));

describe("Mobile Menu Toggle in Navbar", () => {
    test("toggles the mobile menu visibility when the menu icon is clicked", () => {
        const { container, getByRole } = render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        // Get the mobile menu toggle button
        const menuToggleButton = container.querySelector(
            "button.text-white.hover\\:text-gray-400"
        );

        if (!menuToggleButton) {
            throw new Error("Menu toggle button not found");
        }

        // Get the mobile menu element
        const mobileMenu = container.querySelector("ul");
        if (!mobileMenu) {
            throw new Error("Mobile menu not found");
        }

        // Ensure the menu is hidden initially
        expect(mobileMenu).toHaveClass("max-h-0 opacity-0");

        // Simulate a click to open the menu
        fireEvent.click(menuToggleButton);
        expect(mobileMenu).toHaveClass("max-h-screen opacity-100");

        // Simulate another click to close the menu
        fireEvent.click(menuToggleButton);
        expect(mobileMenu).toHaveClass("max-h-0 opacity-0");
    });
});
