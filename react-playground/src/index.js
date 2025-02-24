import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
// need to find away around this
// /import  '../node_modules/hs-component-lib/dist/bundle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <App />
     </ThemeProvider>
  </React.StrictMode>
);

