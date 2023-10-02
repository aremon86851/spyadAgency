import React, { useState } from "react";

const FooterMenuAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="md:hidden block my-6">
      <div className="accordion ">
        {items?.map((item, index) => (
          <div
            className="accordion-item border-b-2 border-gray-400"
            key={item.id}
          >
            <div
              className={`accordion-title text-white font-semibold p-2  ${
                item.id === activeIndex ? "active" : ""
              }`}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </div>
            {item.id === activeIndex && (
              <div className="accordion-content p-2">
                <ul className="text-gray-300 dark:text-gray-400 font-medium">
                  {item.content.map((menu) => (
                    <>
                      {typeof menu === "object" && (
                        <>
                          <li className="mb-4">
                            <a
                              href={`/services/${menu.href}`}
                              className="hover:underline"
                            >
                              {menu.label}
                            </a>
                          </li>
                        </>
                      )}
                      {typeof menu !== "object" && (
                        <>
                          <li className="mb-4">{menu}</li>
                        </>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterMenuAccordion;
