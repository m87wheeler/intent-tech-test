import * as React from "react";
import Topic from "~/components/atom/topic";
import { TopicType } from "~/types";

type Props = {
  navigation?: React.ReactNode;
  topics: TopicType[];
  activePage: number;
};

const TEMP_PAGE_VALUE = 4;

const TopicGrid = ({ navigation, topics, activePage }: Props) => {
  return (
    <div>
      {navigation}
      <div className="overflow-hidden max-w-[60vw] md:max-w-[100%]">
        <div
          className="relative flex"
          // TODO apply prefers-reduced-motion
          style={{
            width: `${100 * TEMP_PAGE_VALUE}%`,
            transform: `translateX(-${(100 / TEMP_PAGE_VALUE) * activePage}%)`,
            transition: "transform 350ms ease-in-out",
          }}
          // ? I left this in as feedback would be welcomed...tailwind just wasn't having it!
          // className={`relative flex w-[${
          //   TEMP_PAGE_VALUE * 100
          // }%] transition-all duration-500 translate-x-[-${
          //   (100 / TEMP_PAGE_VALUE) * activePage
          // }%]`}
        >
          {Array.isArray(topics) ? (
            // ? mimic additional grid views
            Array.from(Array(4)).map((_, i: number) => (
              <ul
                key={i}
                className="flex flex-col md:grid md:grid-cols-2 grid-rows-2 auto-rows-fr lg:grid-cols-4"
              >
                {topics.map(({ id, ...rest }: TopicType) => (
                  <li
                    key={id}
                    className="topic-grid__item border-t-2 border-l-2 border-grid-grey"
                  >
                    <Topic {...rest} />
                  </li>
                ))}
              </ul>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicGrid;
