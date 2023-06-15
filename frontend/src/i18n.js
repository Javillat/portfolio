import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) // passes i18n down to react
    .init({
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        resources: {
            es: require('../src/components/languages/es.json'),
            en: require('../src/components/languages/en.json')
        }
    });


export default i18n;