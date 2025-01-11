export interface TypewriterProps {
    text: string | string[];
    className?: string;
    speed?: number;
    delay?: number;
    cursorColor?: string;
    textColor?: string;
    fontSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
    variant?: 'block' | 'character';
    cursor?: boolean;
    onComplete?: () => void;
  }
  