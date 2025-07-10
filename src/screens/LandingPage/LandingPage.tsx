import React, { useEffect, useState } from "react";
import { ChoosePlanThatsByAnima } from "./sections/ChoosePlanThatsByAnima";
import { CompanyByAnima } from "./sections/CompanyByAnima/CompanyByAnima";
import { RecurringFooter } from "./sections/FooterByAnima/RecurringFooter";
import { ConsultationSection } from "./sections/FooterByAnima/ConsultationSection";
import { HowWeSupportOurByAnima } from "./sections/HowWeSupportOurByAnima";
import { NavbarByAnima } from "./sections/NavbarByAnima";
import { OurFeaturesYouCabByAnima } from "./sections/OurFeaturesYouCabByAnima";
import { WeReHereToByAnima } from "./sections/WeReHereToByAnima";
import { WhatBenifitWillByAnima } from "./sections/WhatBenifitWillByAnima/WhatBenifitWillByAnima";
import { LogoCloud } from "../../components/ui/logo-cloud";
import Layout from "../../components/ui/Layout";
//import { Loader } from "../../components/ui/Loader"; // ✅ import loader

export const LandingPage = (): JSX.Element => {
  return (
    <Layout>
      <div className="bg-white flex flex-col items-center w-full overflow-x-hidden relative">
        {/* background blobs here... */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute w-[634px] h-[634px] top-[219px] left-[376px] bg-white rounded-full blur-[500px]" />
          <div className="absolute w-[634px] h-[634px] top-[270px] left-[1123px] bg-app-accent rounded-full blur-[500px]" />
          <div className="absolute w-[634px] h-[634px] top-[-280px] left-[-317px] bg-app-primary rounded-full blur-[500px]" />
          <div className="absolute w-[634px] h-[634px] top-[3278px] left-[1123px] bg-app-accent rounded-full blur-[500px]" />
        </div>


        {/* content starts after loading */}
        <div className="relative w-full z-10">
          <NavbarByAnima />
          <WeReHereToByAnima />
          <LogoCloud />

          <div className="w-full bg-[#0A0A1F] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#12121A]/40 via-[#1A1A2A]/60 to-[#12121A]/40 backdrop-blur-xl z-0" />
            <div className="relative z-10 w-full flex justify-center">
              <div className="w-full max-w-[1440px] px-4">
                <WhatBenifitWillByAnima />
                <OurFeaturesYouCabByAnima />
                <HowWeSupportOurByAnima />
                <ChoosePlanThatsByAnima />
                {/* <CompanyByAnima /> */}
                <ConsultationSection />
                <RecurringFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
