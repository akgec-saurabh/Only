import { cn } from "@/lib/utils";
import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  hasIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = "default",
  variant = "default",
  hasIcon,
  ...props
}) => {
  const buttonVariants = {
    base: "text-sm uppercase font-medium inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative",
    size: {
      default: "px-16 py-2 ",
      sm: " px-3 text-sm py-3 capitalize font-normal",
      lg: "py-4  px-8 w-96",
      icon: "h-9 w-9 ",
    },
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-gray-400 bg-white hover:border-gray-200",
      secondary:
        "bg-secondary text-secondary-foreground  hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: `text-primary px-0 ${hasIcon ? "" : "hover-effect"}`,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  };
  return (
    <button
      onClick={props.onClick}
      className={cn(
        buttonVariants.base,
        buttonVariants.size[size],
        buttonVariants.variant[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
