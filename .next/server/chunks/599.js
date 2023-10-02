"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 8706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout_Main)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/component/SharedComponent/FooterMenuAccordion.tsx


const FooterMenuAccordion = ({ items })=>{
    const [activeIndex, setActiveIndex] = (0,external_react_.useState)(1);
    const handleClick = (index)=>{
        setActiveIndex(index === activeIndex ? null : index);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "md:hidden block my-6",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "accordion ",
            children: items?.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "accordion-item border-b-2 border-gray-400",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `accordion-title text-white font-semibold p-2  ${item.id === activeIndex ? "active" : ""}`,
                            onClick: ()=>handleClick(item.id),
                            children: item.title
                        }),
                        item.id === activeIndex && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "accordion-content p-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "text-gray-300 dark:text-gray-400 font-medium",
                                children: item.content.map((menu)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            typeof menu === "object" && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: `/services/${menu.href}`,
                                                        className: "hover:underline",
                                                        children: menu.label
                                                    })
                                                })
                                            }),
                                            typeof menu !== "object" && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "mb-4",
                                                    children: menu
                                                })
                                            })
                                        ]
                                    }))
                            })
                        })
                    ]
                }, item.id))
        })
    });
};
/* harmony default export */ const SharedComponent_FooterMenuAccordion = (FooterMenuAccordion);

;// CONCATENATED MODULE: ./src/component/SharedComponent/Footer.tsx



