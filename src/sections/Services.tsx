import CustomCard from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const cardsData = [
  { key: "ui", icon: <Icon icon="ion:brush" className="w-5 h-5" /> },
  { key: "web", icon: <Icon icon="mdi:web" className="w-5 h-5" /> },
  {
    key: "seo",
    icon: (
      <Icon
        icon="streamline-ultimate:seo-search-graph-bold"
        className="w-5 h-5"
      />
    ),
  },
  { key: "auth", icon: <Icon icon="simple-icons:auth0" className="w-5 h-5" /> },
  { key: "api", icon: <Icon icon="mdi:api" className="w-5 h-5" /> },
  { key: "maps", icon: <Icon icon="mdi:map-outline" className="w-5 h-5" /> },
  {
    key: "dashboard",
    icon: <Icon icon="mdi:view-dashboard-outline" className="w-5 h-5" />,
  },
  {
    key: "deploy",
    icon: <Icon icon="mdi:cloud-upload-outline" className="w-5 h-5" />,
  },
  { key: "testing", icon: <Icon icon="mdi:bug-outline" className="w-5 h-5" /> },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center py-5 w-full h-full text-foreground overflow-hidden">
      <Header
        title={t("services.title")}
        subtitle={t("services.subtitle")}
        icon="ion:grid"
      />

      <div className="mt-6 w-full overflow-hidden">
        <div className="flex w-fit gap-4 animate-[scroll-carousel_50s_linear_infinite]">
          {[...Array(2)].flatMap((_, i) =>
            cardsData.map((card) => (
              <CustomCard
                key={`${card.key}-${i}`}
                type="services"
                icon={card.icon}
                text={t(`services.${card.key}`)}
                className="flex-shrink-0"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
