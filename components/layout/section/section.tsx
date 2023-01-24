import * as React from "react";

type Props = { header?: React.ReactNode; children: React.ReactNode };

const Section = ({ header, children }: Props) => {
  return (
    <section className="section">
      {header}
      {children}
    </section>
  );
};

export default Section;
