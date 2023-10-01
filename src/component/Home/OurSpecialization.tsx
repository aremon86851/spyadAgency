import React from "react";
import Heading from "../SharedComponent/Heading";

const OurSpecialization = ({ data, from = "" }) => {
  return (
    <section className={`${from ? "can-we-do" : ""}`}>
      <div className="container mx-auto px-24 py-14">
        <Heading addClass={`text-left ${from ? "text-white" : "text-black"}`}>
          {data?.heading}
        </Heading>
        <p
          className={`w-2/4 -mt-4 text-base font-semibold  ${
            from ? "text-white" : "text-black"
          }`}
        >
          {data?.detail}
        </p>
        <div className="grid grid-cols-4 gap-8 mt-16 ">
          {data?.specialization?.map((special) => (
            <>
              <div
                className={`text-center p-6 h-72 flex items-center justify-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
                  from ? "" : "bg-gradient-to-r from-black to-blue-900"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img
                    className="w-20 h-20 p-1 rounded-full ring-2 ring-blue-300 dark:ring-gray-500"
                    src={special?.icon ? special?.icon : "/images/avatar.png"}
                    alt="Bordered avatar"
                  />
                </div>
                <a href="#">
                  <h5
                    className={`mb-2 text-2xl font-semibold tracking-tight ${
                      from ? "text-black" : "text-white"
                    }`}
                  >
                    {special.name}
                  </h5>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialization;
