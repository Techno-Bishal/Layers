import React from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant, className, ...otherProps }) => {
  return (
    <button className={classes({ variant, className })} {...otherProps} />
  );
};

export default Button;
