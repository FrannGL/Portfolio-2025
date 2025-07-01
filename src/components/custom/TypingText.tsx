import { useEffect, useState } from "react";

const roles = ["Designer", "Developer", "Freelancer", "Creator"];

const TypingText = () => {
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
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg text-muted-foreground">
      I'm a{" "}
      <span className="text-indigo-400 font-semibold">
        {roles[index].substring(0, subIndex)}
        <span className="inline-block w-1">{blink ? "|" : " "}</span>
      </span>
    </p>
  );
};

export default TypingText;
