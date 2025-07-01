import CustomCard from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import { Icon } from "@iconify/react";

const Follow = () => {
  return (
    <div className="flex flex-col pt-5 items-center justify-center text-foreground">
      <Header title="Follow Me" subtitle="Online Presence" icon="mdi:heart" />

      <div className="flex flex-col gap-2 mt-3 pb-2.5 w-full max-w-md px-2">
        <CustomCard
          icon={<Icon icon="mdi:linkedin" className="w-5 h-5" />}
          text="Linkedin"
          type="follow"
          href="https://www.linkedin.com/in/franngl/"
        />
        <CustomCard
          icon={<Icon icon="mdi:github" className="w-5 h-5" />}
          text="Github"
          type="follow"
          href="https://github.com/FrannGL"
        />
        <CustomCard
          icon={<Icon icon="mdi:email-outline" className="w-5 h-5" />}
          text="Email"
          type="follow"
          href="mailto:francoivangalluccio.com"
        />
      </div>
    </div>
  );
};

export default Follow;
