import AnimatedBorderButton from "@/components/custom/AnimatedBorder";
import BlinkingDot from "@/components/custom/BlinkingDot";
import TypingText from "@/components/custom/TypingText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { t } from "@/i18n";

interface Props {
  lang?: string;
}

const badgesData = [
  { icon: "ion:location-sharp", label: "Argentina" },
  { icon: "ion:ribbon-sharp", label: "Coderhouse" },
  { icon: "ion:code-slash-outline", label: "FullStack" },
  { icon: "game-icons:graduate-cap", label: "ifts" },
  { icon: "ion:language-sharp", label: "Español" },
  { icon: "ion:language-sharp", label: "Ingles" },
];

const ProfileCard = ({ lang = "es" }: Props) => {
  return (
    <Card className="text-white p-4 bg-[#101010]">
      <CardContent className="p-0 flex flex-col gap-1.5">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-4 gap-4">
          <div className="w-full md:w-28 shrink-0 rounded-xl overflow-hidden bg-transparent md:bg-muted">
            <img
              src="/assets/avatar.jpg"
              alt="Profile"
              className="w-40 h-35 object-cover mx-auto md:mx-0 rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-4 flex-1 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 bg-[#191919] border border-[rgba(33,33,33,0.8)] w-fit pt-0.5 px-3 rounded-xl">
                <BlinkingDot />
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {t(lang, "profile.available")}
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2 pr-2">
                <p className="text-sm font-semibold text-[rgba(230,230,230,0.8)]">
                  {t(lang, "profile.resume")}
                </p>
                <a
                  href="/assets/CV.pdf"
                  download
                  className="flex items-center gap-2 cursor-pointer select-none text-sm font-semibold text-[rgba(230,230,230,0.8)] group"
                >
                  <div className="p-2.5 rounded-lg bg-[#1f1f1f] group-hover:bg-[#2a2a2a] transition-colors duration-300 flex items-center justify-center">
                    <Icon icon="entypo:download" className="w-5 h-5 text-muted-foreground" />
                  </div>
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-xl md:text-2xl lg:text-xl xl:text-lg font-semibold mt-1">
                  Franco Galluccio
                </h2>
                <div className="md:hidden pr-2">
                  <a
                    href="/assets/CV.pdf"
                    download
                    className="flex flex-col items-center gap-1.5 cursor-pointer select-none text-sm font-semibold text-[rgba(230,230,230,0.8)] group"
                  >
                    <div className="p-2 rounded-lg bg-[#1f1f1f] group-hover:bg-[#2a2a2a] transition-colors duration-300 flex items-center justify-center">
                      <Icon icon="entypo:download" className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-[10px] leading-none text-muted-foreground">CV</span>
                  </a>
                </div>
              </div>
              <TypingText lang={lang} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4 justify-start md:justify-start">
          {badgesData.map(({ icon, label }) => (
            <Badge
              key={label}
              className="[&>svg]:size-4.5 text-sm text-white py-1 px-2 flex items-center bg-transparent shadow-none border border-[rgba(33,33,33,0.8)]"
            >
              <Icon icon={icon} className="text-indigo-400 h-6 w-6 mr-2" />
              {t(lang, `profile.badges.${label}`)}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <a href="mailto:francoivangalluccio.com" className="w-full">
            <AnimatedBorderButton className="flex-1 p-6 text-md font-semibold text-muted-foreground">
              <Icon icon="mdi:email-outline" className="size-6 mr-2 text-indigo-400" />
              {t(lang, "profile.emailMe")}
            </AnimatedBorderButton>
          </a>
          <a href="https://wa.me/5491121557802" target="_blank" rel="noopener noreferrer" className="w-full">
            <AnimatedBorderButton className="flex-1 p-6 text-md font-semibold text-muted-foreground">
              <Icon icon="ic:baseline-whatsapp" className="size-6 mr-2 text-indigo-400" />
              {t(lang, "profile.whatsappMe")}
            </AnimatedBorderButton>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
