import Image from "next/image";
import * as React from "react";

type TopicType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

type Props = { navigation?: React.ReactNode; topics: TopicType[] };

const TopicGrid = ({ navigation, topics }: Props) => {
  return (
    <div>
      {navigation}
      {Array.isArray(topics) ? (
        <ul>
          {topics.map(({ id, icon, title, description }: TopicType) => (
            <li key={id}>
              <div>
                <Image src={icon} alt={title} fill />
              </div>
              <p>{title}</p>
              <p>{description}</p>
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
