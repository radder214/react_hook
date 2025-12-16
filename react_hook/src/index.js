import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  
  // <React.StrictMode> 해제하고 싶으면 <React>로 수정하는게 아니라
  // <React.StrictMode> 자체를 지워버리면 된다.
);