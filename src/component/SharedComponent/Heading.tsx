import React from "react";

const Heading = ({ children, addClass = "" }) => {
  return (
    <h2
      className={`md:text-4xl text-3xl font-semibold md:mb-8 mb-6 ${addClass}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
