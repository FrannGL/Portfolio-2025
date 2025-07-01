import CustomCard from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import { Icon } from "@iconify/react";

const cards = [
  {
    key: "ui",
    icon: <Icon icon="ion:brush" className="w-5 h-5" />,
    text: "UI Research",
  },
  {
    key: "web",
    icon: <Icon icon="mdi:web" className="w-5 h-5" />,
    text: "Web Development",
  },
  {
    key: "seo",
    icon: (
      <Icon
        icon="streamline-ultimate:seo-search-graph-bold"
        className="w-5 h-5"
      />
    ),
    text: "SEO Optimization",
  },
  {
    key: "auth",
    icon: <Icon icon="simple-icons:auth0" className="w-5 h-5" />,
    text: "Auth Integrations",
  },
  {
    key: "api",
    icon: <Icon icon="mdi:api" className="w-5 h-5" />,
    text: "API Development",
  },
  {
    key: "maps",
    icon: <Icon icon="mdi:map-outline" className="w-5 h-5" />,
    text: "Interactive Maps",
  },
  {
    key: "dashboard",
    icon: <Icon icon="mdi:view-dashboard-outline" className="w-5 h-5" />,
    text: "Dashboards Design",
  },
  {
    key: "deploy",
    icon: <Icon icon="mdi:cloud-upload-outline" className="w-5 h-5" />,
    text: "Deployments",
  },
  {
    key: "testing",
    icon: <Icon icon="mdi:bug-outline" className="w-5 h-5" />,
    text: "Testing",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 w-full h-full text-foreground overflow-hidden">
      <Header title="Services" subtitle="Solutions Suite" icon="ion:grid" />

      <div className="mt-6 w-full overflow-hidden">
        <div className="flex w-fit gap-4 animate-[scroll-carousel_50s_linear_infinite]">
          {[...Array(2)].flatMap((_, i) =>
            cards.map((card) => (
              <CustomCard
                key={`${card.key}-${i}`}
                type="services"
                icon={card.icon}
                text={card.text}
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
