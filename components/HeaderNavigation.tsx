import React from "react";
import Link from "next/link";
import Image from "next/image";
export const HeaderNavigation = (props: {
  selectedItem: number;
}): React.ReactElement => {
  return (
    <div className="z-50 fixed mt-[80px] flex flex-row justify-between items-center px-[100px]  w-screen  ">
      <span>
        <Link href={"/"} passHref>
          <Image
            alt="bits • logo"
            src="/images/bits-logo.png"
            width="40"
            height="50"
            className={
              props.selectedItem == -1
                ? "cursor-pointer invert"
                : "cursor-pointer"
            }
          />
        </Link>
      </span>
      <span>
        <div className="flex space-x-10 flex-row">
          {[
            { name: "About", route: "/about" },
            { name: "Services", route: "/services" },
            { name: "Projects", route: "/projects" },
            { name: "Career", route: "/career" },
            { name: "Contact", route: "/contact" },
          ].map((item, index): React.ReactElement => {
            return (
              <Link href={item.route} key={index} passHref>
                <p
                  className={`cursor-pointer text-2xl font-light ${
                    props.selectedItem == index &&
                    `underline underline-offset-[12px]`
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </span>
      <span>
        <Image
          alt="bits • logo"
          src="/images/menu-icon.png"
          width="27"
          height="20"
          className={
            props.selectedItem == -1
              ? "cursor-pointer invert"
              : "cursor-pointer"
          }
        />
      </span>
    </div>
  );
};
