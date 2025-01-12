"use client";
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import { useEffect, useState } from "react";
import { Tabs as TabImages, team } from "@/lib/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"

export const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const paragraphText = [
    "Discover",
    "the",
    "transformative",
    "stories",
    "of",
    "startups",
    "that",
    "scaled",
    "new",
    "heights",
    "with",
    "us",
  ];

  const { ref, animationProps } = useTypewriterEffect(paragraphText);

  const testimonials = [
    {
      company: "Starks Associate",
      text: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They've become more than a service provider; they're a trusted ally.",
      author: "John",
      role: "Management",
      avatar: team.John,
    },
    {
      company: "ExecutivePros",
      text: "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
      author: "Testimony",
      role: "Co-founder",
      avatar: team.ExecutiveProCeo,
    },
    {
      company: "Stac AI",
      text: "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team's commitment to our vision was evident every step of the way.",
      author: "Edwin",
      role: "Former CTO",
      avatar: team.Edwin,
    },
    {
      company: "Iwaria",
      text: "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand's story, captivating our audience like never before.",
      author: "Iwaria",
      role: "Founder",
      avatar: team.IwariaCeo,
    },
    {
      company: "Beaupreneur",
      text: "I'm beyond impressed with the dedication Forcythe showed. They didn't just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers' hearts.",
      author: "Christiana",
      role: "Founder",
      avatar: team.Christina,
    },
  ];

  const LEFT_POSITIONS = [
    "0px", // First index
    "20%", // Second index
    "40%", // Third index
    "30%", // Fourth index
    "50%", // Fifth index
  ];

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, testimonials.length]);

  const handleTabClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-playing when manually clicked
  };

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-10 container mx-auto px-4 md:px-5">
      <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
        {paragraphText.map((text, index) => (
          <motion.span
            className={`${
              text === "transformative" || text === "stories"
                ? "text-accent"
                : ""
            } inline-block mr-3`}
            key={index}
            ref={ref}
            {...animationProps(index)}
          >
            {text}
          </motion.span>
        ))}
      </p>

      <Tabs
        currentIndex={currentIndex}
        setCurrentIndex={handleTabClick}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 ${
            currentIndex > 0 ? "lg:relative" : ""
          }`}
          style={{ left: LEFT_POSITIONS[currentIndex] || "0px" }}
        >
          <div className="rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#062645]">
            <motion.div className="flex items-start justify-between flex-col sm:basis-[58%] pr-3">
              <p className="text-base leading-7 mb-3 font-bold">
                {testimonials[currentIndex].company}
              </p>
              <p className="text-base leading-7 mb-3">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-base font-semibold leading-7 mb-3">
                <span>{testimonials[currentIndex].author}</span>, {" "}
                <span>{testimonials[currentIndex].role}</span>
              </p>
            </motion.div>

            <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
              <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-xl"></div>
              <Image
                src={testimonials[currentIndex].avatar.src}
                alt={testimonials[currentIndex].author}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-full object-cover rounded-xl"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent",
                }}
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Tabs = ({
  currentIndex,
  setCurrentIndex,
}: {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}) => {
  return (
    <div className="w-full overflow-x-scroll hide-scrollbar">
      <div className="w-full border-[1px] border-[#062645] rounded-full grid place-items-center grid-cols-5 min-w-[750px]">
        {TabImages.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-full p-[1.1rem] cursor-pointer ${
              currentIndex === index ? "bg-[#062645]" : ""
            }
              ${index === 0 ? "rounded-s-full" : ""}
              ${index === TabImages.length - 1 ? "rounded-e-full" : ""}
              `}
          >
            <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="overflow-hidden w-full h-7 flex-1"
                decoding="async"
                width={20}
                height={20}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
