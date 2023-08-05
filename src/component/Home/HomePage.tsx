import Main from "@/Layout/Main";
import React from "react";
import Hero from "./Hero";
import OurClientOrganization from "./OurClientOrganization";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import OurSpecialization from "./OurSpecialization";
import WhatWeDo from "./WhatWeDo";
import WhyWorkWithUs from "./WhyWorkWithUs";
import Testimonial from "../SharedComponent/Testimonial";

const HomePage = () => {
  return (
    <Main>
      <Hero />
      <OurClientOrganization />
      <WhoWeAre />
      <Services />
      <OurSpecialization />
      <WhatWeDo />
      <WhyWorkWithUs />
      <Testimonial />
    </Main>
  );
};

export default HomePage;
