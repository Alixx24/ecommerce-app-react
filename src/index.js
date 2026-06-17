throw new Error('index.js is running!');
import { setLocale } from 'yup';

// تنظیم پیغام‌های فارسی Yup
setLocale({
  mixed: { required: ({ path }) => `فیلد ${path} الزامی است` },
  string: { min: ({ path, min }) => `حداقل طول ${path} ${min} کاراکتر می‌باشد` },
});

console.log('Yup locale set'); // برای اطمینان، لاگ بگیرید

// سپس بقیه import ها
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();