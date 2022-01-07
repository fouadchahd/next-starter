import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import SideIndicator from "@components/SideIndicator";
const About: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-digit-background">
      <HeaderNavigation selectedItem={0} />
      <SideIndicator up down />
      <WebSiteHead title="Bits • About" />
    </div>
  );
};

export default About;
