import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n.ts';

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Suspense fallback="loader...">
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.Suspense>,
)
