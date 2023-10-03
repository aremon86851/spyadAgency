import React from "react";
import Heading from "../SharedComponent/Heading";

const AboutSpyde = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-14  xl:px-24 lg:px-16 px-5">
        <Heading addClass="text-left">About Our Team</Heading>
        <div className="md:grid grid-cols-2 flex flex-col-reverse  md:gap-10 gap-4">
          <div>
            <h3 className="font-semibold text-2xl md:mb-8 mb-2">Spyde Team</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              mollitia rem voluptatibus deleniti! Rem ex iure ipsam pariatur
              culpa, doloribus modi voluptates, consectetur sit, maiores officia
              est libero iste! Cumque!
            </p>
          </div>
          <div>
            <img src="/images/whoWeAre.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSpyde;
