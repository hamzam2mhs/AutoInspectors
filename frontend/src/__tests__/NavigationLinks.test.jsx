import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import { CartProvider } from "../contexts/CartContext";

/**
 * Test Suite: Navigation Links
 * This test suite verifies that the navigation links in the Navbar component
 * are rendered correctly with the appropriate text and href attributes.
 */
describe("Navigation Links in Navbar", () => {
    test("renders navigation links with correct text and hrefs", () => {
        // Render the Navbar component wrapped with CartProvider and BrowserRouter for context
        const { getByText } = render(
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </CartProvider>
        );

        // Assert that the "Home" link is present and has the correct href
        expect(getByText("Home").closest("a")).toHaveAttribute("href", "/");

        // Assert that the "Inspection Order" link is present and has the correct href
        expect(getByText("Inspection Order").closest("a")).toHaveAttribute("href", "/inspection");

        // Assert that the "Blog" link is present and has the correct href
        expect(getByText("Blog").closest("a")).toHaveAttribute("href", "/blog");

        // Assert that the "Contact Us" link is present and has the correct href
        expect(getByText("Contact Us").closest("a")).toHaveAttribute("href", "/contact");
    });
});
