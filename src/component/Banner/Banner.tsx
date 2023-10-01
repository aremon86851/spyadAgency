import React, { useState } from "react";
const Banner = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log(data);
  return (
    <section className="mx-auto bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="container px-4 mx-auto max-w-screen-xl text-center py-24 lg:pt-60 lg:pb-36">
        <div>
          <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-7 text-white md:text-5xl">
            {data.name}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl w-3/4 mx-auto text-center">
            {data.description}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {data.fillButton && (
              <>
                <a
                  href={data.fillButton.href}
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  {data.fillButton.label}
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
