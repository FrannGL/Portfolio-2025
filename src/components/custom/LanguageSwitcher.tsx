import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface Props {
  lang?: string;
}

const LanguageSwitcher = ({ lang = "es" }: Props) => {
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "es" : "en";
    window.location.href = `/?lang=${newLang}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 text-sm shadow-md border border-muted bg-background hover:bg-muted transition-colors"
      >
        <Globe className="w-4 h-4" />
        {lang.toUpperCase()}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
