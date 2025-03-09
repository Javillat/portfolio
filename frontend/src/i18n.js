import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import i18nBackend from 'i18next-http-backend';

//const getCurrentHost = import.meta.env.MODE = 'development' ? 'http://localhost:5173' : 'LINK TO PROD';

i18n
    // .use(i18nBackend) // passes i18nBackend down to react
    .use(LanguageDetector) 
    .use(initReactI18next) 
    .init({
        lng: 'es',
        //lng: getCurrentLang(),
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        // backend: {
        //     //loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
        //     // loadPath: 'http://localhost:3001/{{lng}}.json'
        //     loadPath: '../src/data/i18n/locales/{{lng}}.json'
        // },
        resources: {
            es: require('../src/data/i18n/locales/es.json'),
            en: require('../src/data/i18n/locales/en.json')
        }
    });


export default i18n;