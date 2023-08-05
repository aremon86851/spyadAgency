import Image from "next/image";
import React from "react";
import Heading from "../SharedComponent/Heading";

const WhatWeDo = () => {
  const ourProcess = [
    {
      img: "/images/25.svg",
      heading: "Branding",
    },
    {
      img: "/images/26.svg",
      heading: "Traffic",
    },
    {
      img: "/images/27.svg",
      heading: "Conversion",
    },
    {
      img: "/images/28.svg",
      heading: "Sales",
    },
  ];
  return (
    <section className="py-14 container mx-auto px-24">
      <Heading>Our Methodology</Heading>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:w-7/12  grid grid-cols-2 px-4 mt-6 md:mt-0 text-end gap-4">
          {ourProcess.map((process, i) => (
            <>
              <div
                key={i}
                className="group hover:bg-sky-500 box-shadow p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="mb-3"
                    src={process.img}
                    alt="Bonnie image"
                    width="80"
                    height="80"
                  />
                  <h5 className="group-hover:text-white mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {process.heading}
                  </h5>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="md:w-1/2 lg:w-5/12 px-4">
          <h3 className="text-2xl font-semibold">How We Help!</h3>
          <p className="text-gray-600 mb-6">
            At XYZ Company, we are committed to providing innovative solutions
            that make a positive impact on our clients and the world. Our
            mission is to unlock potential, drive growth, and create value
            through technology and innovation.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
