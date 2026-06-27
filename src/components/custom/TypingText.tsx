import { useEffect, useMemo, useState } from "react";
import { t, tArr } from "@/i18n";

interface Props {
  lang?: string;
}

const TypingText = ({ lang = "es" }: Props) => {
  const roles = useMemo(() => tArr(lang, "profile.roles"), [lang]);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index >= roles.length) return;

    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);

  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg text-muted-foreground">
      {t(lang, "profile.imA")}{" "}
      <span className="text-indigo-400 font-semibold">
        {roles.length > 0 ? roles[index].substring(0, subIndex) : ""}
        <span className="inline-block w-1">{blink ? "|" : " "}</span>
      </span>
    </p>
  );
};

export default TypingText;
