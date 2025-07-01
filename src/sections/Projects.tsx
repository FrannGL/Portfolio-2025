import Header from "@/components/custom/Header";

const images = [
  "/assets/juguetes-perdidos.png",
  "/assets/Fuego-burgers.png",
  "/assets/Notimation.png",
  "/assets/Maular.png",
  "/assets/backoffice.png",
  "/assets/backoffice-2.png",
  "/assets/containeriq-2.png",
  "/assets/containeriq.png",
  "/assets/helpdesk.png",
  "/assets/job-mapper-2.png",
  "/assets/job-mapper.png",
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 py-5 pb-10 text-foreground"
      style={{ maxWidth: "100%", boxSizing: "border-box" }}
    >
      <Header title="Projects" subtitle="Works Gallery" icon="ion:briefcase" />

      <div className="w-full relative">
        <button
          className="cursor-pointer absolute left-1/2 top-15 z-20 -translate-x-1/2 rounded-lg bg-indigo-500 px-5 py-2 text-sm sm:text-base text-white font-semibold shadow-lg transition-colors hover:bg-indigo-700 border-[3px] border-black"
          type="button"
        >
          Ver proyectos
        </button>

        <div className="overflow-hidden rounded-lg">
          <div className="flex w-max gap-2 projects-animate-scroll-left">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="w-[180px] h-[80px] flex-shrink-0"
                style={{ flexShrink: 0 }}
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
