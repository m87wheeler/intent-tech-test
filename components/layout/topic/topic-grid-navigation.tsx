import * as React from "react";
import cn from "classnames";

type Props = {
  navigationItems: string[];
  activeItem: number;
  handleActiveItem: (i: number) => void;
};

const TopicGridNavigation = ({
  navigationItems = [],
  activeItem = 0,
  handleActiveItem,
}: Props) => {
  return (
    <nav className="py-8">
      <ul className="w-full flex flex-col md:flex-row md:justify-around">
        {navigationItems.map((item, i: number) => (
          <li key={i}>
            <button
              className={cn(
                "relative topic-grid__nav-button uppercase text-xs font-bold tracking-widest",
                { "topic-grid__nav-button--active": activeItem === i }
              )}
              onClick={() => handleActiveItem(i)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopicGridNavigation;
