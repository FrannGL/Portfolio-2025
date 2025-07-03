import { useEffect, useState } from "react";
import i18n from "@/i18n";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    const handleChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleChange);
    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 text-sm shadow-md border border-muted bg-background hover:bg-muted transition-colors"
      >
        <Globe className="w-4 h-4" />
        {language.toUpperCase()}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
