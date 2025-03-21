import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../components/en.json';
import te from '../components/te.json';
import hi from '../components/hi.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    te: { translation: te },
    hi: { translation: hi },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
