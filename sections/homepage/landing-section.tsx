import Image from "next/image";
import * as React from "react";
import Section from "~/components/layout/section/section";

type Props = {};

const LandingSection = ({}: Props) => {
  return (
    <Section>
      <Image
        src="/assets/images/landing-background.png"
        alt="landing-background"
        style={{ zIndex: -1 }}
        fill
      />
      <h1>Wealth</h1>
    </Section>
  );
};

export default LandingSection;
