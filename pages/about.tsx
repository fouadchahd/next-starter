import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import SideIndicator from "@components/SideIndicator";
const About: NextPage = () => {
  return (
    <>
      <HeaderNavigation selectedItem={0} />
      <div className="h-screen scrollbar-hide w-screen overflow-x-hidden overflow-y-visible bg-gray-100 bg-digit-background">
        <WebSiteHead title="Bits • About" />
        <div className="relative h-screen w-screen bg-blue-300">
          <SideIndicator down />
        </div>
        <div className=" relative h-screen w-screen bg-green-300">
          <SideIndicator up down />
        </div>
        <div className=" relative h-screen w-screen bg-violet-300">
          <SideIndicator up down />
        </div>
        <div className=" relative h-screen w-screen bg-rose-400">
          <SideIndicator up down />
        </div>
        <div className="relative h-screen w-screen bg-pink-300">
          <SideIndicator up />
        </div>
      </div>
    </>
  );
};

export default About;
