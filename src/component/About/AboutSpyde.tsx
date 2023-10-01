import React from "react";
import Heading from "../SharedComponent/Heading";

const AboutSpyde = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-14 px-24">
        <Heading addClass="text-left">About Our Team</Heading>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-2xl mb-8">Spyde Team</h3>
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
