import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import ThemeProvider from './Context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
