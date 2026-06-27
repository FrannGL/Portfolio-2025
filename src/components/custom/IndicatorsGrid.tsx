import Indicator from "@/sections/Indicator";
import { t } from "@/i18n";

interface Props {
  lang?: string;
}

const IndicatorsGrid = ({ lang = "es" }: Props) => {
  const indicators = [
    { value: 10, label: t(lang, "indicators.projects"), iconName: "ion:flag" },
    { value: 6, label: t(lang, "indicators.happyClients"), iconName: "mingcute:happy-fill" },
    { value: "03", label: t(lang, "indicators.yearExpertise"), iconName: "ion:star" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {indicators.map((item, i) => (
        <Indicator key={i} value={item.value} label={item.label} iconName={item.iconName} />
      ))}
    </div>
  );
};

export default IndicatorsGrid;
