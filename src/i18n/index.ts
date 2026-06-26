import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";

// Only use React integration on client side
if (typeof window !== "undefined") {
  i18n.use(initReactI18next);
}

function detectLang(): string {
  if (typeof window !== "undefined" && (window as any).__LANG__ === "en") {
    return "en";
  }
  return "es";
}

export function initI18n(lng: string) {
  if (!i18n.isInitialized) {
    i18n.init({
      resources: {
        en: { translation: en },
        es: { translation: es },
      },
      lng,
      fallbackLng: "es",
      interpolation: {
        escapeValue: false,
      },
    });
  }
}

// Only initialize on client side
if (typeof window !== "undefined") {
  initI18n(detectLang());
}

export default i18n;
