import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import Image from "next/image";
const Projects: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100  bg-digit-background">
      <WebSiteHead title="Bits • Project" />
      <HeaderNavigation selectedItem={2} />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="mt-20 flex text-lg ">
          <span className="mx-5 cursor-pointer underline font-semibold">All</span>
          <span className="mx-5 cursor-pointer">Web Applications</span>
          <span className="mx-5 cursor-pointer">Mobile Applications</span>
          <span className="mx-5 cursor-pointer">Company Solutions</span>
        </div>
        <div className="flex items-center  w-10/12 mt-20 justify-between">
          <Image
            alt=""
            src="/images/left-arrow.png"
            width="67px"
            height="117px"
            className={"cursor-pointer"}
          />
          <div className="flex items-center justify-between w-1/2">

            <Image
              alt=""
              src="/images/gray-app.png"
              width="173px"
              height="349px"

            />
            <Image
              alt=""
              src="/images/color-app.png"
              width="200px"
              height="403px"
            />
            <Image
              alt=""
              src="/images/gray-app.png"
              width="173px"
              height="349px"
            />
          </div>
          <Image
            alt=""
            src="/images/right-arrow.png"
            width="67px"
            height="117px"
            className={"cursor-pointer"}
          />
        </div>
      </div>

    </div>
  );
};

export default Projects;
