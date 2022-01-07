import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
import SideIndicator from "@components/SideIndicator";
const ContactUs: NextPage = () => {
  return (
    <>
      <HeaderNavigation selectedItem={4} />
      <div className="h-screen scrollbar-hide w-screen overflow-x-hidden overflow-y-visible bg-gray-100 bg-digit-background">
        <WebSiteHead title="Contact Us" />
        <div id="Sec1" className="relative h-screen w-screen ">
          <SideIndicator />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
