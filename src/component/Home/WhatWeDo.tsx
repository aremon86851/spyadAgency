import Image from "next/image";
import React from "react";
import Heading from "../SharedComponent/Heading";

const WhatWeDo = () => {
  const ourProcess = [
    {
      img: "/images/25.svg",
      heading: "Planning",
    },
    {
      img: "/images/26.svg",
      heading: "Creation",
    },
    {
      img: "/images/27.svg",
      heading: "Integration",
    },
    {
      img: "/images/28.svg",
      heading: "Support",
    },
  ];
  return (
    <section
      style={{ background: "linear-gradient(118deg, black, rgb(49 70 111))" }}
    >
      <div className="py-14 container mx-auto xl:px-24 lg:px-16 px-5 ">
        <Heading addClass="text-white md:text-center text-left">
          Our Methodology
        </Heading>
        <p className="md:text-center md:w-3/4 w-full text-left mx-auto mb-10 text-white">
          The team of professionals at Spyad Agency is a dynamic mix of
          visionary strategists, tech-savvy developers, creative designers, and
          data-driven analysts, all united by a love for marketing and web
          development innovation and quality.
        </p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 lg:w-7/12 w-full grid grid-cols-2 md:px-4 px-0 mt-6 md:mt-0 mb-4 md:mb-0 text-end gap-4">
            {ourProcess.map((process, i) => (
              <>
                <div
                  key={i}
                  className="group hover:bg-gradient-to-r from-gray-800 to-blue-900 box-shadow p-6 bg-white border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
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
          <div className="md:w-1/2 lg:w-5/12 md:px-4 px-0">
            <h3 className="text-2xl font-semibold text-white mb-4">
              How We Help!
            </h3>
            <p className="text-gray-300 mb-2">
              The team of professionals at Spyad Agency is a dynamic mix of
              visionary strategists, tech-savvy developers, creative designers,
              and data-driven analysts, all united by a love for marketing and
              web development innovation and quality.
            </p>
            <p className="text-gray-300 mb-6">
              Each member brings a distinct set of talents and experiences to
              the table, resulting in a creative and knowledgeable powerhouse.
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
