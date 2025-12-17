import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Header } from './components/header';
import './index.css';
import Routes from './routes';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <div className="flex-1 container mx-auto p-6 flex flex-col *:flex-1">
                <Routes />
            </div>
        </BrowserRouter>
    </StrictMode>
);
