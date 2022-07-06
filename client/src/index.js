import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DivisaState from './context/divisas/divisaState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <DivisaState>

      <App />

    </DivisaState>
    
  </React.StrictMode>
);
