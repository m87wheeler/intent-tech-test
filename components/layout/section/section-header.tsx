import * as React from "react";
import cn from "classnames";
import Typography from "~/components/atom/typography";

type Props = {
  subtitle: string;
  title: string;
  description: string;
  variant?: "default" | "primary";
  hType?: "h1" | "h2";
};

const SectionHeader = ({
  subtitle,
  title,
  description,
  variant = "default",
  hType = "h2",
}: Props) => {
  return (
    <header className="max-w-xl px-8 flex flex-col gap-4 items-center text-center">
      <Typography
        className={cn(`text-black uppercase text-sm font-bold`, {
          "text-primary": variant === "primary",
        })}
      >
        {subtitle}
      </Typography>
      <Typography variant={hType}>{title}</Typography>
      <p className="max-w-md text-center">{description}</p>
    </header>
  );
};

export default SectionHeader;
