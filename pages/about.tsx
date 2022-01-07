import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import SideIndicator from "@components/SideIndicator";
import { AboutContent } from "@components/AboutContent";
const About: NextPage = () => {
  return (
    <>
      <HeaderNavigation selectedItem={0} />
      <div className="h-screen scrollbar-hide w-screen overflow-x-hidden overflow-y-visible bg-gray-100 bg-digit-background">
        <WebSiteHead title="Bits • About" />
        <div id="Sec1" className="flex justify-center items-center relative h-screen w-screen bg-blue-300">
          <SideIndicator down scrollDownToId={"Sec2"} />
          <div className="flex justify-between items-center w-10/12 h-1/2" >
            <span className="h-1/2 w-1 bg-black rounded-full" ></span>
            <div className=" w-[600px] flex flex-col">
              <h1 className="font-bold text-[32px]">A Professional Problem Solving Factory</h1>
              <p className="text-[27px] mt-20">At BITS, we pride ourself with the custom solutions we build from scratch. No matter what your business line is, what product you need, what daily tasks you do, we can enhance it and make your life much easier using a custom software.
              </p>
            </div>
            <Image
              alt=""
              src="/images/AboutIllu-1.png"
              width="450px"
              height="450px"
              className={"cursor-pointer"}
            />
            <Image
              alt=""
              src="/images/right-arrow.png"
              width="67px"
              height="117px"
              className={"cursor-pointer"}
            />
          </div>
        </div>
        <div id="Sec2" className="relative flex  items-center relative h-screen w-screen bg-green-300">
          <AboutContent title={"project brief"} number={"01"} image={"/images/AboutIllu-2.png"} content={"Each project journey starts with a questionnair that will make you think deeply about your project and help you define your goals."} />

          <SideIndicator
            up
            down
            scrollDownToId={"Sec3"}
            scrollUpToId={"Sec1"}
          />
        </div>
        <div id="Sec3" className="flex items-center relative h-screen w-screen bg-violet-300">
          <AboutContent title={"onboarding"} number={"02"} image={"/images/AboutIllu-3.png"} content={"After our brief, you will receive a non-compulsary detailed proposal covering the project scope, the technologies that will be used, the initial project plan."} />
          <SideIndicator
            up
            down
            scrollDownToId={"Sec4"}
            scrollUpToId={"Sec2"}
          />
        </div>
        <div id="Sec4" className="flex items-center relative h-screen w-screen bg-rose-400">
          <AboutContent title={"design"} number={"03"} image={"/images/AboutIllu-4.png"} content={"After creating multiple concepts, we pick the strongest two and present them in-depth concept presentation. Each project involves two revision rounds, so we can adjust things until you are please."} />

          <SideIndicator
            up
            down
            scrollDownToId={"Sec5"}
            scrollUpToId={"Sec3"}
          />
        </div>
        <div id="Sec5" className="flex items-center relative h-screen w-screen bg-pink-300">
          <AboutContent title={"research"} number={"04"} image={"/images/AboutIllu-5.png"} content={"We will define the creative direction and put together a strategy where we outline a unique style through a visual mood board."} />

          <SideIndicator up scrollUpToId={"Sec4"} />
        </div>
      </div>
    </>
  );
};

export default About;
