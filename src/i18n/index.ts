import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";

i18n.use(initReactI18next);

function detectLang(): string {
  if (typeof window !== "undefined" && (window as any).__LANG__ === "en") {
    return "en";
  }
  return "es";
}

if (!i18n.isInitialized) {
  i18n.init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: detectLang(),
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
