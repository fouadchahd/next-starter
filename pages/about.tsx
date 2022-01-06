import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
const About: NextPage = () => {
  return (
    <div>
      <WebSiteHead title="Bits • About" />
      <h1>About</h1>
    </div>
  );
};

export default About;
