import * as React from "react";
import Typography from "~/components/atom/typography";

type Props = { title: string | React.ReactNode };

const PageHeader = ({ title }: Props) => {
  return (
    <header>
      <Typography variant="h1">{title}</Typography>
    </header>
  );
};

export default PageHeader;
