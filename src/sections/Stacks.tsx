import CustomCard from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import { useMediaScreen } from "@/hooks/useMediaScreen";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Stacks = () => {
  const isMobile = useMediaScreen();
  const { t } = useTranslation();

  const backendTechs = [
    { icon: "devicon:nodejs", name: "Node.js" },
    { icon: "vscode-icons:file-type-nestjs", name: "Nest.js" },
    { icon: "devicon:postgresql", name: "PostgreSQL" },
  ];

  const frontendTechs = [
    { icon: "devicon:react", name: "React" },
    { icon: "devicon:nextjs", name: "Next.js" },
    { icon: "devicon:typescript", name: "TypeScript" },
    { icon: "vscode-icons:file-type-tailwind", name: "Tailwind" },
    { icon: "devicon:materialui", name: "Material UI" },
  ];

  const uiDesignTechs = [
    { icon: "material-icon-theme:figma", name: "Figma" },
    { icon: "devicon:photoshop", name: "Photoshop" },
    { icon: "devicon:canva", name: "Canva" },
  ];

  const deployTechs = [
    { icon: "skill-icons:vercel-light", name: "Vercel" },
    { icon: "logos:docker-icon", name: "Docker" },
    { icon: "skill-icons:aws-dark", name: "AWS" },
  ];

  const cards = [
    {
      type: "stack" as const,
      icon: <Icon icon="ion:brush" className="w-5 h-5" />,
      text: "UI Design",
      techIcons: uiDesignTechs,
      className: isMobile ? "w-33" : "w-39",
    },
    {
      type: "stack" as const,
      icon: <Icon icon="ion:pie-chart-sharp" className="w-5 h-5" />,
      text: "Frontend",
      techIcons: frontendTechs,
      className: isMobile ? "w-33" : "w-39",
    },
    {
      type: "stack" as const,
      icon: <Icon icon="ion:server" className="w-5 h-5" />,
      text: "Backend",
      techIcons: backendTechs,
      className: isMobile ? "w-33" : "w-39",
    },
    {
      type: "stack" as const,
      icon: <Icon icon="ion:cloud-upload" className="w-5 h-5" />,
      text: "DevOps",
      techIcons: deployTechs,
      className: isMobile ? "w-33" : "w-39",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-foreground pt-5 pb-4">
      <Header
        title={t("stacks.title")}
        subtitle={t("stacks.subtitle")}
        icon="ion:logo-buffer"
      />

      <div className={`mt-6 px-5 ${"grid grid-cols-2 gap-3 w-full max-w-sm"}`}>
        {cards.map((card, index) => (
          <div key={index} className="w-full">
            <CustomCard
              type={card.type}
              icon={card.icon}
              text={card.text}
              techIcons={card.techIcons}
              className={card.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
