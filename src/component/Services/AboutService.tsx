import React from "react";
import Heading from "../SharedComponent/Heading";
import Image from "next/image";

const AboutService = () => {
  return (
    <section className="can-we-do">
      <div className="py-14 container mx-auto px-24">
        <Heading addClass="text-white text-left">About Service</Heading>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-0 mt-6 md:mt-0 text-end flex justify-start">
            <Image
              src="/images/whoWeAre.jpg"
              alt="Image by rawpixel.com on Freepik"
              className="rounded-md"
              width="592"
              height="385"
            />
          </div>
          <div className="md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold text-white mb-3">Service</h3>
            <p className="text-gray-300 mb-6">
              At XYZ Company, we are committed to providing innovative solutions
              that make a positive impact on our clients and the world. Our
              mission is to unlock potential.
            </p>
            <p className="text-gray-300 mb-6">
              At XYZ Company, we are committed to providing innovative solutions
              that make a positive impact on our clients and the world. Our
              mission is to unlock potential.
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

export default AboutService;
