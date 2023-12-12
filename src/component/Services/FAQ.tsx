import React, { useState } from "react";
import Heading from "../SharedComponent/Heading";

const FAQ = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const lengthOfData = items?.length;
  const faqShowOnLeftSide = Math.ceil(items.length / 2);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="">
      <div className="container py-16  xl:px-24 lg:px-16 px-5 mx-auto">
        <Heading addClass="text-black">Frequently Ask Questions</Heading>
        <p
          className={`md:w-2/4 w-full -mt-4 text-black text-base font-semibold md:mb-10 mb-4`}
        >
          If you need solved some of your question then check it
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-0">
          <div>
            <div className="accordion ">
              {items?.slice(0, faqShowOnLeftSide)?.map((item, index) => (
                <div
                  className="accordion-item border-b-2 border-gray-400"
                  key={item.id}
                >
                  <div
                    className={`accordion-title text-black font-semibold p-2  ${
                      item.id === activeIndex ? "active" : ""
                    }`}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.title}
                  </div>
                  {item.id === activeIndex && (
                    <div className="accordion-content p-2 text-gray-500">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="accordion ">
              {items
                ?.slice(faqShowOnLeftSide, lengthOfData)
                ?.map((item, index) => (
                  <div
                    className="accordion-item border-b-2 border-gray-400"
                    key={item.id}
                  >
                    <div
                      className={`accordion-title text-black font-semibold p-2  ${
                        item.id === activeIndex ? "active" : ""
                      }`}
                      onClick={() => handleClick(item.id)}
                    >
                      {item.title}
                    </div>
                    {item.id === activeIndex && (
                      <div className="accordion-content text-gray-500 p-2">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
