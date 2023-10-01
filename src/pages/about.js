import Main from "@/Layout/Main";
import AboutSpyde from "@/component/About/AboutSpyde";
import ContactUs from "@/component/About/ContactUs";
import Teams from "@/component/About/Teams";
import Banner from "@/component/Banner/Banner";
import Blogs from "@/component/Blogs";
import Services from "@/component/Home/Services";
import SpydeData from "@/config/SpydeData";
import React from "react";

const About = () => {
  return (
    <Main>
      <Banner data={SpydeData.aboutUs} />
      <ContactUs />
      <Teams />
      <AboutSpyde />
      <Services />
      <Blogs />
    </Main>
  );
};

export default About;
