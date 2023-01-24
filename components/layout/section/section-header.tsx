import * as React from "react";
import cn from "classnames";

type Props = {
  subtitle: string;
  title: string;
  description: string;
  variant: "default" | "primary";
};

const SectionHeader = ({
  subtitle,
  title,
  description,
  variant = "default",
}: Props) => {
  return (
    <header className="px-8 flex flex-col gap-4 items-center text-center">
      <p
        className={cn("text-black uppercase text-sm font-bold", {
          "text-primary": variant === "primary",
        })}
      >
        {subtitle}
      </p>
      <h2 className="section-header text-5xl">{title}</h2>
      <p className="max-w-md text-center">{description}</p>
    </header>
  );
};

export default SectionHeader;
