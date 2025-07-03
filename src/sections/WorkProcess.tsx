import CustomCard from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const WorkProcess = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-1 pt-5 pb-3 text-foreground">
      <Header
        title={t("workProcess.title")}
        subtitle={t("workProcess.subtitle")}
        icon="fluent:star-emphasis-16-filled"
      />

      <div className="flex flex-col gap-3 mt-6">
        <CustomCard
          icon={
            <Icon
              icon="mdi:calendar-check"
              className="w-5 h-5 mx-auto my-auto"
            />
          }
          text={t("workProcess.planning")}
          type="follow"
        />
        <CustomCard
          icon={
            <Icon
              icon="material-symbols:problem"
              className="w-5 h-5 mx-auto my-auto"
            />
          }
          text={t("workProcess.problemSolving")}
          type="follow"
        />
        <CustomCard
          icon={
            <Icon
              icon="mdi:message-text-outline"
              className="w-5 h-5 mx-auto my-auto"
            />
          }
          text={t("workProcess.communication")}
          type="follow"
        />
        <CustomCard
          icon={
            <Icon icon="iconoir:learning" className="w-5 h-5 mx-auto my-auto" />
          }
          text={t("workProcess.continuousLearning")}
          type="follow"
        />
      </div>
    </div>
  );
};

export default WorkProcess;
