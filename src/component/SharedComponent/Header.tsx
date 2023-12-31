/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DropdownContent from "./DropdownContent";
import IndustriesDropdownContent from "../IndustriesDropdownContent";
import Link from "next/link";
import MobileDropdown from "./MobileDropdown";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
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
  const industries = [
    "Health",
    "Ecommerce",
    "Business",
    "IT Consult",
    "Civilization",
    "Ecommerce",
    "Business",
  ];
  const servicesMenu = [
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
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-50 container web-header">
      <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto py-0 xl:px-24 lg:px-16 px-5">
          <a href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              className="h-8 mr-3 spyder-logo"
              alt="Flowbite Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
              Spyad
            </span> */}
          </a>
          <div className="flex md:d-none">
            {/* <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button> */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="flex gap-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)}
                >
                  Services
                  <img src="/icon/dropdown.svg" alt="icon" className="w-6" />
                </a>
                <DropdownContent />
                <div className={isServiceMenuOpen ? "block" : "hidden"}>
                  <MobileDropdown menus={servicesMenu} />
                </div>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="flex gap-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsIndustriesMenuOpen(!isIndustriesMenuOpen)}
                >
                  Industries
                  <img src="/icon/dropdown.svg" alt="icon" className="w-6" />
                </a>
                <IndustriesDropdownContent />
                <div className={isIndustriesMenuOpen ? "block" : "hidden"}>
                  <MobileDropdown menus={industries} />
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
