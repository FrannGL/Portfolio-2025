import { Button } from "../ui/button";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface AnimatedBorderButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const AnimatedBorderButton = ({
  children,
  className = "",
  ...props
}: AnimatedBorderButtonProps) => {
  return (
    <div className="relative w-full group rounded-lg">
      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 opacity-50"></div>

      <div className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
        <div className="traveling-light"></div>
      </div>

      <Button
        className={`cursor-pointer relative w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
};

export default AnimatedBorderButton;
