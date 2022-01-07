import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import { AboutContent } from "@components/AboutContent";
import SideIndicator from "@components/SideIndicator";
const Career: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-digit-background">
      <WebSiteHead title="Bits • Career" />
      <HeaderNavigation selectedItem={3} />
      <div id="Sec1" className="relative flex  items-center relative h-screen w-screen">
        <AboutContent title={"Developer"} number={"01"} image={""} joinButton content={"Are you a developer? Do you understand the principles of MVC? Have you messed around with databases? Familiar with AJAX (without google)?"} />

        <SideIndicator
          down
          scrollDownToId={"Sec2"}
        />
      </div>
      <div id="Sec2" className="relative flex  items-center relative h-screen w-screen ">
        <AboutContent title={"Designer"} number={"02"} image={""} joinButton content={"Are you a designer? Do you have a sketch book? Do you have Photoshop & Illustrator? Do you think about UX & UI in parties?"} />

        <SideIndicator
          down
          up
          scrollDownToId={"Sec3"}
          scrollUpToId={"Sec1"}
        />
      </div>
      <div id="Sec3" className="relative flex  items-center relative h-screen w-screen ">
        <AboutContent title={"Manager"} number={"03"} image={""} joinButton content={"Are you a manager? Can you handle a team of hard workers? Can you prioritize tasks and meet deadlines? Familiar with agile methodologies?"} />

        <SideIndicator
          up
          scrollUpToId={"Sec2"}
        />
      </div>
    </div>
  );
};

export default Career;
