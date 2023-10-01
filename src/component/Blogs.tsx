import React from "react";
import Heading from "./SharedComponent/Heading";

const Blogs = () => {
  return (
    <section className="bg-gray-100">
      <div className=" container mx-auto px-24 py-14">
        <Heading addClass="text-center">Latest Blogs</Heading>
        <div className="grid grid-cols-3 gap-10">
          {[1, 2, 3].map((num) => (
            <>
              <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
