import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../components/ErrorBoundary"; // Adjust path based on your file structure

// A component that throws an error for testing
const ProblematicComponent = () => {
    throw new Error("Test error");
};

describe("ErrorBoundary Behavior", () => {
    test("displays fallback UI when a child component throws an error", () => {
        render(
            <ErrorBoundary>
                <ProblematicComponent />
            </ErrorBoundary>
        );

        // Check that the fallback UI is rendered
        expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
    });

    test("renders child components when no error occurs", () => {
        const SafeComponent = () => <div>Safe Component</div>;

        render(
            <ErrorBoundary>
                <SafeComponent />
            </ErrorBoundary>
        );

        // Check that the safe component is rendered
        expect(screen.getByText("Safe Component")).toBeInTheDocument();
    });
});
