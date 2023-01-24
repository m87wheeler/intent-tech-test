import * as React from "react";
import Topic from "~/components/atom/topic";
import { TopicType } from "~/types";

type Props = { navigation?: React.ReactNode; topics: TopicType[] };

const TopicGrid = ({ navigation, topics }: Props) => {
  return (
    <div>
      {navigation}
      {Array.isArray(topics) ? (
        <ul className="flex flex-col md:grid md:grid-cols-2 grid-rows-2 auto-rows-fr lg:grid-cols-4">
          {topics.map(({ id, ...rest }: TopicType) => (
            <li
              key={id}
              className="topic-grid-item border-t-2 border-l-2 border-grid-grey"
            >
              <Topic {...rest} />
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TopicGrid;
