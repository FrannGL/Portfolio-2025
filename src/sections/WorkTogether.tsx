import AnimatedBorderButton from "@/components/custom/AnimatedBorder";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const WorkTogether = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center justify-center pb-2.5 pt-2 px-5 text-foreground">
      <div className="flex flex-col gap-1.5 items-center justify-center text-foreground">
        <div className="p-3 rounded-full bg-[#2e2e2e] flex items-center justify-center">
          <Icon
            icon="solar:crown-line-bold"
            className="w-8 h-8 text-indigo-400"
          />
        </div>
        <h1 className="text-1xl font-semibold text-white">
          {t("workTogether.title")}
        </h1>
        <span className="text-sm text-muted-foreground">
          {t("workTogether.subtitle")}
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-5 w-full">
        <a href="mailto:francoivangalluccio.com" className="w-full">
          <AnimatedBorderButton className="flex-1 p-6 text-md font-semibold text-muted-foreground">
            <Icon
              icon="mdi:email-outline"
              className="size-6 mr-2 text-indigo-400"
            />
            {t("workTogether.email")}
          </AnimatedBorderButton>
        </a>
        <a
          href="https://wa.me/5491121557802"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <AnimatedBorderButton className="flex-1 p-6 text-md font-semibold text-muted-foreground">
            <Icon
              icon="ic:baseline-whatsapp"
              className="size-6 mr-2 text-indigo-400"
            />
            {t("workTogether.whatsapp")}
          </AnimatedBorderButton>
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
