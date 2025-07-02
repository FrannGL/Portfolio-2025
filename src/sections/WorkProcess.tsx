import CustomCard from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import { Icon } from "@iconify/react";

const WorkProcess = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 pt-5 pb-3 text-foreground">
      <Header
        title="Work Process"
        subtitle="Workflow Highlights"
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
          text="Planning & Organization"
          type="follow"
        />
        <CustomCard
          icon={
            <Icon
              icon="material-symbols:problem"
              className="w-5 h-5 mx-auto my-auto"
            />
          }
          text="Problem Solving"
          type="follow"
        />
        <CustomCard
          icon={
            <Icon
              icon="mdi:message-text-outline"
              className="w-5 h-5 mx-auto my-auto"
            />
          }
          text="Communication"
          type="follow"
        />
        <CustomCard
          icon={<Icon icon="iconoir:learning" className="w-5 h-5 mx-auto my-auto" />}
          text="Continuous Learning"
          type="follow"
        />
        {/* <CustomCard
          icon={
            <Icon
              icon="mdi:book-open-variant"
              className="w-5 h-5 mx-auto my-auto"
            />
          }
          text="Continuous Learning"
          type="follow"
        /> */}
      </div>
    </div>
  );
};

export default WorkProcess;
