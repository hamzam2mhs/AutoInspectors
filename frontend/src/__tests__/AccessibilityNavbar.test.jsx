import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/navbar"; // Update the path if necessary
import { CartProvider } from "../contexts/CartContext";

describe("Navbar Accessibility", () => {
    test("has proper ARIA roles and labels for buttons and links", () => {
        const mockCartItems = [];
        render(
            <CartProvider value={{ cartItems: mockCartItems }}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </CartProvider>
        );

        // Check for the menu toggle button role and accessible name
        const menuToggleButton = screen.getByRole("button", { name: /menu/i }); // Ensure the button has an accessible name like "Menu"
        expect(menuToggleButton).toBeInTheDocument();

        // Check for the Admin link role and label
        const adminLink = screen.getByRole("button", { name: /admin/i }); // Ensure the Admin button has an accessible name
        expect(adminLink).toBeInTheDocument();

        // Check for navigation links
        const homeLink = screen.getByRole("link", { name: /home/i });
        const inspectionOrderLink = screen.getByRole("link", { name: /inspection order/i });
        const blogLink = screen.getByRole("link", { name: /blog/i });
        const contactUsLink = screen.getByRole("link", { name: /contact us/i });

        expect(homeLink).toBeInTheDocument();
        expect(inspectionOrderLink).toBeInTheDocument();
        expect(blogLink).toBeInTheDocument();
        expect(contactUsLink).toBeInTheDocument();

        // Check for the cart button role and accessible name
        const cartButton = screen.getByRole("button", { name: /cart/i });
        expect(cartButton).toBeInTheDocument();
    });
});
