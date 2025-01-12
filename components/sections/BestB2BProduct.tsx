"use client";
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import { motion, useInView } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  icon: () => React.JSX.Element;
  title: string;
  description: string;
}

const LayersThree = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.52905 17.0003L16.5829 23.5273C16.7605 23.6161 16.8493 23.6605 16.9425 23.6779C17.025 23.6934 17.1096 23.6934 17.1921 23.6779C17.2852 23.6605 17.374 23.6161 17.5516 23.5273L30.6055 17.0003M3.52905 23.7694L16.5829 30.2964C16.7605 30.3852 16.8493 30.4296 16.9425 30.4471C17.025 30.4625 17.1096 30.4625 17.1921 30.4471C17.2852 30.4296 17.374 30.3852 17.5516 30.2964L30.6055 23.7694M3.52905 10.2312L16.5829 3.70427C16.7605 3.61547 16.8493 3.57107 16.9425 3.5536C17.025 3.53812 17.1096 3.53812 17.1921 3.5536C17.2852 3.57107 17.374 3.61547 17.5516 3.70427L30.6055 10.2312L17.5516 16.7581C17.374 16.8469 17.2852 16.8913 17.1921 16.9088C17.1096 16.9243 17.025 16.9243 16.9425 16.9088C16.8493 16.8913 16.7605 16.8469 16.5829 16.7581L3.52905 10.2312Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BestB2BProduct = () => {
  const paragraphText = [
    "Your ",
    "best ",
    "call ",
    "for ",
    "B2B/B2C ",
    "product ",
    "innovation",
  ];

  const { ref, animationProps } = useTypewriterEffect(paragraphText);

  const cardData: Props[] = [
    {
      icon: LayersThree,
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
      icon: LayersThree,
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
      icon: LayersThree,
      title: "Cost Savings",
      description:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
    },
  ];

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
        }}
      >
        <div className="py-14 container mx-auto px-4 md:px-5 mb-12 xl:mb-0">
          <div>
            <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center">
              <div>
                {paragraphText.map((text, index) => (
                  <motion.span
                    key={index}
                    className="transition-opacity duration-500 ease-in-out text-[#B3D0F2]"
                    ref={ref}
                    {...animationProps(index)}
                  >
                    {text}
                  </motion.span>
                ))}
              </div>
            </p>
          </div>

          <CardGrid cardData={cardData} />
        </div>
      </div>
      <CompanyStats />
    </>
  );
};

const AnimatedCard = ({ card, index }: { card: Props; index: number }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const animate = () => {
      // Add phase offset based on index
      const phaseOffset = (index * Math.PI * 2) / 3; // Dividing by 3 for three columns
      const time = Date.now() / 800;

      // Add offset to create alternating pattern
      const x = 50 + Math.cos(time + phaseOffset) * 40;
      const y = 50 + Math.sin(time + phaseOffset) * 40;

      if (cardRef.current) {
        cardRef.current.style.background = `radial-gradient(17.0527% 42.8675% at ${x}% ${y}%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)`;
      }
    };

    const animationFrame = () => {
      animate();
      requestRef.current = requestAnimationFrame(animationFrame);
    };

    const requestRef = { current: requestAnimationFrame(animationFrame) };

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered, index]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.background = `radial-gradient(17.0527% 42.8675% at ${x}% ${y}%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)`;
  };

  return (
    <div
      className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
        <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey transition-all duration-300">
          <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
            <card.icon />
          </div>
          <h4 className="text-2xl font-medium mb-5">{card.title}</h4>
          <p className="mb-0 text-white/60 text-[17.5px]">{card.description}</p>
        </div>
      </div>
      <div
        ref={cardRef}
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit] transition-all duration-200"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
    </div>
  );
};

const CardGrid = ({ cardData }: { cardData: Props[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
      {cardData.map((card, index) => (
        <AnimatedCard key={index} index={index} card={card} />
      ))}
    </div>
  );
};

const CompanyStats = () => {
  const stats = [
    { value: "50+", label: "Clients" },
    { value: "120+", label: "Projects" },
    { value: "10+", label: "Team Leads" },
    { value: "10+", label: "Glorious Years" },
  ];

  const paragraphText = [
    "We",
    "build",
    "solutions",
    "that",
    "help",
    "businesses",
    "of",
    "all",
    "sizes",
    "to",
    "scale",
  ];

  const { ref, animationProps } = useTypewriterEffect(paragraphText);
  const statsRef = React.useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="py-14 md:py-20 xl:py-28"
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
    >
      <div className="max-w-[52rem] mx-auto bg-[url('/assets/b2b/arc.svg')] lg:bg-[url('/assets/b2b/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
          <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium">
              <div>
                {paragraphText.map((text, index) => (
                  <motion.span
                    key={index}
                    className={`inline-block mr-2 transition-opacity duration-500 ease-in-out ${
                      (
                        ["businesses", "scale"] as string[]
                      ).includes(text)
                        ? "text-[#60a6e7]"
                        : "text-white"
                    }`}
                    ref={ref}
                    {...animationProps(index)}
                  >
                    {text}
                  </motion.span>
                ))}
              </div>
            </p>
          </div>
          <motion.div
            ref={statsRef}
            className="flex justify-evenly sm:justify-between items-center gap-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-3 text-left w-fit"
                variants={statsVariants}
              >
                <motion.div
                  className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.5, opacity: 0 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {stat.value}
                </motion.div>
                <motion.span
                  className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  {stat.label}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default BestB2BProduct;
