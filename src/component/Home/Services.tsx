import React from "react";
import { FaCode, FaLaptop, FaRocket } from "react-icons/fa";
import Heading from "../SharedComponent/Heading";
const Services = () => {
  const tickIcon = (
    <>
      <svg
        className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    </>
  );
  const services = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "Web Development",
    },
    {
      icon: <FaLaptop className="text-3xl text-purple-500" />,
      title: "App Development",
    },
    {
      icon: <FaRocket className="text-3xl text-green-500" />,
      title: "Digital Marketing",
    },
  ];

  return (
    <section className="py-14 bg-gray-100 mx-auto">
      <div className="container mx-auto px-24">
        <Heading>Our Services</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white shadow-xl p-8 transition-transform hover:scale-105"
            >
              <div className="bg-white rounded-full p-4 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul role="list" className="space-y-5 mt-0 mb-7">
                <li className="flex space-x-3 items-center">
                  {tickIcon}
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    2 team members
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  {tickIcon}
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    2 team members
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
