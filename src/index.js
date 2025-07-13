import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/main.scss";

const script1 = document.createElement("script");
script1.async = true;
script1.src = "https://www.googletagmanager.com/gtag/js?id=G-NVV5VKD53Z";
document.head.appendChild(script1);

const script2 = document.createElement("script");
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-NVV5VKD53Z');
`;
document.head.appendChild(script2);
// === Конец Google Analytics ===



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
