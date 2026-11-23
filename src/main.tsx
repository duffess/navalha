import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navalha from './Navalha';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navalha />
  </StrictMode>,
);
