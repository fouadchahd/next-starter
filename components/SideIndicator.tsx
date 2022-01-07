import React from "react";
import Image from "next/image";
const SideIndicator = ({
  up = false,
  down = false,
}: {
  up?: boolean;
  down?: boolean;
}): React.ReactElement => {
  return (
    <div className=" absolute overflow-y-visible translate-x-1/3 right-0  mr-[100px] mt-[150px] w-[50px] h-4/5">
      <div
        className={
          "w-full overflow-y-visible h-full my-2 flex flex-col justify-between flex-1 "
        }
      >
        <span className={up == true ? "animate-bounce" : "invisible"}>
          <Image
            alt="press to scroll up"
            src="/images/scroll-up.png"
            width="60"
            height="80"
            className={"cursor-pointer"}
          />
        </span>

        <div className="flex flex-col justify-center items-center space-y-3">
          <span>
            <Image
              alt="bits facebook"
              src="/images/facebook.png"
              width="14"
              height="16"
              className={"cursor-pointer"}
            />
          </span>
          <span>
            <Image
              alt="bits instagram"
              src="/images/instagram.png"
              width="14"
              height="16"
              className={"cursor-pointer"}
            />
          </span>
          <span>
            <Image
              alt="bits twitter"
              src="/images/twitter.png"
              width="14"
              height="16"
              className={"cursor-pointer"}
            />
          </span>
        </div>
        <span className={down == true ? "animate-bounce" : "invisible"}>
          <Image
            alt="press to scroll down"
            src="/images/scroll-down.png"
            width="60"
            height="80"
            className={"cursor-pointer "}
          />
        </span>
      </div>
    </div>
  );
};

export default SideIndicator;
