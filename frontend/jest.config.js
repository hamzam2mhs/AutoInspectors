export default {
    testEnvironment: "jest-environment-jsdom", // For React DOM tests
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Setup file
    transform: {
        "^.+\\.jsx?$": "babel-jest", // Use Babel for JavaScript/JSX files
    },
    moduleNameMapper: {
        // Mock static file imports (e.g., CSS, images)
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },
};
