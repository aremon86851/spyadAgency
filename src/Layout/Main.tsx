import Footer from "@/component/SharedComponent/Footer";
import Header from "@/component/SharedComponent/Header";
import Head from "next/head";
import React, { useState } from "react";

const Main = ({ children }) => {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <div className="bg-white">
      <div className="mx-auto relative ">
        <Header />

        <div data-dial-init className="fixed right-6 bottom-6 group z-50">
          <div
            id="speed-dial-menu-default"
            className={`flex-col items-center mb-4 space-y-2 ${
              mouseHover ? "flex" : "hidden"
            }`}
          >
            <button
              type="button"
              data-tooltip-target="tooltip-gmail"
              data-tooltip-placement="left"
              className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900  rounded-full    dark:hover:text-white dark:text-gray-400   dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <img className="w-14 h-14" src="/icon/gmail.svg" alt="gmail" />
              <span className="sr-only">Gmail</span>
            </button>
            <div
              id="tooltip-gmail"
              role="tooltip"
              className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg  opacity-0 tooltip "
            >
              Gmail
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              type="button"
              data-tooltip-target="tooltip-call"
              data-tooltip-placement="left"
              className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900  rounded-full    dark:hover:text-white dark:text-gray-400   dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <img className="w-14 h-14" src="/icon/call.svg" alt="call" />
              <span className="sr-only">Call</span>
            </button>
            <div
              id="tooltip-Call"
              role="tooltip"
              className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Call
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              type="button"
              data-tooltip-target="tooltip-whatsapp"
              data-tooltip-placement="left"
              className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 rounded-full   shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <img
                className="w-14 h-14"
                src="/icon/whatsapp.svg"
                alt="whatsapp"
              />
              <span className="sr-only">Whatsapp</span>
            </button>
            <div
              id="tooltip-whatsapp"
              role="tooltip"
              className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Download
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <button
            type="button"
            data-dial-toggle="speed-dial-menu-default"
            aria-controls="speed-dial-menu-default"
            aria-expanded="false"
            onClick={() => setMouseHover(!mouseHover)}
            className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              className={`w-5 h-5 transition-transform ${
                mouseHover ? "rotate-45 block" : "hidden"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${mouseHover ? "hidden" : "block"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Open actions menu</span>
          </button>
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
