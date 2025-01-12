"use client";
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import Button from "../ui/Button";
import Image from "next/image";
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
      <div className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        <div className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500">
          <div className="h-60 sm:h-56 relative mb-6">
            <Image
              src="/assets/newsandarticles/forcythe-ai.webp"
              alt="Will AI take over Art?"
              fill
              decoding="async"
              loading="lazy"
              className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105 object-cover"
            />
          </div>
          <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
            <p className="text-lg font-semibold mb-1">Blog</p>
            <div className="text-base text-darkGrey flex items-center mb-6">
              <span>The Reformist</span>
              <div className="h-2 w-2 rounded-full bg-white mx-[6px] "></div>
              <span>May 29th, 2024</span>
            </div>
            <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
              Will AI take over Art?
            </h6>
          </div>
        </div>
        <div className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500">
          <div className="h-60 sm:h-56 relative mb-6">
            <Image
              src="/assets/newsandarticles/forcythe-asset.webp"
              alt="Will AI take over Art?"
              fill
              decoding="async"
              loading="lazy"
              className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105 object-cover"
            />
          </div>
          <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
            <p className="text-lg font-semibold mb-1">Blog</p>
            <div className="text-base text-darkGrey flex items-center mb-6">
              <span>The Reformist</span>
              <div className="h-2 w-2 rounded-full bg-white mx-[6px] "></div>
              <span>May 29th, 2024</span>
            </div>
            <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
              Will AI take over Art?
            </h6>
          </div>
        </div>
        <div className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500">
          <div className="h-60 sm:h-56 relative mb-6">
            <Image
              src="/assets/newsandarticles/forcythe-crypto.webp"
              alt="Will AI take over Art?"
              fill
              decoding="async"
              loading="lazy"
              className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105 object-cover"
            />
          </div>
          <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
            <p className="text-lg font-semibold mb-1">Blog</p>
            <div className="text-base text-darkGrey flex items-center mb-6">
              <span>The Reformist</span>
              <div className="h-2 w-2 rounded-full bg-white mx-[6px] "></div>
              <span>May 29th, 2024</span>
            </div>
            <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
              Will AI take over Art?
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;