const footerMenu = [
    {
        id: 1,
        title: "Services",
        content: [
            {
                label: "Web development",
                href: "web-development"
            },
            {
                label: "Wordpress expert",
                href: "wordpress-expert"
            },
            {
                label: "Shopify expert",
                href: "shopify-expert"
            },
            {
                label: "WooCommerce  expert",
                href: "wordpress-expert"
            },
            {
                label: "Social media marketing",
                href: "social-media-marketing"
            },
            {
                label: "Graphics design",
                href: "graphics-design"
            }
        ]
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
            "Business"
        ]
    }
];
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "can-we-do dark:bg-gray-900 md:pt-10 pb-3",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto w-full container py-4  xl:px-24 lg:px-16 px-5  lg:py-8 lg:pb-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid md:grid-cols-2 grid-cols-1 items-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mb-6 md:mb-0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                href: "https://flowbite.com/",
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "https://flowbite.com/docs/images/logo.svg",
                                        className: "h-8 mr-3",
                                        alt: "FlowBite Logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "self-center text-2xl font-semibold whitespace-nowrap text-white",
                                        children: "Spyad"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: " rounded-lg subscription-area",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                className: "subscription-area-form",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "subscription-area-title text-white",
                                        children: "Subscribe to our newsletter."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                placeholder: "Enter your email",
                                                type: "email",
                                                name: "email",
                                                id: "email-address"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "submit",
                                                children: "Subscribe"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mt-20 mb-16 md:block hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "mb-6 text-sm font-semibold uppercase text-white",
                                        children: "Services"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "text-gray-300 dark:text-gray-400 font-medium",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://flowbite.com/",
                                                    className: "hover:underline",
                                                    children: "Web development"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://flowbite.com/",
                                                    className: "hover:underline",
                                                    children: "Wordpress expert"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://flowbite.com/",
                                                    className: "hover:underline",
                                                    children: "Shopify expert"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://flowbite.com/",
                                                    className: "hover:underline",
                                                    children: "Wocommerce expert"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-gray-300 mt-11 dark:text-gray-400 font-medium",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://flowbite.com/",
                                                className: "hover:underline",
                                                children: "Social media marketing"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://flowbite.com/",
                                                className: "hover:underline",
                                                children: "Graphics design"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "mb-6 text-sm font-semibold uppercase text-white",
                                        children: "Industries"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "text-gray-300 dark:text-gray-400 font-medium",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "",
                                                    className: "hover:underline",
                                                    children: "health"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "",
                                                    className: "hover:underline",
                                                    children: "It agency"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "",
                                                    className: "hover:underline",
                                                    children: "Ecommerce"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "",
                                                    className: "hover:underline",
                                                    children: "Product"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "",
                                                    className: "hover:underline",
                                                    children: "Agency"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-gray-300 mt-11 dark:text-gray-400 font-medium",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://flowbite.com/",
                                                className: "hover:underline",
                                                children: "Social media"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://flowbite.com/",
                                                className: "hover:underline",
                                                children: "Sales"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(SharedComponent_FooterMenuAccordion, {
                    items: footerMenu
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "md:hidden flex justify-center mb-6",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "text-gray-300 dark:text-gray-400 font-medium flex gap-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://flowbite.com/",
                                    className: "hover:underline",
                                    children: "Privacy & policy"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://flowbite.com/",
                                    className: "hover:underline",
                                    children: "Terms & condition"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("hr", {
                    className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-8 mb-4"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex md:justify-between justify-center items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                                children: [
                                    "\xa9 2023",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "https://flowbite.com/",
                                        className: "hover:underline",
                                        children: "Spyde"
                                    }),
                                    ". All Rights Reserved."
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "md:block hidden",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "text-gray-300 dark:text-gray-400 font-medium flex gap-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "https://flowbite.com/",
                                            className: "hover:underline",
                                            children: "Privacy & policy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "https://flowbite.com/",
                                            className: "hover:underline",
                                            children: "Terms & condition"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const SharedComponent_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/component/SharedComponent/DropdownContent.tsx



const DropdownContent = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "dropdown-content",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "inside-dropdown-content xl:px-24 lg:px-16 px-5 container mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "font-bold text-2xl mb-7 text-blue-600",
                        children: "Our Services"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid xl:grid-cols-4 grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis impedit illum, dolores sed sint iure suscipit officia voluptate nesciunt unde quo atque, incidunt sunt soluta consequatur accusamus consequuntur amet."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-gray-500 list-none list-inside",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "p-0",
                                                href: "/services/web-development",
                                                children: "Web development"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "p-0",
                                                href: "/services/wordpress-expert",
                                                children: "Wordpress Expert"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "p-0",
                                                href: "/services/shopify-expert",
                                                children: "Shopify Expert"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "p-0",
                                                href: "/services/woocommerce-expert",
                                                children: "WooCommerce Expert"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-gray-500 list-none list-inside",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "p-0",
                                                href: "/services/social-media-marketing",
                                                children: "Social media marketing"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "p-0",
                                                href: "/services/graphics-design",
                                                children: "Graphics design"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "xl:block hidden",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "#",
                                    className: "p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-multiply dark:hover:bg-blend-darken  justify-center items-start flex-col h-full last-col-drpdwn",
                                    style: {
                                        backgroundImage: "url(/images/dashboard.png)"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white",
                                            children: "If you interest to know more about our Spyad Team"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            type: "button",
                                            className: "inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700",
                                            children: [
                                                "Know more",
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    className: "w-3 h-3 ml-2",
                                                    "aria-hidden": "true",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 14 10",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M1 5h12m0 0L9 1m4 4L9 9"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const SharedComponent_DropdownContent = (DropdownContent);

;// CONCATENATED MODULE: ./src/component/IndustriesDropdownContent.tsx


const IndustriesDropdownContent = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "dropdown-content md:block hidden",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "inside-dropdown-content xl:px-24 lg:px-16 px-5 container mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "font-bold text-2xl mb-7 text-blue-600",
                        children: "Our Expertise Industry"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid xl:grid-cols-4 grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-gray-500 list-none list-inside",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "Web development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "Wordpress Expert"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "Shopify Expert"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "WooCommerce Expert"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-gray-500 list-none list-inside",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "Web development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "Wordpress Expert"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "Shopify Expert"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "WooCommerce Expert"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-gray-500 list-none list-inside",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "Social media marketing"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "mb-4 text-lg font-semibold text-black",
                                            children: "Graphics design"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "xl:block  hidden",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "#",
                                    className: "p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-multiply dark:hover:bg-blend-darken  justify-center items-start flex-col h-full last-col-drpdwn",
                                    style: {
                                        backgroundImage: "url(/images/dashboard.png)"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white",
                                            children: "If you interest to know more about our Spyad Team"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            type: "button",
                                            className: "inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700",
                                            children: [
                                                "Know more",
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    className: "w-3 h-3 ml-2",
                                                    "aria-hidden": "true",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 14 10",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M1 5h12m0 0L9 1m4 4L9 9"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_IndustriesDropdownContent = (IndustriesDropdownContent);

;// CONCATENATED MODULE: ./src/component/SharedComponent/MobileDropdown.tsx



const MobileDropdown = ({ menus })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "md:hidden block",
        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
            className: "w-full space-y-1 text-center text-gray-500 list-inside dark:text-gray-400",
            children: menus?.map((menu, i)=>/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        className: "items-center text-white py-1",
                        children: [
                            typeof menu === "object" && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "p-0",
                                    href: `/services/${menu.href}`,
                                    children: menu.label
                                })
                            }),
                            typeof menu !== "object" && menu
                        ]
                    }, i)
                }))
        })
    });
};
/* harmony default export */ const SharedComponent_MobileDropdown = (MobileDropdown);

