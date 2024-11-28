import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './contexts/CartContext'; // Import CartProvider

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider> {/* Wrap the app with CartProvider */}
            <App />
        </CartProvider>
    </StrictMode>
);
