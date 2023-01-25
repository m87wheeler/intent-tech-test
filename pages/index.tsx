import * as React from "react";
import Image from "next/image";
import LandingSection from "~/sections/homepage/landing-section";
import MainLogo from "~/components/atom/main-logo";
import Metadata from "~/components/atom/metadata";
import PageHeader from "~/components/molecule/page-header";
import TopicsSection from "~/sections/homepage/topics-section";
import { db } from "~/db";
import { TopicType } from "~/types";

type Props = { data: Record<string, any> };

const HomePage = ({ data }: Props) => {
  const topics = Array.isArray(data?.topics)
    ? data?.topics
    : ([] satisfies TopicType[]);
  const brands = Array.isArray(data?.brands)
    ? data?.brands
    : ([] satisfies TopicType[]);

  return (
    <>
      <Metadata
        title="Intent Tech Test | Hey Armon!"
        description="I left a few comments dotted around for you"
        keywords="NextJS, Tailwind, TypeScript, Responsive, Components, Interactive"
      />
      <PageHeader title={<MainLogo />} />
      <Image
        src="/assets/images/landing-background.png"
        alt="landing-background"
        style={{ maxHeight: "775px", zIndex: -1 }}
        fill
      />
      <LandingSection brands={brands} />
      <TopicsSection topics={topics} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    // Real fetch request goes here
    return { props: { data: db } };
  } catch (_) {
    return { notFound: true };
  }
}
