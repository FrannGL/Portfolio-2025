import { useEffect, useState } from "react";

export function useMediaScreen(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleChange = () => setIsMobile(mq.matches);

    handleChange();
    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
}
