import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Main from "@/Layout/Main";
import ReactTypingEffect from "react-typing-effect";
import HeroCarrousel from "./HeroCarrousel";
const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/",
      name: "Contacts",
    },
    {
      href: "/",
      name: "About us",
    },
    {
      href: "/",
      name: "Blogs",
    },
  ];
  const typingText = [
    "Social Media Marketing",
    "Web Development",
    "Data Analytic",
    "Dropshipping Marketing",
    "Shopify Experts",
    "Theme Customization",
    "Graphics Design",
    "SEO Experts",
  ];
  return (
    <section className="mx-auto bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="container xl:px-24 lg:px-16 px-9 mx-auto  text-center py-24 pt-40 lg:pt-60 lg:pb-36">
        <div className="md:grid grid-cols-2 gap-5 flex flex-col-reverse items-center">
          <div>
            <h3 className="text-left text-blue-500 mb-2 font-semibold md:text-3xl text-2xl text-primary">
              <ReactTypingEffect
                text={typingText}
                eraseDelay={600}
                eraseSpeed={100}
                typingDelay={200}
              />
            </h3>
            <h1 className="mb-4 xl:text-5xl text-2xl text-left font-extrabold tracking-tight leading-10 text-white md:text-3xl">
              Your company's digital future already exists here.
            </h1>
            <p className="text-left mb-8 text-lg font-normal text-gray-300 lg:text-xl ">
              By digitizing your business and implementing cutting-edge
              technology, Spyad has been working to boost your monthly revenue.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Contact Us
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
              <a
                href="#"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="md:block hidden">
            <HeroCarrousel />
          </div>
          <div className="md:hidden block">
            <img src="/images/hero4.jpg" alt="Hero img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
