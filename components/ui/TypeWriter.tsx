import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterProps } from '@/lib/types';


const Typewriter = ({
  text,
  className = '',
  speed = 0.05,
  delay = 0.3,
  cursorColor = 'currentColor',
  textColor = 'currentColor',
  fontSize = '2xl',
  fontWeight = 'semibold',
  variant = 'character',
  cursor = true,
  onComplete
}: TypewriterProps) => {
  const texts = Array.isArray(text) ? text : [text];
  const characters = texts.join(' ').split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
        when: "beforeChildren",
      },
      onComplete
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const blockVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        duration: speed * characters.length,
        delay,
        ease: "easeOut",
      },
      onComplete
    },
  };

  const cursorVariants = {
    blink: {
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 0,
      },
    },
  };

  const fontSizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  };

  const fontWeightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <div 
      className={`flex items-center justify-start ${fontWeightClasses[fontWeight]} ${className}`}
      style={{ color: textColor }}
    >
      {variant === 'character' ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={`${fontSizeClasses[fontSize]} flex flex-wrap`}
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              variants={child}
              className={char === " " ? "mr-[0.2em]" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ) : (
        <div className={`relative overflow-hidden whitespace-nowrap ${fontSizeClasses[fontSize]}`}>
          <motion.div
            variants={blockVariants}
            initial="hidden"
            animate="visible"
          >
            {texts.join(' ')}
          </motion.div>
        </div>
      )}
      
      {cursor && (
        <motion.div
          variants={cursorVariants}
          animate="blink"
          className={`w-[2px] h-8 ml-1`}
          style={{ 
            backgroundColor: cursorColor,
            height: fontSize === '4xl' ? '2.5rem' : fontSize === '3xl' ? '2rem' : '1.5rem'
          }}
        />
      )}
    </div>
  );
};

export default Typewriter;