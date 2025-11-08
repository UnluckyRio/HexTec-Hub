import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Router per gestire le rotte client-side
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Avvolgiamo l’app nel BrowserRouter per abilitare il routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);