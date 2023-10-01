import Link from "next/link";
import React from "react";

const DropdownContent = () => {
  return (
    <div className="dropdown-content">
      <div>
        <div className="inside-dropdown-content px-24  container mx-auto">
          <h2 className="font-bold text-2xl mb-7 text-blue-600">
            Our Services
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nobis impedit illum, dolores sed sint iure suscipit officia
                voluptate nesciunt unde quo atque, incidunt sunt soluta
                consequatur accusamus consequuntur amet.
              </p>
              {/* <button
                type="button"
                className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Explore more about us
              </button> */}
            </div>
            <div>
              <ul className="text-gray-500 list-none list-inside">
                <li className="mb-4 text-lg font-semibold text-black">
                  <Link className="p-0" href="/services/web-development">
                    Web development
                  </Link>
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  <Link className="p-0" href="/services/wordpress-expert">
                    Wordpress Expert
                  </Link>
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  <Link className="p-0" href="/services/shopify-expert">
                    Shopify Expert
                  </Link>
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  <Link className="p-0" href="/services/woocommerce-expert">
                    WooCommerce Expert
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 list-none list-inside">
                <li className="mb-4 text-lg font-semibold text-black">
                  <Link className="p-0" href="/services/social-media-marketing">
                    Social media marketing
                  </Link>
                </li>
                <li className="mb-4 text-lg font-semibold text-black">
                  <Link className="p-0" href="/services/graphics-design">
                    Graphics design
                  </Link>
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

export default DropdownContent;
