import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "bold";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export default function Text({
  children,
  className = "",
  size = "sm",
  weight = "normal",
  as: Component = "p",
}: TextProps) {
  const sizeStyle = {
    xs: "text-sm",
    sm: "text-base md:text-lg",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-7xl lg:text-8xl",
  };

  const weightStyle = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };

  return (
    <Component className={`max-w-4xl ${sizeStyle[size]} ${weightStyle[weight]} leading-relaxed ${className}`}>
      {children}
    </Component>
  );
}
