
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    ...props
  }, ref) => {
    const variants = {
      primary: 'bg-saffron-500 text-white hover:bg-saffron-600 focus:ring-saffron-300',
      secondary: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-300',
      outline: 'bg-transparent border border-saffron-500 text-saffron-500 hover:bg-saffron-50 focus:ring-saffron-200',
      ghost: 'bg-transparent hover:bg-saffron-50 text-saffron-500 focus:ring-saffron-200',
    };

    const sizes = {
      sm: 'py-1.5 px-3 text-sm',
      md: 'py-2.5 px-5 text-base',
      lg: 'py-3 px-6 text-lg',
    };

    return (
      <button
        className={cn(
          'relative inline-flex items-center justify-center font-medium rounded-lg shadow-button transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className={cn('mr-2 inline-flex', {
            'animate-slide-in-right': true,
          })}>
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
        {icon && iconPosition === 'right' && (
          <span className={cn('ml-2 inline-flex', {
            'animate-slide-in-left': true,
          })}>
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

