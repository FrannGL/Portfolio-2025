import { Icon } from "@iconify/react";

interface Props {
  title: string;
  subtitle: string;
  icon: string;
}

const Header = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center text-foreground">
      <div className="flex justify-center items-center gap-2 text-muted-foreground">
        <Icon icon={icon} className="w-4.5 h-4 text-indigo-400" />
        <span className="text-sm font-semibold font-raleway"> {title} </span>
      </div>
      <h1 className="text-lg font-semibold text-white"> {subtitle} </h1>
    </div>
  );
};

export default Header;
