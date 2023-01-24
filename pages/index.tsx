import * as React from "react";
import Section from "~/components/layout/section/section";
import SectionHeader from "~/components/layout/section/section-header";
import TopicGrid from "~/components/layout/topic/topic-grid";
import TopicGridNavigation from "~/components/layout/topic/topic-grid-navigation";

const TEMP_TOPICS = [
  {
    id: 1,
    title: "Loan Payments",
    description:
      "Compare rates, crunch numbers and get expert guidance for life.",
    icon: "",
  },
];

type Props = {};

const HomePage = ({}: Props) => {
  return (
    <>
      <Section header={<SectionHeader />}>
        <TopicGrid navigation={<TopicGridNavigation />} topics={TEMP_TOPICS} />
      </Section>
    </>
  );
};

export default HomePage;
