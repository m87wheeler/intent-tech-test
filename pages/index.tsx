import * as React from "react";
import Section from "~/components/layout/section/section";
import SectionHeader from "~/components/layout/section/section-header";
import TopicGrid from "~/components/layout/topic/topic-grid";
import TopicGridNavigation from "~/components/layout/topic/topic-grid-navigation";
import { db } from "~/db";
import { TopicType } from "~/types";

type Props = { data: Record<string, any> };

const HomePage = ({ data }: Props) => {
  const topics = Array.isArray(data) ? data : ([] satisfies TopicType[]);

  return (
    <>
      <Section header={<SectionHeader />}>
        <TopicGrid navigation={<TopicGridNavigation />} topics={topics} />
      </Section>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    // Real fetch request goes here
    return { props: { data: db.topics } };
  } catch (_) {
    return { notFound: true };
  }
}
