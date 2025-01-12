"use client";
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import { motion } from "motion/react";
import { useToggle } from "@/stores/useToggle";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";

const TestimonialsMarquee = ({ direction = "left" }: { direction?: "left" | "right" | "up" | "down" }) => {
  return (
    <Marquee direction={direction}>
      <div className="skills overflow-hidden flex items-stretch gap-5 w-full ml-5">
        {testimonials.map((image, index) => (
          <div key={index} className="relative w-auto h-[340px]">
            <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse" />
            <Image
              src={image.src}
              alt={`image-${index}`}
              width={image.width}
              height={image.height}
              loading="lazy"
              priority
              className="overflow-hidden w-full h-full"
              decoding="async"
              style={{ color: "transparent" }}
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export const Testimonials = () => {
  const paragraphText = [
    "Success",
    "in",
    "Motion",
    "–",
    "Our",
    "clients'",
    "journey",
  ];
  const isOpen = useToggle((state) => state.isOpen);

  const { ref, animationProps } = useTypewriterEffect(paragraphText, isOpen);
  return (
    <div>
      <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
        {paragraphText.map((text, index) => (
          <motion.span
            className={`${
              text === "Motion" ? "text-accent capitalize" : ""
            } inline-block mr-3 transition-opacity duration-500 ease-in-out`}
            key={index}
            ref={ref}
            {...animationProps(index)}
          >
            {text}
          </motion.span>
        ))}
      </p>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%)",
        }}
        className="flex flex-col gap-5"
      >
        <div>
          <TestimonialsMarquee />
        </div>
        <div>
          <TestimonialsMarquee direction="right" />
        </div>
      </div>
    </div>
  );
};
