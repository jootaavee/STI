import React, { StrictMode, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routes/AppRoutes.tsx';
import reportWebVitals from './reportWebVitals';

// Componente para desabilitar o zoom
const DisableZoom = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey || event.metaKey) {
                if (event.key === '+' || event.key === '-' || event.key === '=' || event.key === '_') {
                    event.preventDefault();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null; // Não renderiza nada visivelmente
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <DisableZoom />
        <Routes />
    </StrictMode>
);

reportWebVitals();