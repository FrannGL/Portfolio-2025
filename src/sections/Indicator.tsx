import { AnimatedCount } from "@/components/custom/AnimatedCount";
import { Icon } from "@iconify/react";

interface IndicatorProps {
  value: number | string;
  label: string;
  iconName: string;
}

const Indicator = ({ value, label, iconName }: IndicatorProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-2 gap-1 bg-[#101010] border border-[rgba(33,33,33,0.8)] text-foreground border rounded-xl">
      <div className="text-5xl md:text-6xl font-semibold bg-gradient-to-b from-white to-zinc-900 bg-clip-text text-transparent">
        <AnimatedCount to={Number(value)} />
        <span className="text-indigo-400 text-4xl">+</span>
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-[rgba(230,230,230,0.8)] border-0 md:border md:border-[rgba(33,33,33,1)]">
        <Icon icon={iconName} className="h-4.5 w-4 text-indigo-400" />
        <span>{label}</span>
      </div>
    </div>
  );
};

export default Indicator;
