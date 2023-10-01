import Main from "@/Layout/Main";
import React from "react";
import Hero from "./Hero";
import OurClientOrganization from "./OurClientOrganization";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import WhatWeDo from "./WhatWeDo";
import WhyWorkWithUs from "./WhyWorkWithUs";
import Testimonial from "../SharedComponent/Testimonial";
import ImageGallery from "./ImageGallery";
import CanWeDo from "./CanWeDo";
import Blogs from "../Blogs";

const HomePage = () => {
  return (
    <Main>
      <Hero />
      {/* <OurClientOrganization /> */}
      <WhoWeAre />
      <ImageGallery />
      <CanWeDo />
      <Services />
      <WhatWeDo />
      <WhyWorkWithUs />
      <Testimonial />
      <Blogs />
    </Main>
  );
};

export default HomePage;
