import Image from "next/image";
import React from "react";
import Heading from "../SharedComponent/Heading";

const CanWeDo = () => {
  return (
    <section className="can-we-do">
      <div className="py-14 container mx-auto xl:px-24 lg:px-16 px-5 ">
        <Heading addClass="text-white md:text-center text-left">
          The Spyad-Agencys
        </Heading>
        <p className="md:text-center text-left md:w-3/4 w-full mx-auto md:mb-10 mb-4 text-white">
          Spyad Agency is at the forefront of revolutionizing marketing
          strategies, embodying innovation, and fueling brand success. Our team
          of dynamic professionals harnesses the power of market insights,
          cutting-edge technologies, and creative brilliance to craft campaigns
          that leave a lasting impression.
        </p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:px-4 px-0 mt-6 md:mt-0 text-end flex justify-start md:mb-0 mb-4 ">
            <Image
              src="/images/whoWeAre.jpg"
              alt="Image by rawpixel.com on Freepik"
              className="rounded-md"
              width="592"
              height="385"
            />
          </div>
          <div className="md:w-1/2 md:px-4 px-0">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Our Mission
            </h3>
            <p className="text-gray-300 mb-6">
              A marketing agency's main objective is to help companies promote
              their goods and services to their target audience. This calls for
              a complex strategy aimed at building brand recognition,
              encouraging consumer interaction, and eventually raising sales and
              income.
            </p>
            <p className="text-gray-300 mb-6">
              Spyad uses a variety of channels, including social media,
              traditional advertising, digital platforms, and more, to create
              engaging tactics that resonate with the target demographic.
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

export default CanWeDo;
