import * as React from "react";

type Props = {
  variant?: "h1" | "h2" | "p";
  className?: string;
  children: React.ReactNode;
};

const Typography = ({
  variant = "p",
  children,
  className = "",
  ...props
}: Props) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={`section-header text-6xl ${className}`} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`section-header text-5xl ${className}`} {...props}>
          {children}
        </h2>
      );
    default:
      return (
        <p className={className} {...props}>
          {children}
        </p>
      );
  }
};

export default Typography;
