import React from "react";
import Heading from "../SharedComponent/Heading";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
const WhyWorkWithUs = () => {
  const workWithUs = [
    {
      img: "/images/expert.png",
      heading: "Expertise & experience",
    },
    {
      img: "/images/partnership.png",
      heading: "Industry-Leading Partnership",
    },
    {
      img: "/images/support.png",
      heading: "End-to-end Support",
    },
  ];
  return (
    <div className="container mx-auto px-24 py-14">
      <Heading>Reasons to Choose Us</Heading>
      <div className="flex justify-between gap-6 px-24 pt-20">
        {workWithUs.map((work, i) => (
          <>
            <div className="text-center">
              <div className="w-full text-center flex justify-center mb-4">
                <Image src={work.img} alt="" height={120} width={120} />
              </div>
              <h5 className="group-hover:text-white mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {work.heading}
              </h5>
            </div>
          </>
        ))}
      </div>
      <div className="text-center mt-28 w-full flex justify-center">
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          About Us <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
