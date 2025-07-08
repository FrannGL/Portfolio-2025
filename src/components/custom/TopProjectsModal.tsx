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

interface TopProjectsModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger: ReactNode;
}

const projects = [
  {
    image: "/assets/juguetes-perdidos.png",
    githubUrl: "https://github.com/FrannGL/Juguetes-Perdidos-BEER",
    demoUrl: "https://juguetes-perdidos.vercel.app/",
  },
  {
    image: "/assets/helpdesk.png",
    githubUrl: "https://github.com/FrannGL/front-jst-ot-helpdesk",
    demoUrl: "https://front-jst-ot-helpdesk.vercel.app/",
  },
  {
    image: "/assets/job-mapper-2.png",
    githubUrl: "https://github.com/FrannGL/Job-Mapper-Backend",
    demoUrl: "https://job-mapper-web.vercel.app/",
  },
  {
    image: "/assets/backoffice.png",
    githubUrl: "https://github.com/FinanexApp/front-backoffice",
    demoUrl: "https://staging.backoffice.finanex.io/",
  },
  {
    image: "/assets/containeriq.png",
    githubUrl: "https://github.com/FinanexApp/front-containeriq",
    demoUrl: "https://staging.container-iq.finanex.io/",
  },
  {
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
              className="flex flex-col sm:flex-row w-full sm:w-[200px] rounded-lg overflow-hidden shadow-md border border-border bg-background"
            >
              <img
                src={project.image}
                alt={`Project ${index}`}
                className="w-full sm:w-4/5 h-[150px] sm:h-[150px] object-cover"
              />

              <div className="w-full sm:w-1/5 flex flex-row sm:flex-col items-center justify-center gap-4 bg-muted p-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>

                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopProjectsModal;
