import React from "react";
import FooterMenuAccordion from "./FooterMenuAccordion";

const footerMenu = [
  {
    id: 1,
    title: "Services",
    content: [
      {
        label: "Web development",
        href: "web-development",
      },
      {
        label: "Wordpress expert",
        href: "wordpress-expert",
      },
      {
        label: "Shopify expert",
        href: "shopify-expert",
      },
      {
        label: "WooCommerce  expert",
        href: "wordpress-expert",
      },
      {
        label: "Social media marketing",
        href: "social-media-marketing",
      },
      {
        label: "Graphics design",
        href: "graphics-design",
      },
    ],
  },
  {
    id: 2,
    title: "Industries",
    content: [
      "Health",
      "Ecommerce",
      "Business",
      "IT Consult",
      "Civilization",
      "Ecommerce",
      "Business",
    ],
  },
];
const Footer = () => {
  return (
    <footer className="can-we-do dark:bg-gray-900 md:pt-10 pb-3">
      <div className="mx-auto w-full container py-4  xl:px-24 lg:px-16 px-5  lg:py-8 lg:pb-0">
        <div className="grid md:grid-cols-2 grid-cols-1 items-start">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Spyad
              </span>
            </a>
          </div>
          <div className="rounded-lg subscription-area">
            <form className="subscription-area-form">
              <span className="subscription-area-title text-white">
                Subscribe to our newsletter.
              </span>
              <div>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id="email-address"
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-20 mb-16 md:block hidden">
          <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Services
              </h2>
              <ul className="text-gray-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Web development
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Wordpress expert
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Shopify expert
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Wocommerce expert
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-300 mt-11 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Social media marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Graphics design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Industries
              </h2>
              <ul className="text-gray-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    health
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    It agency
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Ecommerce
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Product
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Agency
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-300 mt-11 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Social media
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FooterMenuAccordion items={footerMenu} />
        <div className="md:hidden flex justify-center mb-6">
          <ul className="text-gray-300 dark:text-gray-400 font-medium flex sm:flex-row flex-col gap-5">
            <li>
              <a href="https://flowbite.com/" className="hover:underline">
                Privacy & policy
              </a>
            </li>
            <li>
              <a href="https://flowbite.com/" className="hover:underline">
                Terms & condition
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-8 mb-4" />
        <div className="flex md:justify-between justify-center items-center">
          <div>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Spyde
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="md:block hidden">
            <ul className="text-gray-300 dark:text-gray-400 font-medium flex gap-5">
              <li>
                <a href="https://flowbite.com/" className="hover:underline">
                  Privacy & policy
                </a>
              </li>
              <li>
                <a href="https://flowbite.com/" className="hover:underline">
                  Terms & condition
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
