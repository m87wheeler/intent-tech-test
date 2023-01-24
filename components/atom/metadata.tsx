import Head from "next/head";
import * as React from "react";

type Props = { title: string; description?: string; keywords?: string };

const Metadata = ({ title, description = "", keywords = "" }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default Metadata;