;// CONCATENATED MODULE: ./src/component/SharedComponent/Header.tsx
/* eslint-disable @next/next/no-html-link-for-pages */ 





const Header = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,external_react_.useState)(false);
    const [isServiceMenuOpen, setIsServiceMenuOpen] = (0,external_react_.useState)(false);
    const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = (0,external_react_.useState)(false);
    const navigation = [
        {
            href: "/",
            name: "Home"
        },
        {
            href: "/",
            name: "Contacts"
        },
        {
            href: "/",
            name: "About us"
        },
        {
            href: "/",
            name: "Blogs"
        }
    ];
    const industries = [
        "Health",
        "Ecommerce",
        "Business",
        "IT Consult",
        "Civilization",
        "Ecommerce",
        "Business"
    ];
    const servicesMenu = [
        {
            label: "Web development",
            href: "web-development"
        },
        {
            label: "Wordpress expert",
            href: "wordpress-expert"
        },
        {
            label: "Shopify expert",
            href: "shopify-expert"
        },
        {
            label: "WooCommerce  expert",
            href: "wordpress-expert"
        },
        {
            label: "Social media marketing",
            href: "social-media-marketing"
        },
        {
            label: "Graphics design",
            href: "graphics-design"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "absolute inset-x-0 top-0 z-50 container web-header",
        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
            className: "can-we-do dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container flex flex-wrap items-center justify-between mx-auto py-4 xl:px-24 lg:px-16 px-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        href: "/",
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "https://flowbite.com/docs/images/logo.svg",
                                className: "h-8 mr-3",
                                alt: "Flowbite Logo"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white",
                                children: "Spyad"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex md:d-none",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            "data-collapse-toggle": "navbar-sticky",
                            type: "button",
                            className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                            "aria-controls": "navbar-sticky",
                            "aria-expanded": "false",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "sr-only",
                                    children: "Open main menu"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    className: "w-5 h-5",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "#fff",
                                    viewBox: "0 0 17 14",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        stroke: "currentColor",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M1 1h15M1 7h15M1 13h15"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? "block" : "hidden"}`,
                        id: "navbar-sticky",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        className: "block py-2 pl-3 pr-4 text-white rounded md:p-0 ",
                                        "aria-current": "page",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/about",
                                        className: "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            className: "flex gap-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                                            onClick: ()=>setIsServiceMenuOpen(!isServiceMenuOpen),
                                            children: [
                                                "Services",
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/icon/dropdown.svg",
                                                    alt: "icon",
                                                    className: "w-6"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(SharedComponent_DropdownContent, {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: isServiceMenuOpen ? "block" : "hidden",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(SharedComponent_MobileDropdown, {
                                                menus: servicesMenu
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            className: "flex gap-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                                            onClick: ()=>setIsIndustriesMenuOpen(!isIndustriesMenuOpen),
                                            children: [
                                                "Industries",
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/icon/dropdown.svg",
                                                    alt: "icon",
                                                    className: "w-6"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(component_IndustriesDropdownContent, {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: isIndustriesMenuOpen ? "block" : "hidden",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(SharedComponent_MobileDropdown, {
                                                menus: industries
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        className: "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const SharedComponent_Header = (Header);

;// CONCATENATED MODULE: ./src/Layout/Main.tsx




const Main = ({ children })=>{
    const [mouseHover, setMouseHover] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto relative ",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(SharedComponent_Header, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    "data-dial-init": true,
                    className: "fixed right-6 bottom-6 group z-50",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            id: "speed-dial-menu-default",
                            className: `flex-col items-center mb-4 space-y-2 ${mouseHover ? "flex" : "hidden"}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    type: "button",
                                    "data-tooltip-target": "tooltip-gmail",
                                    "data-tooltip-placement": "left",
                                    className: "flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900  rounded-full    dark:hover:text-white dark:text-gray-400   dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "w-14 h-14",
                                            src: "/icon/gmail.svg",
                                            alt: "gmail"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sr-only",
                                            children: "Gmail"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    id: "tooltip-gmail",
                                    role: "tooltip",
                                    className: "absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg  opacity-0 tooltip ",
                                    children: [
                                        "Gmail",
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tooltip-arrow",
                                            "data-popper-arrow": true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    type: "button",
                                    "data-tooltip-target": "tooltip-call",
                                    "data-tooltip-placement": "left",
                                    className: "flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900  rounded-full    dark:hover:text-white dark:text-gray-400   dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "w-14 h-14",
                                            src: "/icon/call.svg",
                                            alt: "call"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sr-only",
                                            children: "Call"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    id: "tooltip-Call",
                                    role: "tooltip",
                                    className: "absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",
                                    children: [
                                        "Call",
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tooltip-arrow",
                                            "data-popper-arrow": true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    type: "button",
                                    "data-tooltip-target": "tooltip-whatsapp",
                                    "data-tooltip-placement": "left",
                                    className: "flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 rounded-full   shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "w-14 h-14",
                                            src: "/icon/whatsapp.svg",
                                            alt: "whatsapp"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sr-only",
                                            children: "Whatsapp"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    id: "tooltip-whatsapp",
                                    role: "tooltip",
                                    className: "absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",
                                    children: [
                                        "Download",
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tooltip-arrow",
                                            "data-popper-arrow": true
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            type: "button",
                            "data-dial-toggle": "speed-dial-menu-default",
                            "aria-controls": "speed-dial-menu-default",
                            "aria-expanded": "false",
                            onClick: ()=>setMouseHover(!mouseHover),
                            className: "flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    className: `w-5 h-5 transition-transform ${mouseHover ? "rotate-45 block" : "hidden"}`,
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 18 18",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        stroke: "currentColor",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M9 1v16M1 9h16"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    className: `w-6 h-6 ${mouseHover ? "hidden" : "block"}`,
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "currentColor",
                                    viewBox: "0 0 16 3",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        d: "M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "sr-only",
                                    children: "Open actions menu"
                                })
                            ]
                        })
                    ]
                }),
                children,
                /*#__PURE__*/ jsx_runtime.jsx(SharedComponent_Footer, {})
            ]
        })
    });
};
/* harmony default export */ const Layout_Main = (Main);


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SharedComponent_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8921);



const Blogs = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "bg-gray-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " container mx-auto xl:px-24 lg:px-16 px-5  py-14",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SharedComponent_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    addClass: "text-center",
                    children: "Latest Blogs"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10",
                    children: [
                        1,
                        2,
                        3
                    ].map((num)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "rounded-t-lg",
                                            src: "https://flowbite.com/docs/images/blog/image-1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                                    children: "Noteworthy technology acquisitions 2021"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                                children: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);


/***/ }),

/***/ 8921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Heading = ({ children, addClass = "" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: `md:text-4xl text-3xl font-semibold md:mb-8 mb-6 ${addClass}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ })

};
;