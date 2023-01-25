import Image from "next/image";
import * as React from "react";
import TextInput from "~/components/atom/text-input";
import Section from "~/components/layout/section/section";
import SectionHeader from "~/components/layout/section/section-header";
import AsSeen from "~/components/molecule/as-seen";
import { BrandType } from "~/types";

type Props = { brands: BrandType[] };

const LandingSection = ({ brands }: Props) => {
  const [inputValue, setInputValue] = React.useState("");

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
        style={{ maxHeight: "775px", zIndex: -1 }}
        fill
      />
      <TextInput
        name="landing-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        handleClick={() => console.log("Go!")}
      >
        Go
      </TextInput>
      <AsSeen brands={brands} />
    </Section>
  );
};

export default LandingSection;
