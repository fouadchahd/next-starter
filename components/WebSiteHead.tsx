import React from "react";
import Head from "next/head";
export const WebSiteHead = (props: { title: string }): React.ReactElement => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="bits kuwait website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};
