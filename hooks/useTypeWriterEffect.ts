import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "framer-motion";

interface TypewriterEffectResult {
  ref: React.RefObject<HTMLElement | null>;
  animationProps: (index: number) => {
    initial: { opacity: number; x: number };
    animate: {
      opacity: number;
      x: number;
      transition: { duration: number; ease: string };
    };
  };
}

const useTypewriterEffect = (
  textArray: string[],
  shouldWait?: boolean | null
): TypewriterEffectResult => {
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    amount: "some",
    once: true,
  });

  const startTyping = () => {
    const interval = setInterval(() => {
      setRevealedIndices((prev) => {
        if (prev.length < textArray.length) {
          return [...prev, prev.length];
        }
        clearInterval(interval);
        return prev;
      });
    }, 100);

    return interval;
  };

  useEffect(() => {
    if (isInView && shouldWait) {
      const interval = startTyping();

      return () => clearInterval(interval);
    }

    if (isInView && shouldWait === undefined) {
      const interval = startTyping();

      return () => clearInterval(interval);
    }
  }, [isInView, shouldWait, textArray]);

  const animationProps = useCallback(
    (index: number) => ({
      initial: { opacity: 0, x: 10 },
      animate: {
        opacity: revealedIndices.includes(index) ? 1 : 0,
        x: revealedIndices.includes(index) ? 0 : 10,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    }),
    [revealedIndices]
  );

  return { ref, animationProps };
};

export default useTypewriterEffect;
