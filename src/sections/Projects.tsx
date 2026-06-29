import TopProjectsModal from "@/components/custom/TopProjectsModal";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { t } from "@/i18n";

interface Props {
  lang?: string;
}

const images = [
  "/assets/images/projects/juguetes-perdidos.webp",
  "/assets/images/projects/Fuego-burgers.webp",
  "/assets/images/projects/Notimation.webp",
  "/assets/images/projects/Maular.webp",
  "/assets/images/projects/backoffice.webp",
  "/assets/images/projects/backoffice-2.webp",
  "/assets/images/projects/containeriq-2.webp",
  "/assets/images/projects/containeriq.webp",
  "/assets/images/projects/helpdesk.webp",
  "/assets/images/projects/job-mapper-2.webp",
  "/assets/images/projects/job-mapper.webp",
];

const Projects = ({ lang = "es" }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center gap-6 py-5 pb-10 text-foreground"
      style={{ maxWidth: "100%", boxSizing: "border-box" }}
    >
      <div className="flex flex-col gap-1 items-center justify-center text-foreground">
        <div className="flex justify-center items-center gap-2 text-muted-foreground">
          <Icon icon="ion:briefcase" className="w-4.5 h-4 text-indigo-400" />
          <span className="text-sm font-semibold font-raleway">{t(lang, "projects.title")}</span>
        </div>
        <h1 className="text-lg xl:text-base font-semibold text-white">{t(lang, "projects.subtitle")}</h1>
      </div>

      <div className="w-full relative">
        <TopProjectsModal
          open={open}
          setOpen={setOpen}
          trigger={
            <button
              id="projects-button"
              className="cursor-pointer absolute left-1/2 top-15 z-20 -translate-x-1/2 rounded-lg bg-indigo-500 px-3 py-1.5 text-xs sm:text-sm text-white font-semibold shadow-lg transition-colors hover:bg-indigo-700 border-[3px] border-black"
              type="button"
            >
              {t(lang, "projects.button")}
            </button>
          }
        />

        <div className="overflow-hidden rounded-lg">
          <div className="flex w-max gap-2 projects-animate-scroll-left">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="w-45 h-20 shrink-0"
              >
                <img
                  src={src}
                  alt={`Project ${index}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
