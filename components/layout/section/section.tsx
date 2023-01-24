import * as React from "react";

type Props = { header?: React.ReactNode; children: React.ReactNode };

const Section = ({ header, children }: Props) => {
  return (
    <section className="section p-8 flex flex-column gap-8">
      {header}
      {children}
    </section>
  );
};

export default Section;
