import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const colorStyles = {
  primary: "bg-main",
  custom: "",
};

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: keyof typeof colorStyles;
  disabled?: boolean;
}

const Button = ({
  color,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        `p-[10px] rounded text-white font-extrabold ${
          colorStyles[color]
        } ${className} ${disabled ? "bg-gray" : ""} `
      )}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
