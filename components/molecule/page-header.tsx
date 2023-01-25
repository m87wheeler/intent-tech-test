import * as React from "react";
import Typography from "~/components/atom/typography";

type Props = { title: string | React.ReactNode };

const PageHeader = ({ title }: Props) => {
  return (
    <header className="flex justify-center pt-8 pb-24">
      <Typography variant="h1">{title}</Typography>
    </header>
  );
};

export default PageHeader;
