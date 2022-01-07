import React from "react";
import Image from "next/image";

export const AboutContent = (props: { title: string, number: string, image: string, content: string, joinButton?: boolean; }): React.ReactElement => {
    return (
        <div className="absolute left-[-120px] flex justify-between  items-center w-11/12 h-1/2 " >
            <div className=" flex items-center   ">
                <span className=" font-semibold text-[400px]" >{props.number}</span>
                <span className="ml-20 h-80 w-[6px] rounded bg-black" ></span>
            </div>
            <div className="w-[600px] flex flex-col">
                <h1 className="leading-none font-bold text-[60px] uppercase">{props.title}</h1>
                <p className="text-[27px] mt-5">{props.content}</p>
                {props.joinButton &&
                    <button className="mt-10 w-[146px] h-[49px] bg-black rounded-[9px] text-white font-semibold uppercase text-[25px] py-2 px-4" >Join Us</button>
                }
            </div>
            <Image
                alt=""
                src="/images/right-arrow.png"
                width="67px"
                height="117px"
                className={"cursor-pointer"}
            />
            {props.image &&

                <Image
                    alt=""
                    src={props.image}
                    width="450px"
                    height="450px"
                    className={"cursor-pointer"}
                />
            }

        </div>
    );
};
