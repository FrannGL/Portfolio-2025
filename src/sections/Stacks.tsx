import CustomCard from "@/components/custom/CustomCard";
import Header from "@/components/custom/Header";
import { Icon } from "@iconify/react";

const Stacks = () => {
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

  return (
    <div className="flex flex-col items-center justify-center text-foreground pt-5 pb-4">
      <Header
        title="My Stacks"
        subtitle="Tech Arsenal"
        icon="ion:logo-buffer"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 px-5 place-items-center">
        <CustomCard
          type="stack"
          icon={<Icon icon="ion:brush" className="w-5 h-5" />}
          text="UI Design"
          techIcons={uiDesignTechs}
          className="w-39"
        />
        <CustomCard
          type="stack"
          icon={<Icon icon="ion:pie-chart-sharp" className="w-5 h-5" />}
          text="Frontend"
          techIcons={frontendTechs}
          className="w-39"
        />
        <CustomCard
          type="stack"
          icon={<Icon icon="ion:server" className="w-5 h-5" />}
          text="Backend"
          techIcons={backendTechs}
          className="w-39"
        />
        <CustomCard
          type="stack"
          icon={<Icon icon="ion:cloud-upload" className="w-5 h-5" />}
          text="DevOps"
          techIcons={deployTechs}
          className="w-39"
        />
      </div>
    </div>
  );
};

export default Stacks;
