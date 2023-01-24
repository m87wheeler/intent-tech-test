import * as React from "react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {}

const Button = ({ ...props }: Props) => {
  return (
    <button {...props}>
      <slot />
    </button>
  );
};

export default Button;
