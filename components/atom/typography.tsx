import * as React from "react";

type Props = { variant: "h1" | "h2" | "p"; children: React.ReactNode };

const Typography = ({ variant = "p", children }: Props) => {
  switch (variant) {
    case "h1":
      return <h1 className="section-header text-6xl">{children}</h1>;
    case "h2":
      return <h2 className="section-header text-5xl">{children}</h2>;
    default:
      return <p>{children}</p>;
  }
};

export default Typography;
