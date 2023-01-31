import i18next from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish from "./Translation/EN/translation.json";
import translationSpanish from "./Translation/ES/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  es: {
    translation: translationSpanish,
  }
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en",
})


export default i18n;