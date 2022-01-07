import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import { AboutContent } from "@components/AboutContent";
import SideIndicator from "@components/SideIndicator";
const Services: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-digit-background">
      <HeaderNavigation selectedItem={1} />
      <WebSiteHead title="Bits • Services" />
      <div id="Sec1" className="relative flex  items-center relative h-screen w-screen bg-green-300">
        <AboutContent title={"Enterprise Solutions"} number={"01"} image={""} content={"At BITS, we pride ourself with the custom solutions we build from scratch. No matter what your business line is, what product you need, what daily tasks you do, we can enhance it and make your life much easier using a custom software."} />

        <SideIndicator
          down
          scrollDownToId={"Sec2"}
        />
      </div>
      <div id="Sec2" className="relative flex  items-center relative h-screen w-screen bg-green-300">
        <AboutContent title={"Web Applications"} number={"02"} image={""} content={"Ranging from a simple static website, to a CMS to a more complex web application, at BITS, we can deliver what you need using the correct (sometimes latest isnt the best) technologies for the project."} />

        <SideIndicator
          up
          down
          scrollDownToId={"Sec3"}
          scrollUpToId={"Sec1"}
        />
      </div>
      <div id="Sec3" className="relative flex  items-center relative h-screen w-screen bg-green-300">
        <AboutContent title={"Mobile Applications"} number={"03"} image={""} content={"Mobile applications are considered in all our application developments. We build scalable and flexible API solutions that allow mobile development to be integrated into projects with ease. We refuse to use hybrid solutions as they are filled with shortcomings. With BITS, you get native applications that work."} />

        <SideIndicator
          up
          scrollUpToId={"Sec2"}
        />
      </div>
    </div>
  );
};

export default Services;
