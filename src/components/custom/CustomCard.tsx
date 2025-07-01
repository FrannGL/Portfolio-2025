import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { useState, type ReactNode } from "react";

type TechIcon = {
  icon: string;
  name: string;
  color?: string;
};

type IconCardProps = {
  icon: ReactNode;
  text: string;
  techIcons?: TechIcon[];
  type?: "stack" | "services" | "follow" | "process" | "default";
  href?: string;
  className?: string;
  width?: string;
};

const CustomCard = ({
  icon,
  text,
  techIcons,
  type = "default",
  href,
  width = "60",
  className,
}: IconCardProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const isStack = type === "stack";
  const isFollow = type === "follow" && href;

  const content = (
    <Card
      className={`group relative rounded-xl bg-[#191919] text-white shadow-sm border border-[#212121] transition-all duration-300 hover:bg-[#1f1f1f] hover:border-[#2a2a2a] hover:shadow-lg overflow-hidden ${
        width ?? "w-fit"
      } ${className ?? ""}`}
    >
      <CardContent className="relative flex items-center py-1 px-2 gap-2 h-full">
        <div
          className={`flex items-center gap-2 transition-transform duration-500 ease-in-out ${
            isStack ? "group-hover:-translate-x-[120%]" : ""
          }`}
        >
          <div
            className={`p-2 rounded-lg bg-[#2e2e2e] flex items-center justify-center`}
          >
            <div className="w-5 h-5 text-muted-foreground">{icon}</div>
          </div>
          <div className="text-sm font-bold text-[rgba(230,230,230,0.8)] whitespace-nowrap">
            {text}
          </div>
        </div>

        {type === "follow" && href && (
          <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon
              icon="hugeicons:link-square-01"
              className="w-5 h-5 text-muted-foreground"
            />
          </div>
        )}

        {isStack && techIcons && techIcons.length > 0 && (
          <div
            className={`absolute inset-0 flex items-center justify-start px-4 overflow-hidden transform transition-all duration-500 ease-in-out
              ${
                isStack
                  ? "translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                  : ""
              }`}
          >
            <div className="overflow-hidden w-full">
              <div
                className="flex animate-scroll-left"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              >
                {[...techIcons, ...techIcons].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-[0_0_auto] min-w-0 mr-3"
                  >
                    <div
                      title={tech.name}
                      className="flex items-center justify-center w-8 h-8 bg-[#2e2e2e] rounded-lg
                        transition-all duration-300 hover:bg-[#3a3a3a] hover:scale-105 group/icon"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      <div
                        className="w-5 h-5
                          filter grayscale brightness-75
                          transition-all duration-300
                          group-hover/icon:filter-none"
                      >
                        <Icon icon={tech.icon} className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return isFollow ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default CustomCard;
