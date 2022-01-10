import React, { useState } from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import SideIndicator from "@components/SideIndicator";
const ContactUs: NextPage = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("Bits");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");

  return (
    <>
      <HeaderNavigation selectedItem={4} />
      <div className="h-screen scrollbar-hide w-screen overflow-x-hidden overflow-y-visible bg-skyscraper-background bg-right-bottom bg-no-repeat">
        <div className="fixed h-screen w-screen "></div>
        <WebSiteHead title="Contact Us" />
        <div
          id="Sec1"
          className="relative flex items-center h-screen w-screen pl-[110px] pt-[100px]"
        >
          <div className=" pb-10 mt-20 ">
            <h1 className="2xl:text-5xl text-2xl font-bold 2xl:my-10 my-5 ">
              GET IN TOUCH
            </h1>
            <form>
              <div className="p-4 flex flex-row ">
                <div className="flex flex-col mr-32">
                  <p className=" 2xl:text-2xl text-xl text-black">Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(t): void => setName(t.currentTarget.value)}
                    className="outline-hidden mt-1 block w-[250px] py-2 bg-transparent border-0 border-b-2 border-black 2xl:text-xl text-lg shadow-sm 
                focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <p className=" 2xl:text-2xl text-xl text-black">Company</p>
                  <input
                    type="text"
                    value={company}
                    onChange={(t): void => setCompany(t.currentTarget.value)}
                    className="outline-hidden mt-1 block w-[250px] py-2 bg-transparent border-0 border-b-2 border-black 2xl:text-xl text-lg shadow-sm 
                focus:outline-none"
                  />
                </div>
              </div>
              <div className="p-4 flex flex-row  mb-10">
                <div className="flex flex-col mr-32">
                  <p className=" 2xl:text-2xl text-xl text-black">Mail</p>
                  <input
                    type="email"
                    value={mail}
                    onChange={(t): void => setMail(t.currentTarget.value)}
                    className="outline-hidden mt-1 block w-[250px] py-2 bg-transparent border-0 border-b-2 border-black 2xl:text-xl text-lg shadow-sm 
                focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <p className=" 2xl:text-2xl text-xl text-black">Mobile</p>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(t): void => setMobile(t.currentTarget.value)}
                    className="outline-hidden mt-1 block w-[250px] py-2 bg-transparent border-0 border-b-2 border-black 2xl:text-xl text-lg shadow-sm 
                focus:outline-none"
                  />
                </div>
              </div>
              <div className="p-4  flex flex-row">
                <div className="flex flex-col ">
                  <p className=" 2xl:text-2xl text-xl text-black">Message</p>
                  <textarea
                    value={message}
                    onChange={(t): void => setMessage(t.currentTarget.value)}
                    className="outline-hidden mt-1 block w-[630px] py-2 bg-transparent border-0 border-b-2 border-black 2xl:text-xl text-lg shadow-sm 
                focus:outline-none"
                  />
                </div>
              </div>
              <button className="bg-black float-right text-white rounded font-bold py-2 px-4">
                Submit
              </button>
            </form>
          </div>
          <SideIndicator />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
