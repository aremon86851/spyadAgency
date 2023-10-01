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
      <div className="container py-16 px-24">
        <Heading>Frequently Ask Questions</Heading>
        <p className={`w-2/4 -mt-4 text-base font-semibold mb-10`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, eum
          placeat. Incidunt vel necessitatibus minus iure a fugit autem
          aspernatur.
        </p>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className="accordion ">
              {items?.slice(0, faqShowOnLeftSide)?.map((item, index) => (
                <div
                  className="accordion-item border-b-2 border-gray-400"
                  key={item.id}
                >
                  <div
                    className={`accordion-title font-semibold p-2  ${
                      item.id === activeIndex ? "active" : ""
                    }`}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.title}
                  </div>
                  {item.id === activeIndex && (
                    <div className="accordion-content p-2">{item.content}</div>
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
                      className={`accordion-title font-semibold p-2  ${
                        item.id === activeIndex ? "active" : ""
                      }`}
                      onClick={() => handleClick(item.id)}
                    >
                      {item.title}
                    </div>
                    {item.id === activeIndex && (
                      <div className="accordion-content p-2">
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
