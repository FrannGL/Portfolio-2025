import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WrapperProps {
  children: ReactNode;
  withBottomBorder?: boolean;
}

const Wrapper = ({ children, withBottomBorder = false }: WrapperProps) => {
  return (
    <div
      className={cn(
        "w-full h-full",
        "flex flex-col items-center justify-center pt-4 gap-1 bg-[#101010] border border-[rgba(33,33,33,0.8)] text-foreground border rounded-xl",
        withBottomBorder ? "border-b pb-4" : "border-b-0",
        "border-[rgba(33,33,33,0.8)]"
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
