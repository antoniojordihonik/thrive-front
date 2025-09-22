import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // carga traducciones desde archivos JSON
  .use(LanguageDetector) // detecta idioma del navegador
  .use(initReactI18next) // conecta con react-i18next
  .init({
    supportedLngs: ["en", "es"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react ya escapa por seguridad
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json" // dónde buscar los JSON
    }
  });

export default i18n;
