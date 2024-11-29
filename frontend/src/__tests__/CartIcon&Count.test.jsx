import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";

// Mock the CartContext
jest.mock("../contexts/CartContext", () => ({
  useCart: jest.fn(),
}));

describe("Cart Icon and Count in Navbar", () => {
  test("displays cart icon with correct item count", () => {
    const mockCartItems = [
      {
        id: 1,
        name: "Test Item",
        price: 100,
        details: {
          year: 2022,
          make: "Test Make",
          model: "Test Model",
          addons: [],
        },
      },
    ];

    // Mock the CartContext's useCart hook
    const { useCart } = require("../contexts/CartContext");
    useCart.mockReturnValue({
      cartItems: mockCartItems,
    });

    const { getByText, getByRole } = render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
    );

    // Check if the cart icon is present
    const cartIcon = getByRole("button", { name: /cart/i });
    expect(cartIcon).toBeInTheDocument();

    // Check that the cart count displays the correct number
    expect(getByText("1")).toBeInTheDocument();
  });

  test("displays zero when cart is empty", () => {
    const mockCartItems = []; // Empty cart

    // Mock the CartContext's useCart hook
    const { useCart } = require("../contexts/CartContext");
    useCart.mockReturnValue({
      cartItems: mockCartItems,
    });

    const { queryByText, getByRole } = render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
    );

    // Check if the cart icon is present
    const cartIcon = getByRole("button", { name: /cart/i });
    expect(cartIcon).toBeInTheDocument();

    // Ensure no cart count is displayed when cart is empty
    expect(queryByText("0")).not.toBeInTheDocument();
  });
});
