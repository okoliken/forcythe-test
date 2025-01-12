"use client";
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import Button from "../ui/Button";
import { motion } from "motion/react";

const NewsAndArticles = () => {
  const paragraphText = [
    "Read",
    "our",
    "articles,",
    "news,",
    "and",
    "product",
    "blog",
  ];

  const { ref, animationProps } = useTypewriterEffect(paragraphText);
  return (
    <div className="container mx-auto px-4 md:px-5 my-10 lg:mb-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div>
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center">
            <div>
              {paragraphText.map((text, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3 transition-opacity duration-500 ease-in-out text-white"
                  ref={ref}
                  {...animationProps(index)}
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </p>
        </div>

        <div className="relative w-fit group">
          <Button>
            Visit Blog
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

export default NewsAndArticles;
