import * as React from "react";
import Button from "~/components/atom/button";
import Section from "~/components/layout/section/section";
import SectionHeader from "~/components/layout/section/section-header";
import TopicGrid from "~/components/molecule/topic-grid";
import TopicGridNavigation from "~/components/molecule/topic-grid-navigation";
import { TopicType } from "~/types";

type Props = { topics: TopicType[] };

const TopicsSection = ({ topics }: Props) => {
  // TODO move logic to designated context provider for topic-grid
  const [activeItem, setActiveItem] = React.useState(0);
  const handleActiveItem = (i: number) => setActiveItem(i);

  return (
    <Section
      fullHeight
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
  );
};

export default TopicsSection;
