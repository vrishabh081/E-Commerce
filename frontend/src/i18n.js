// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import frTranslation from './fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    lng: 'fr', // Set the default language here
    fallbackLng: 'fr', // Fallback language if a translation is not found
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
