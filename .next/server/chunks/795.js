"use strict";
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 8596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Banner = ({ data })=>{
    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    console.log(data);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "mx-auto bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container px-4 mx-auto max-w-screen-xl text-center py-24 lg:pt-60 lg:pb-36",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-center mb-4 text-4xl font-extrabold tracking-tight leading-7 text-white md:text-5xl",
                        children: data.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-8 text-lg font-normal text-gray-300 lg:text-xl w-full md:w-3/4 mx-auto text-center",
                        children: data.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4",
                        children: data.fillButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: data.fillButton.href,
                                className: "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900",
                                children: [
                                    data.fillButton.label,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "w-3.5 h-3.5 ml-2",
                                        "aria-hidden": "true",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 14 10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            stroke: "currentColor",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M1 5h12m0 0L9 1m4 4L9 9"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 6096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SpydeData = {
    aboutUs: {
        name: "About us",
        description: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
        fillButton: {
            label: "Contact Us",
            href: "#"
        }
    },
    servicesData: [
        {
            name: "Web development",
            processUrl: "web-development",
            description: "Hey my name is spyde agecy its works for  your projects. Hey my name is spyde agecy its works for  your projects.Hey my name is spyde agecy its works for  your projects.",
            fillButton: {
                label: "Get Service",
                href: "#"
            },
            specializationData: {
                heading: "Our Specialization",
                detail: "This specialization makes us unique. And we are so expert and passionate  with our skill and works.",
                specialization: [
                    {
                        name: "Interactive Website",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Responsive Design",
                        details: "Responsive website is important for every website"
                    },
                    {
                        name: "SEO Friendly",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Web Security",
                        details: "We can make any type of interactive website for your business"
                    }
                ]
            },
            techStack: {
                heading: "Tech Stack We Follow",
                detail: "Our team is expart on this tech stack and they have lot of experience about it. and they are learning more of tech stacks.",
                specialization: [
                    {
                        name: "React.js",
                        icon: ""
                    },
                    {
                        name: "Next.js",
                        icon: ""
                    },
                    {
                        name: "JavaScript",
                        icon: ""
                    },
                    {
                        name: "More...",
                        icon: ""
                    }
                ]
            }
        },
        {
            name: "Wordpress Expert",
            processUrl: "wordpress-expert",
            description: "Hey my name is spyde agecy its works for  your projects. Hey my name is spyde agecy its works for  your projects.Hey my name is spyde agecy its works for  your projects.",
            fillButton: {
                label: "Get Service",
                href: "#"
            },
            specializationData: {
                heading: "Our Specialization",
                detail: "This specialization makes us unique. And we are so expert and passionate  with our skill and works.",
                specialization: [
                    {
                        name: "Interactive Website",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Responsive Design",
                        details: "Responsive website is important for every website"
                    },
                    {
                        name: "SEO Friendly",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Web Security",
                        details: "We can make any type of interactive website for your business"
                    }
                ]
            },
            techStack: {
                heading: "Tech Stack We Follow",
                detail: "Our team is expart on this tech stack and they have lot of experience about it. and they are learning more of tech stacks.",
                specialization: [
                    {
                        name: "React.js",
                        icon: ""
                    },
                    {
                        name: "Next.js",
                        icon: ""
                    },
                    {
                        name: "JavaScript",
                        icon: ""
                    },
                    {
                        name: "More...",
                        icon: ""
                    }
                ]
            }
        },
        {
            name: "Shopify Expert",
            processUrl: "shopify-expert",
            description: "Hey my name is spyde agecy its works for  your projects. Hey my name is spyde agecy its works for  your projects.Hey my name is spyde agecy its works for  your projects.",
            fillButton: {
                label: "Get Service",
                href: "#"
            },
            specializationData: {
                heading: "Our Specialization",
                detail: "This specialization makes us unique. And we are so expert and passionate  with our skill and works.",
                specialization: [
                    {
                        name: "Interactive Website",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Responsive Design",
                        details: "Responsive website is important for every website"
                    },
                    {
                        name: "SEO Friendly",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Web Security",
                        details: "We can make any type of interactive website for your business"
                    }
                ]
            },
            techStack: {
                heading: "Tech Stack We Follow",
                detail: "Our team is expart on this tech stack and they have lot of experience about it. and they are learning more of tech stacks.",
                specialization: [
                    {
                        name: "React.js",
                        icon: ""
                    },
                    {
                        name: "Next.js",
                        icon: ""
                    },
                    {
                        name: "JavaScript",
                        icon: ""
                    },
                    {
                        name: "More...",
                        icon: ""
                    }
                ]
            }
        },
        {
            name: "WooCommerce Expert",
            processUrl: "woocommerce-expert",
            description: "Hey my name is spyde agecy its works for  your projects. Hey my name is spyde agecy its works for  your projects.Hey my name is spyde agecy its works for  your projects.",
            fillButton: {
                label: "Get Service",
                href: "#"
            },
            specializationData: {
                heading: "Our Specialization",
                detail: "This specialization makes us unique. And we are so expert and passionate  with our skill and works.",
                specialization: [
                    {
                        name: "Interactive Website",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Responsive Design",
                        details: "Responsive website is important for every website"
                    },
                    {
                        name: "SEO Friendly",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Web Security",
                        details: "We can make any type of interactive website for your business"
                    }
                ]
            },
            techStack: {
                heading: "Tech Stack We Follow",
                detail: "Our team is expart on this tech stack and they have lot of experience about it. and they are learning more of tech stacks.",
                specialization: [
                    {
                        name: "React.js",
                        icon: ""
                    },
                    {
                        name: "Next.js",
                        icon: ""
                    },
                    {
                        name: "JavaScript",
                        icon: ""
                    },
                    {
                        name: "More...",
                        icon: ""
                    }
                ]
            }
        },
        {
            name: "Social media marketing",
            processUrl: "social-media-marketing",
            description: "Hey my name is spyde agecy its works for  your projects. Hey my name is spyde agecy its works for  your projects.Hey my name is spyde agecy its works for  your projects.",
            fillButton: {
                label: "Get Service",
                href: "#"
            },
            specializationData: {
                heading: "Our Specialization",
                detail: "This specialization makes us unique. And we are so expert and passionate  with our skill and works.",
                specialization: [
                    {
                        name: "Interactive Website",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Responsive Design",
                        details: "Responsive website is important for every website"
                    },
                    {
                        name: "SEO Friendly",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Web Security",
                        details: "We can make any type of interactive website for your business"
                    }
                ]
            },
            techStack: {
                heading: "Tech Stack We Follow",
                detail: "Our team is expart on this tech stack and they have lot of experience about it. and they are learning more of tech stacks.",
                specialization: [
                    {
                        name: "React.js",
                        icon: ""
                    },
                    {
                        name: "Next.js",
                        icon: ""
                    },
                    {
                        name: "JavaScript",
                        icon: ""
                    },
                    {
                        name: "More...",
                        icon: ""
                    }
                ]
            }
        },
        {
            name: "Graphics design",
            processUrl: "graphics-design",
            description: "Hey my name is spyde agecy its works for  your projects. Hey my name is spyde agecy its works for  your projects.Hey my name is spyde agecy its works for  your projects.",
            fillButton: {
                label: "Get Service",
                href: "#"
            },
            specializationData: {
                heading: "Our Specialization",
                detail: "This specialization makes us unique. And we are so expert and passionate  with our skill and works.",
                specialization: [
                    {
                        name: "Interactive Website",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Responsive Design",
                        details: "Responsive website is important for every website"
                    },
                    {
                        name: "SEO Friendly",
                        details: "We can make any type of interactive website for your business"
                    },
                    {
                        name: "Web Security",
                        details: "We can make any type of interactive website for your business"
                    }
                ]
            },
            techStack: {
                heading: "Tech Stack We Follow",
                detail: "Our team is expart on this tech stack and they have lot of experience about it. and they are learning more of tech stacks.",
                specialization: [
                    {
                        name: "React.js",
                        icon: ""
                    },
                    {
                        name: "Next.js",
                        icon: ""
                    },
                    {
                        name: "JavaScript",
                        icon: ""
                    },
                    {
                        name: "More...",
                        icon: ""
                    }
                ]
            }
        }
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpydeData);


/***/ })

};
;