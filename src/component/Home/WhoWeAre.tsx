import Image from "next/image";
import React from "react";
import Heading from "../SharedComponent/Heading";

const WhoWeAre = () => {
  return (
    <section className="who-we-are-bg">
      <div className="py-14 container mx-auto xl:px-24 lg:px-16 px-5 ">
        {/* <Heading addClass="text-white">The Spyad-Agency</Heading>
        <p className="text-center w-3/4 mx-auto mb-10 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quas
          ea accusamus, atque obcaecati impedit laboriosam nemo aliquam id qui
          deserunt dolorum voluptatem sequi optio voluptatum natus ullam?
          Cupiditate, quis.
        </p> */}
        <div className="md:grid grid-cols-6 gap-10 items-center mb-10 hidden ">
          <div className="col-span-3">
            <h3 className="text-2xl font-bold text-white w-3/4">
              Spyad assists you in building your company's digital future and a
              substantial brand value in your local or online market.
            </h3>
          </div>
          <div className="col-span-3">
            <p className="text-white">
              Although the business is yours, it is our obligation to grow sales
              and monthly revenue. We will help you create your own online as
              well as offline market. With our help, you may advertise your
              company and products to offline and online audiences.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Importance Of Marketing
            </h3>
            <p className="text-gray-300 mb-6">
              Reaching the correct audience is an important part of marketing;
              it goes beyond simply exposing your goods or services to the
              globe. A focus on your target market helps you deliver your
              message to individuals who will be most likely to become valuable
              clients.
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
          <div className="md:w-1/2 px-4 mt-6 md:mt-0 text-end flex justify-end md:mb-0 mb-3">
            <Image
              src="/images/whoWeAre.jpg"
              alt="Image by rawpixel.com on Freepik"
              className="rounded-md"
              width="592"
              height="385"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
