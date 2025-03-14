import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "outline";
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
  hover?: "lift" | "glow" | "scale" | "none";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      padding = "md",
      hover = "lift",
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "bg-white border border-border shadow-subtle",
      glass: "glass-card backdrop-blur-sm bg-white/80 border border-white/20",
      outline: "bg-transparent border border-saffron-200",
    };

    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    const hoverEffects = {
      lift: "hover-lift",
      glow: "hover:shadow-glass-hover",
      scale: "hover:scale-[1.02]",
      none: "",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-300",
          variants[variant],
          paddings[padding],
          hoverEffects[hover],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
