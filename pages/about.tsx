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
        <div id="Sec1" className="relative h-screen w-screen bg-blue-300">
          <SideIndicator down scrollDownToId={"Sec2"} />
        </div>
        <div id="Sec2" className=" relative h-screen w-screen bg-green-300">
          <SideIndicator
            up
            down
            scrollDownToId={"Sec3"}
            scrollUpToId={"Sec1"}
          />
        </div>
        <div id="Sec3" className=" relative h-screen w-screen bg-violet-300">
          <SideIndicator
            up
            down
            scrollDownToId={"Sec4"}
            scrollUpToId={"Sec2"}
          />
        </div>
        <div id="Sec4" className=" relative h-screen w-screen bg-rose-400">
          <SideIndicator
            up
            down
            scrollDownToId={"Sec5"}
            scrollUpToId={"Sec3"}
          />
        </div>
        <div id="Sec5" className="relative h-screen w-screen bg-pink-300">
          <SideIndicator up scrollUpToId={"Sec4"} />
        </div>
      </div>
    </>
  );
};

export default About;
