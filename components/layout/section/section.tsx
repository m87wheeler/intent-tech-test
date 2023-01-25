import * as React from "react";
import cn from "classnames";

type Props = {
  header?: React.ReactNode;
  fullHeight?: boolean;
  children: React.ReactNode;
};

const Section = ({ header, fullHeight, children }: Props) => {
  return (
    <section
      className={cn("section p-8 flex flex-column gap-8 items-center", {
        "min-h-screen": fullHeight,
      })}
    >
      {header}
      {children}
    </section>
  );
};

export default Section;
