import Image from "next/image";
import * as React from "react";
import Typography from "~/components/atom/typography";
import { BrandType } from "~/types";

type Props = { brands: BrandType[] };

const AsSeen = ({ brands = [] }: Props) => {
  return (
    <div className="flex flex-col items-center my-16">
      <Typography className="font-bold text-xs">AS SEEN ON</Typography>
      <div className="flex gap-10">
        {brands.map((br) => (
          <div className="relative w-36 h-20" key={br.id}>
            <Image
              className="object-contain"
              src={br.icon}
              alt={br.name}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsSeen;
