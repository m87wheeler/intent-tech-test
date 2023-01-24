import Image from "next/image";
import * as React from "react";
import { TopicType } from "~/types";

type Props = Omit<TopicType, "id">;

const Topic = ({ title, description, icon }: Props) => {
  return (
    <div className="relative px-12 py-8 flex flex-col gap-y-2 items-center text-center">
      <div className="absolute w-full max-w-[260px] h-36 bg-gradient-radial from-topic via-white to-white" />
      <div className="relative w-16 h-16 mt-10 mb-6 mx-auto">
        <Image
          className="w-full h-full object-contain"
          src={icon}
          alt={title}
          fill
        />
      </div>

      <p className="relative font-semibold">{title}</p>
      <p className="relative max-w-sm">{description}</p>
    </div>
  );
};

export default Topic;
