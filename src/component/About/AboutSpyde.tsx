import React from "react";
import Heading from "../SharedComponent/Heading";

const AboutSpyde = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-14  xl:px-24 lg:px-16 px-5">
        <Heading addClass="text-left text-black">About Our Team</Heading>
        <div className="md:grid grid-cols-2 flex flex-col-reverse  md:gap-10 gap-4">
          <div>
            <h3 className="font-semibold text-2xl md:mb-8 mb-2 text-black">
              Spyde Team
            </h3>
            <p className="text-black">
              The team of professionals at Spyad Agency is a dynamic mix of
              visionary strategists, tech-savvy developers, creative designers,
              and data-driven analysts, all united by a love for marketing and
              web development innovation and quality.
            </p>
            <p className="text-black mt-2">
              Each member brings a distinct set of talents and experiences to
              the table, resulting in a creative and knowledgeable powerhouse.
            </p>
            <p className="text-black mt-2">
              Our team collaborates seamlessly, working tirelessly to redefine
              digital experiences, from Alice's strategic marketing prowess to
              David's technical magic in crafting immersive web designs,
              Sophie's data-driven insights, Michael's coding finesse, Olivia's
              creative touch, and Simon's optimization strategies. world
            </p>
            <p className="text-black mt-2">
              We're devoted to exceeding your expectations by converting your
              brand's digital presence into an effective and results-driven
              force in the online
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
