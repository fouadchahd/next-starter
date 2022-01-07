import React from "react";
import Image from "next/image";

export const AboutContent = (props: { title: string, number: string, image: string, content: string }): React.ReactElement => {
    return (
        <div className="absolute left-[-120px] flex justify-between  items-center w-full h-1/2 " >
            <span className=" font-semibold text-[400px]" >{props.number}</span>
            <span className="h-1/2 w-[6px] rounded bg-black" ></span>
            <div className="w-[600px] flex flex-col">
                <h1 className="leading-none font-bold text-[60px] uppercase">{props.title}</h1>
                <p className="text-[27px] mt-5">{props.content}</p>
            </div>
            <Image
                alt=""
                src="/images/right-arrow.png"
                width="67px"
                height="117px"
                className={"cursor-pointer"}
            />
            <Image
                alt=""
                src={props.image}
                width="450px"
                height="450px"
                className={"cursor-pointer"}
            />
        </div>
    );
};
