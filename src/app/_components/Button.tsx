import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from "react";

const Button = ({
  children,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button className="" {...props}>
      {children}
    </button>
  );
};

export default Button;
