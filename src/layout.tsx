// app/layout.jsx (یا app/layout.tsx)
'use client';  // این خط مهم است

import { useEffect } from 'react';
import { setLocale } from 'yup';

export default function RootLayout({ children }) {
  useEffect(() => {
    setLocale({
      mixed: {
        required: ({ path }) => `فیلد ${path} الزامی است`,
      },
      string: {
        min: ({ path, min }) => `حداقل طول ${path} ${min} کاراکتر می باشد`,
      },
    });
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}