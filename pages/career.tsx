import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
const Career: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-digit-background">
      <WebSiteHead title="Bits • Career" />
      <HeaderNavigation selectedItem={3} />
    </div>
  );
};

export default Career;
