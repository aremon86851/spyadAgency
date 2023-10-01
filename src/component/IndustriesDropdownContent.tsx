import React from "react";

const IndustriesDropdownContent = () => {
  return (
    <div className="dropdown-content">
      <div>
        <div className="inside-dropdown-content px-24  container mx-auto">
          <h2 className="font-bold text-2xl mb-7 text-blue-600">
            Our Expertise Industry
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <ul className="text-gray-500 list-none list-inside">
                <li className="mb-4 text-lg font-semibold text-black">
                  Web development
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  Wordpress Expert
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  Shopify Expert
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  WooCommerce Expert
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 list-none list-inside">
                <li className="mb-4 text-lg font-semibold text-black">
                  Web development
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  Wordpress Expert
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  Shopify Expert
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  WooCommerce Expert
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 list-none list-inside">
                <li className="mb-4 text-lg font-semibold text-black">
                  Social media marketing
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  Graphics design
                </li>
              </ul>
            </div>
            <div>
              <a
                href="#"
                className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-multiply dark:hover:bg-blend-darken  justify-center items-start flex-col h-full last-col-drpdwn"
                style={{
                  backgroundImage: "url(/images/dashboard.png)",
                }}
              >
                <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
                  If you interest to know more about our Spyad Team
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                >
                  Know more
                  <svg
                    className="w-3 h-3 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesDropdownContent;
