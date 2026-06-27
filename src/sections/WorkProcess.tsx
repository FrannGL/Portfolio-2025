import CustomCard from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import { Icon } from "@iconify/react";
import { t } from "@/i18n";

interface Props {
  lang?: string;
}

const WorkProcess = ({ lang = "es" }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 pt-5 pb-3 text-foreground">
      <Header
        title={t(lang, "workProcess.title")}
        subtitle={t(lang, "workProcess.subtitle")}
        icon="fluent:star-emphasis-16-filled"
      />

      <div className="flex flex-col gap-3 mt-6">
        <CustomCard
          icon={<Icon icon="mdi:calendar-check" className="w-5 h-5 mx-auto my-auto" />}
          text={t(lang, "workProcess.planning")}
          type="follow"
        />
        <CustomCard
          icon={<Icon icon="material-symbols:problem" className="w-5 h-5 mx-auto my-auto" />}
          text={t(lang, "workProcess.problemSolving")}
          type="follow"
        />
        <CustomCard
          icon={<Icon icon="mdi:message-text-outline" className="w-5 h-5 mx-auto my-auto" />}
          text={t(lang, "workProcess.communication")}
          type="follow"
        />
        <CustomCard
          icon={<Icon icon="iconoir:learning" className="w-5 h-5 mx-auto my-auto" />}
          text={t(lang, "workProcess.continuousLearning")}
          type="follow"
        />
      </div>
    </div>
  );
};

export default WorkProcess;
