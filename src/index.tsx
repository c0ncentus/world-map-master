import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
let initialState = {
  tileSize: 100,
  selectedTile: 'TILE0000',
  viewpoints: {},
  scenes: {}
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);