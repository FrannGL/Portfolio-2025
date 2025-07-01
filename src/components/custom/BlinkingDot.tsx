import { motion } from "framer-motion";

const BlinkingDot = () => (
  <motion.span
    className="text-lg text-green-400"
    animate={{ opacity: [1, 0.2, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
  >
    ●
  </motion.span>
);

export default BlinkingDot;
