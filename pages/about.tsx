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
        <div
          id="Sec1"
          className="flex justify-center items-center relative h-screen w-screen "
        >
          <SideIndicator down scrollDownToId={"Sec2"} />
          <div className="flex justify-between items-center w-10/12 h-1/2">
            <div className=" w-[600px] h-full items-center flex ">
              <div className="w-5 rounded-full h-2/3 mx-10 bg-black"></div>
              <div className="flex flex-col">
                <h1 className="font-bold   2xl:text-[32px] text-[25px] ">
                  A Professional Problem Solving Factory
                </h1>
                <p className="2xl:text-[27px] text-[20px] mt-10">
                  `At BITS, we pride ourself with the custom solutions we build
                  from scratch. No matter what your business line is, what
                  product you need, what daily tasks you do, we can enhance it
                  and make your life much easier using a custom software`
                </p>
              </div>
            </div>
            <Image
              alt=""
              src="/images/AboutIllu-1.gif"
              width="450px"
              height="450px"
              className={"cursor-pointer bg-cover"}
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
        <div
          id="Sec2"
          className="relative flex  items-center  h-screen w-screen"
        >
          <AboutContent
            title={"project brief"}
            number={"01"}
            image={"/images/AboutIllu-2.gif"}
            content={
              "Each project journey starts with a questionnair that will make you think deeply about your project and help you define your goals."
            }
          />

          <SideIndicator
            up
            down
            scrollDownToId={"Sec3"}
            scrollUpToId={"Sec1"}
          />
        </div>
        <div
          id="Sec3"
          className="flex items-center relative h-screen w-screen "
        >
          <AboutContent
            title={"onboarding"}
            number={"02"}
            image={"/images/AboutIllu-3.gif"}
            content={
              "After our brief, you will receive a non-compulsary detailed proposal covering the project scope, the technologies that will be used, the initial project plan."
            }
          />
          <SideIndicator
            up
            down
            scrollDownToId={"Sec4"}
            scrollUpToId={"Sec2"}
          />
        </div>
        <div id="Sec4" className="flex items-center relative h-screen w-screen">
          <AboutContent
            title={"design"}
            number={"03"}
            image={"/images/AboutIllu-4.gif"}
            content={
              "After creating multiple concepts, we pick the strongest two and present them in-depth concept presentation. Each project involves two revision rounds, so we can adjust things until you are please."
            }
          />

          <SideIndicator
            up
            down
            scrollDownToId={"Sec5"}
            scrollUpToId={"Sec3"}
          />
        </div>
        <div
          id="Sec5"
          className="flex items-center relative h-screen w-screen "
        >
          <AboutContent
            title={"research"}
            number={"04"}
            image={"/images/AboutIllu-5.gif"}
            content={
              "We will define the creative direction and put together a strategy where we outline a unique style through a visual mood board."
            }
          />

          <SideIndicator
            up
            down
            scrollDownToId={"Sec6"}
            scrollUpToId={"Sec4"}
          />
        </div>
        <div id="Sec6" className="flex items-center relative h-screen w-screen">
          <AboutContent
            title={"launch"}
            number={"05"}
            image={"/images/AboutIllu-6.gif"}
            content={
              "Once your project is complete, we will prepare all final files for print and digital use as well as a guide that explains how to use your progect, if needed."
            }
          />

          <SideIndicator up scrollUpToId={"Sec5"} />
        </div>
      </div>
    </>
  );
};

export default About;
