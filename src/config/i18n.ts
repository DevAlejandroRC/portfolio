import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { 
      escapeValue: false 
    },
    returnObjects: true

  });

export default i18n;