import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
const Projects: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-digit-background">
      <WebSiteHead title="Bits • Project" />
      <HeaderNavigation selectedItem={2} />
    </div>
  );
};

export default Projects;
