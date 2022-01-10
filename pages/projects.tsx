import React, { useState } from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import Image from "next/image";
import Slider from "react-slick";
const Projects: NextPage = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const imagesPath = [
    "/images/gray-app.png",
    "/images/color-app.png",
    "/images/color-app.png",
    "/images/color-app.png",
  ];

  const NextArrow = ({ onClick }): React.ReactElement => {
    return (
      <div
        className="w-[40px] absolute top-1/3 z-50 right-[200px]"
        onClick={onClick}
      >
        <Image
          alt=""
          src="/images/right-arrow.png"
          width="20px"
          height="40px"
          className={"cursor-pointer "}
        />
      </div>
    );
  };

  const PrevArrow = ({ onClick }): React.ReactElement => {
    return (
      <div
        className="w-[40px] absolute -left-[100px] top-1/3 z-50"
        onClick={onClick}
      >
        <Image
          alt=""
          src="/images/left-arrow.png"
          width="20px"
          height="40px"
          className={"cursor-pointer"}
        />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="h-screen overflow-x-hidden w-screen bg-gray-100 relative bg-digit-background">
      <WebSiteHead title="Bits • Project" />
      <HeaderNavigation selectedItem={2} />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="mt-20 flex text-lg ">
          <span className="mx-5 cursor-pointer underline font-semibold">
            All
          </span>
          <span className="mx-5 cursor-pointer">Web Applications</span>
          <span className="mx-5 cursor-pointer">Mobile Applications</span>
          <span className="mx-5 cursor-pointer">Company Solutions</span>
        </div>
        <div className="flex overflow-visible  w-10/12  h-1/2  ">
          <div className="w-screen mt-20">
            <Slider {...settings}>
              {imagesPath.map((imgSrc, idx) => (
                <div
                  onClick={(): void => setImageIndex(idx)}
                  key={idx}
                  className={
                    idx === imageIndex
                      ? "slide activeSlide items-center  overflow-visible"
                      : "slide overflow-visible  items-center"
                  }
                >
                  <Image
                    className="justify-center items-center flex"
                    alt=""
                    src={imgSrc}
                    width="190px"
                    height="360px"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
