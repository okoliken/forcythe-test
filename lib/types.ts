import { JSX } from "react";

export interface TypewriterSegment {
    text: string;
    className?: string;
  }
  
  export interface TypewriterProps {
    segments: TypewriterSegment[];
    wrapperClassName?: string;
    speed?: number;
    delay?: number;
    cursorColor?: string;
    onComplete?: () => void;
    as?: keyof JSX.IntrinsicElements;
  }