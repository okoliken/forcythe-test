"use client";
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import { motion } from "framer-motion";

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
        stroke-linecap="round"
        stroke-linejoin="round"
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

  const cardData = [
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left"
              >
                <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
                  <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                    <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                      <card.icon />
                    </div>
                    <h4 className="text-2xl font-medium mb-5">{card.title}</h4>
                    <p className="mb-0 text-white/60 text-[17.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div
                  className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                  style={{
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(17.0527% 42.8675% at 90.5203% 58.8262%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  }}
                />
                <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <CompanyStats />
    </>
  );
};

const CompanyStats = () => {
  const stats = [
    { value: "50+", label: "Clients" },
    { value: "120+", label: "Projects" },
    { value: "10+", label: "Team Leads" },
    { value: "10+", label: "Glorious Years" },
  ];

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
              We build solutions that help{" "}
              <span className="text-[#60a6e7]">businesses</span> of all sizes to{" "}
              <span className="text-[#60a6e7]">scale</span>
            </p>
          </div>
          <div className="flex justify-evenly sm:justify-between items-center gap-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-3 text-left w-fit">
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                  {stat.value}
                </div>
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestB2BProduct;
