import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
const ContactUs: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-digit-background">
      <WebSiteHead title="Contact Us" />
      <HeaderNavigation selectedItem={4} />
    </div>
  );
};

export default ContactUs;
