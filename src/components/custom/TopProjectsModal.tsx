import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { motion } from "framer-motion";

interface TopProjectsModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger: ReactNode;
}

const projects = [
  {
    name: "Juguetes Perdidos",
    image: "/assets/juguetes-perdidos.png",
    githubUrl: "https://github.com/FrannGL/Juguetes-Perdidos-BEER",
    demoUrl: "https://juguetes-perdidos.vercel.app/",
  },
  {
    name: "Helpdesk JST",
    image: "/assets/helpdesk.png",
    githubUrl: "https://github.com/FrannGL/front-jst-ot-helpdesk",
    demoUrl: "https://front-jst-ot-helpdesk.vercel.app/",
  },
  {
    name: "Job Mapper",
    image: "/assets/job-mapper-2.png",
    githubUrl: "https://github.com/FrannGL/Job-Mapper-Backend",
    demoUrl: "https://job-mapper-web.vercel.app/",
  },
  {
    name: "Finanex Backoffice",
    image: "/assets/backoffice.png",
    githubUrl: "https://github.com/FinanexApp/front-backoffice",
    demoUrl: "https://staging.backoffice.finanex.io/",
  },
  {
    name: "Container IQ",
    image: "/assets/containeriq.png",
    githubUrl: "https://github.com/FinanexApp/front-containeriq",
    demoUrl: "https://staging.container-iq.finanex.io/",
  },
  {
    name: "MNJ Dashboard",
    image: "/assets/mnj.png",
    githubUrl: "https://github.com/FrannGL/JST-Dashboard-Administrativo",
    demoUrl: "https://mnj-dashboard.vercel.app/",
  },
];

const TopProjectsModal = ({
  open,
  setOpen,
  trigger,
}: TopProjectsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <Header
              title="My Works"
              subtitle="My top 6 Projects"
              icon="tabler:briefcase-filled"
            />
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-[#121212] border border-[#2a2a2a] shadow-lg transition hover:shadow-xl group"
            >
              <div className="relative w-full h-[150px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    {project.name}
                  </h3>
                </div>

                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#2a2a2a] rounded-full"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#2a2a2a] rounded-full"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopProjectsModal;
