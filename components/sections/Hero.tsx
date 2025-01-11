"use client";
import Typewriter from "../ui/TypeWriter";
import Button from "../ui/Button";
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import { motion } from "motion/react";
import { useToggle } from "@/stores/useToggle";

export const Hero = () => {
  //   const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);
  const isTypewriterComplete = useToggle((state) => state.isOpen);
  const setIsTypewriterComplete = useToggle((state) => state.toggle);

  const paragraphText = [
    "We’re",
    "the",
    "architects",
    "of",
    "digital",
    "excellence",
    "across",
    "industries.",
    "We",
    "redefine",
    "business",
    "with",
    "cutting-edge",
    "digital",
    "strategies",
    "that",
    "invokes",
    "sector-wide",
    "transformation.",
  ];
  const { ref, animationProps } = useTypewriterEffect(paragraphText, isTypewriterComplete);
  return (
    <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
      <div className="max-w-[56rem]">
        <div className="min-h-[180px]">
          <Typewriter
            as="h1"
            wrapperClassName="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 transition-opacity duration-500 ease-in-out"
            segments={[
              { text: "We build " },
              { text: "products ", className: "text-accent" },
              { text: "that shape a better future" },
            ]}
            onComplete={() => setIsTypewriterComplete(true)}
          />
        </div>
        <div className="mb-8 max-w-3xl">
          <div>
            <p className="text-white/60 text-base md:text-lg mb-8 leading-7">
              {paragraphText.map((word, index) => (
                <motion.span
                  ref={ref}
                  key={index}
                  {...animationProps(index)}
                  className="inline-block mr-1 transition-opacity duration-500 ease-in-out"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <Button className="flex gap-2">
            Book a Call
            <img
              src="/play-dark.svg"
              className="group-hover:hidden h-3"
              alt="arrow"
            />
            <img
              src="/play-light.svg"
              className="hidden group-hover:block h-3"
              alt="arrow"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
