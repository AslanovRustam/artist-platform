import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import s from "./styles.module.css";

interface Props {
  text?: string;
  stagger?: number;
  styles?: string;
  children?: React.ReactNode;
}

export function MaskText({ text, stagger = 0, children }: Props) {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, amount: 0.5 });

  const variants = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0%",
      transition: {
        delay: 0.1 * i,
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className={s.overflowHidden} ref={body}>
      <motion.div
        custom={stagger}
        variants={variants}
        initial="initial"
        animate={isInView ? "enter" : ""}
      >
        {text}
        {children}
      </motion.div>
    </div>
  );
}
