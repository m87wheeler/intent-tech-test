import * as React from "react";

type Props = {};

const SectionHeader = ({}: Props) => {
  return (
    <header className="px-8 flex flex-col gap-4 items-center text-center">
      <p className="text-primary uppercase text-sm font-bold">Areas of focus</p>
      <h2 className="section-header text-5xl">Discover an interest or topic</h2>
      <p className="max-w-md text-center">
        Compare rates, crunch numbers and get expert guidance for life&apos;s
        biggest financial moments
      </p>
    </header>
  );
};

export default SectionHeader;
