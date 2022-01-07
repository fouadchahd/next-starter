import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
import { HeaderNavigation } from "@components/HeaderNavigation";
const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 bg-digit-background">
      <WebSiteHead title="Business IT Solutions" />
      <HeaderNavigation selectedItem={-1} />
    </div>
  );
};

export default Home;
