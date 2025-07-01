import { useRef, useEffect } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion as m,
} from "framer-motion";

interface AnimatedCountProps {
  from?: number;
  to: number;
  duration?: number;
  once?: boolean;
  toFixed?: number;
  usd?: boolean;
  className?: string;
}

export const AnimatedCount = ({
  from = 0,
  to,
  duration = 2,
  once = true,
  toFixed = 0,
  usd = false,
  className,
}: AnimatedCountProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.5 });
  const count = useMotionValue(from);

  const formatted = useTransform(count, (latest) => {
    const options: Intl.NumberFormatOptions = {
      minimumFractionDigits: toFixed,
      maximumFractionDigits: toFixed,
    };

    if (usd) {
      options.style = "currency";
      options.currency = "USD";
    }

    return new Intl.NumberFormat("es-AR", options).format(latest);
  });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration });
    }
  }, [inView, to, duration, count]);

  return (
    <m.span ref={ref} className={className}>
      {formatted}
    </m.span>
  );
};
