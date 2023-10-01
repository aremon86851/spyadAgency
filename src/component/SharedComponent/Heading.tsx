import React from "react";

const Heading = ({ children, addClass = "" }) => {
  return (
    <h2 className={`text-4xl font-semibold mb-8 ${addClass}`}>{children}</h2>
  );
};

export default Heading;
