import React from "react";
import Image from "next/image";
const SideIndicator = ({
  up = false,
  down = false,
  scrollDownToId = "#",
  scrollUpToId = "#",
}: {
  up?: boolean;
  down?: boolean;
  scrollDownToId?: string;
  scrollUpToId?: string;
}): React.ReactElement => {
  const scrollTop = (): void => {
    const el = document.getElementById(scrollUpToId);
    el?.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  };
  const scrollDown = (): void => {
    const el = document.getElementById(scrollDownToId);
    el?.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  };
  return (
    <div className=" absolute  overflow-y-visible  right-14  bottom-0 w-[50px] h-4/5">
      <div
        className={
          "w-full overflow-y-visible h-full my-2 flex flex-col justify-between flex-1 "
        }
      >
        <span className={up == true ? "animate-bounce" : "invisible"}>
          <a onClick={scrollTop}>
            <Image
              alt="press to scroll up"
              src="/images/scroll-up.png"
              width="60"
              height="80"
              className={"cursor-pointer"}
            />
          </a>
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
          <a onClick={scrollDown}>
            <Image
              alt="press to scroll down"
              src="/images/scroll-down.png"
              width="60"
              height="80"
              className={"cursor-pointer "}
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default SideIndicator;
