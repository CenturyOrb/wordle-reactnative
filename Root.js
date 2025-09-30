import React from 'react';
import App from './App';
import { AppProvider } from './AppContext';

export default function Root() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

