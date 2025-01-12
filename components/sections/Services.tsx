"use client";
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import { motion } from "motion/react";
import Button  from "../ui/Button";
import Image from "next/image";
const Services = () => {
  const paragraphText = [
    "From",
    "spark",
    "to",
    "spotlight:",
    "we",
    "take",
    "you",
    "every",
    "step",
    "of",
    "the",
    "way",
    "to",
    "success.",
  ];

  const { ref, animationProps } = useTypewriterEffect(paragraphText);
  return (
    <div className="py-20 container mx-auto px-4 md:px-5">
      <div className="mb-12 xl:mb-0 max-w-[45rem]">
        <div>
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
            <div>
              {paragraphText.map((text, index) => (
                <motion.span
                  key={index}
                  className={`inline-block mr-3 transition-opacity duration-500 ease-in-out ${
                    text === "spark" || text === "spotlight:"
                      ? "text-accent !capitalize"
                      : ""
                  } `}
                  ref={ref}
                  {...animationProps(index)}
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </p>
        </div>
      </div>

      <div className="flex lg:items-end flex-col md:flex-row">
        <div className="basis-1/2 flex-1 mb-8 md:mb-0">
          <div className="border-2 border-[#B3D0F2] mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
            <div className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 bg-[#B3D0F2] text-black">
              Idea
            </div>
            <div className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 text-white">
              Spark
            </div>
            <div className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 text-white">
              Develop
            </div>
            <div className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 text-white">
              Launch
            </div>
          </div>
          <div>
            <div>
              <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                Your vision is unique.
              </p>
            </div>
          </div>

          <div>
            <p className="text-white/60 text-base md:text-lg mb-8 leading-7">
              Nurture Your Idea into a Blueprint for Success with our strategic
              insights and industry expertise. Your vision is unique, let’s us
              shape it.
            </p>
          </div>

          <Button>
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

        <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
          <Image
            src="/assets/services/camera-man.svg"
            alt="services"
            width={200}
            height={200}
            decoding="async"
            loading="lazy"
            className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
