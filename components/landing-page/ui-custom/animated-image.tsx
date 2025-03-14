import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  animation?: "fade-in" | "zoom-in" | "float" | "none";
  delay?: number;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  animation = "fade-in",
  delay = 0,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const imgElement = document.querySelector(`[data-src="${src}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "zoom-in":
        return "animate-zoom-in";
      case "float":
        return "animate-float";
      default:
        return "";
    }
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        data-src={src}
        className={cn(
          "transition-all duration-700 ease-in-out rounded-lg",
          {
            "opacity-0": !isLoaded || !isInView,
            "opacity-100": isLoaded && isInView,
            [getAnimationClass()]: isLoaded && isInView,
          },
          className
        )}
        style={{ animationDelay: `${delay}ms` }}
        onLoad={handleLoad}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;
