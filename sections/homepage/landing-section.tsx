import Image from "next/image";
import * as React from "react";
import Section from "~/components/layout/section/section";
import SectionHeader from "~/components/layout/section/section-header";

type Props = {};

const LandingSection = ({}: Props) => {
  return (
    <Section
      header={
        <SectionHeader
          subtitle="wealth & prosperity"
          title="The digital noise makers in the financial space."
          description="Compare rates, crunch numbers and get expert guidance for life's biggest financial moments."
          hType="h1"
        />
      }
    >
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
