import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nBackend from 'i18next-http-backend';

//const getCurrentHost = import.meta.env.MODE = 'development' ? 'http://localhost:5173' : 'LINK TO PROD';

i18n
    .use(i18nBackend) // passes i18nBackend down to react
    .use(initReactI18next) // passes i18n down to react
    .init({
        lng: 'es',
        //lng: getCurrentLang(),
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        backend: {
            //loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
            loadPath: 'http://localhost:3001/{{lng}}.json'
        }
        // resources: {
        //     es: require('../src/components/languages/es.json'),
        //     en: require('../src/components/languages/en.json')
        // }
    });


export default i18n;