import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  disabled = false,
  ...props
}, ref) => {
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-5 text-base',
    lg: 'py-4 px-6 text-lg'
  };

  const baseClasses = cn(
    'group relative inline-flex items-center justify-center gap-2',
    'rounded-full font-semibold transition-all duration-300',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    fullWidth ? 'w-full' : 'w-fit',
    sizeClasses[size],
    variant === 'primary' && 'bg-white text-black hover:bg-[#064386] hover:text-white',
    variant === 'secondary' && 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
    className
  );

  return (
    <div className={cn("group relative text-nowrap whitespace-nowrap hover:shadow-md", fullWidth ? "w-full" : "w-fit")}>
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={baseClasses}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </button>
      <div 
        aria-hidden="true"
        className={cn(
          "w-full h-full absolute top-1.5 right-1.5 -z-10",
          "rounded-full border border-dashed",
          "transition-colors duration-300",
          variant === 'primary' ? 'group-hover:border-[#064386]' : 'border-white',
          className
        )}
      />
    </div>
  );
});

Button.displayName = 'Button';

export default Button;