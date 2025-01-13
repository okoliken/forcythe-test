"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import useTypewriterEffect from "@/hooks/useTypeWriterEffect";
import Button from "../ui/Button";
import { ServiceData, services } from '@/lib/services';

const serviceData: ServiceData = {
  Idea: {
    title: "Your vision is unique.",
    description: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let's us shape it.",
    image: services.CameraMan
  },
  Design: {
    title: "Crafting the blueprint for success",
    description: "Design is more than aesthetics, it's about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    image: services.PlanDesign
  },
  Develop: {
    title: "Turning blueprints into reality.",
    description: "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
    image: services.PlanDevelop
  },
  Launch: {
    title: "Your launchpad to the market.",
    description: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    image: services.PlanLaunch
  }
};

type ServiceKeys = keyof typeof serviceData;

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceKeys>('Idea');
  
  const paragraphText = [
    "From", "spark", "to", "spotlight:", "we", "take", "you", "every",
    "step", "of", "the", "way", "to", "success."
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
      </div>

      <div className="flex lg:items-end flex-col md:flex-row">
        <div className="basis-1/2 flex-1 mb-8 md:mb-0">
          <div className="border-2 border-[#B3D0F2] mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
            {(Object.keys(serviceData) as ServiceKeys[]).map((service) => (
              <motion.div
                key={service}
                className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 ${
                  activeService === service ? 'bg-[#B3D0F2] text-black' : 'text-white'
                }`}
                onClick={() => setActiveService(service)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service}
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                  {serviceData[activeService].title}
                </p>
              </div>

              <div>
                <p className="text-white/60 text-base md:text-lg mb-8 leading-7">
                  {serviceData[activeService].description}
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
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Image
                src={serviceData[activeService].image}
                alt={`${activeService} service`}
                width={200}
                height={200}
                priority
                decoding="async"
                className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;