import * as React from "react";
import Button from "~/components/atom/button";
import Metadata from "~/components/atom/metadata";
import Section from "~/components/layout/section/section";
import SectionHeader from "~/components/layout/section/section-header";
import TopicGrid from "~/components/layout/topic/topic-grid";
import TopicGridNavigation from "~/components/layout/topic/topic-grid-navigation";
import { db } from "~/db";
import { TopicType } from "~/types";

type Props = { data: Record<string, any> };

const HomePage = ({ data }: Props) => {
  const topics = Array.isArray(data) ? data : ([] satisfies TopicType[]);

  // TODO move logic to designated context provider for topic-grid
  const [activeItem, setActiveItem] = React.useState(0);
  const handleActiveItem = (i: number) => setActiveItem(i);

  return (
    <>
      <Metadata
        title="Intent Tech Test | Hey Armon!"
        description="I left a few comments dotted around for you"
        keywords="NextJS, Tailwind, TypeScript, Responsive, Components, Interactive"
      />
      <Section
        header={
          <SectionHeader
            subtitle="Areas of focus"
            title="Discover an interest or topic."
            description="Compare rates, crunsh numbers and get expret admive for life's biggest financial moments."
            variant="primary"
          />
        }
      >
        <TopicGrid
          activePage={activeItem}
          navigation={
            <TopicGridNavigation
              navigationItems={[
                "personal finance",
                "careers",
                "start-ups",
                "trending",
              ]}
              activeItem={activeItem}
              handleActiveItem={handleActiveItem}
            />
          }
          topics={topics}
        />
        <Button href="https://intent.uk/" external>
          View All Of Our Latest
        </Button>
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
