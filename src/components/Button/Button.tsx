import { ComponentProps } from "react";
import "tailwindcss/tailwind.css";
import { cn } from "../../utils";
import { ButtonVariants, buttonStyles } from "./Button.styles";
export interface ButtonProps extends ComponentProps<"button">, ButtonVariants {
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  asChild = false,
  ...props
}) => {
  const Component = asChild ? "span" : "button";
  return (
    <Component
      aria-label={asChild ? undefined : "Button"}
      className={cn(buttonStyles({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;
