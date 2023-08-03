import React from "react";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

const buttonVariants = cva("rounded-xl text-white shadow-md shadow-black/40", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base lg:px-40 w-80",
      lg: "text-md lg:text-lg lg:w-80",
    },
    bg: {
      gray: "bg-gray-600 hover:bg-gray-600/90",
      red: "bg-red-600 hover:bg-red-600/90",
      yellow: "bg-yellow-600 hover:bg-yellow-600/90",
      green: "bg-green-600 hover:bg-green-600/90",
      blue: "bg-blue-600 hover:bg-blue-600/90",
      indigo: "bg-indigo-600 hover:bg-indigo-600/90",
      purple: "bg-purple-600 hover:bg-purple-600/90",
      pink: "bg-pink-600 hover:bg-pink-600/90",
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  to?: string;
}

const Button: FC<ButtonProps> = ({
  to,
  className,
  size,
  bg,
  ...props
}) => {
  if (to) {
    return (
      <Link to={to}>
        <button
          {...props}
          className={cn(buttonVariants({ bg, size, className }))}
        />
      </Link>
    );
  } else {
    return (
      <button
        {...props}
        className={cn(buttonVariants({ bg, size, className }))}
      />
    );
  }
};

export default Button;
