import { useEffect } from "react";
import i18n from "@/i18n";

export default function LanguageInit() {
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    const detected =
      saved ?? (navigator.language?.startsWith("es") ? "es" : "en");

    if (detected !== i18n.language) {
      i18n.changeLanguage(detected);
    }
  }, []);

  return null;
}
