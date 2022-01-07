import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
const Services: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-digit-background">
      <HeaderNavigation selectedItem={1} />
      <WebSiteHead title="Bits • Services" />
    </div>
  );
};

export default Services;
