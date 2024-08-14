import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import "tailwindcss/tailwind.css";
import { buttonVariants } from "./Button.styles";

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;
export const Button: React.FC<ButtonProps> = ({ variant, size, className, ...props }) => {
  return <button className={`${buttonVariants({ variant, size })} ${className}`} {...props} />;
};

export default Button;
