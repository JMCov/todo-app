import React from 'react';
import ReactDOM from 'react-dom/client';
import { SettingsProvider } from './Context/Settings/index'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SettingsProvider>
);
