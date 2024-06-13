import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

const store = require('store');
let selectedLanguage = store?.get('DisplaySettings')?.selectedLanguage;

i18n.use(LanguageDetector).use(initReactI18next).use(Backend);
var options;

switch (process.env.NODE_ENV) {
  case 'production':
    options = {
      debug: false,
      lng: selectedLanguage?.code || 'fr',
      fallbackLng: 'fr',
      ns: ['translation'],
      defaultNS: 'translation',
      backend: {
        loadPath: './assets/locales/{{lng}}/{{ns}}.json',
      },
      react: {
        wait: true,
      },
      interpolation: {
        escapeValue: false, // not needed for react!!
      },
    };
    break;
  case 'development':
    options = {
      debug: false,
      fallbackLng: 'fr',
      lng: selectedLanguage?.code || 'fr',
      ns: ['translation'],
      defaultNS: 'translation',
      nsSeparator: false,
      keySeparator: false,
      backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
      interpolation: {
        escapeValue: false,
      },
      react: {
        wait: true,
        useSuspense: false,
      },
    };
    break;
  default:
    break;
}

//!i18n.init(options)

export default i18n;
