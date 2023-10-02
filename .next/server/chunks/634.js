"use strict";
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 1634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Testimonial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8921);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2184);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper_modules__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper_modules__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const reviews = [
    {
        title: "On Time Delivery",
        review: "I am absolutely delighted to Work with the seller Digital Marketer Ads Spyad \uD83D\uDC4C\uD83C\uDFFC.They Are professional, deliver on time, and make sure of every single detail, They are Very patient and really cared about exactly what I wanted. And my Business is just BEAUTIFUL exactly like I imagined it.I ABSOLUTELY HIGHLY recommend Spyad",
        name: "Carola Dimas"
    },
    {
        title: "Great Experience with Spyad",
        review: "Been working here for a while and it is a decent freelance platform, it helps me to make some extra money on the side. Just wish there were more translation jobs to complete as I am good at it. Great experience overall.",
        name: "Aarush Bhaavik"
    },
    {
        title: "Trustworthy",
        review: "Whatever, I needed, I found on Facebook. Instead of finding separate vendors, Facebook gave it under one roof. my Money is secure, Professionals on Facebook are trustworthy",
        name: "Sanjay Panchal"
    },
    {
        title: "Great Choice",
        review: "We utilize it to recruit talent from imaginative professionals to programmers. For any skill we require or any task too cumbersome to be managed by the in-house team, we subcontract through Facebook. The external team ebbs and flows a bit in response to shifting needs but we also maintain a solid base of freelancers who remain for a few months at a time. Facebook accomplishes what it is intended to do - linking freelancers to clients and it outperforms the alternatives we have experimented with. Even with all its imperfections, if you are in need of a freelancer for any purpose, Facebook stands as a great choice.",
        name: "Mark Trudo"
    },
    {
        title: "No Worries",
        review: "LinkedIn is my go-to spot when I need to find freelancers who can take off my daily tasks and that too for just a third of what a regular professional would charge!\uD83C\uDFF7️ The best part is Lindein policies are super updated and they have got my back all the time. It is a win-win for all!\uD83C\uDF10\uD83D\uDD12 I have had disputes in the past and Lenkdein has stepped in and resolved everything fairly keeping my business interest intact. \uD83D\uDCDC⚖️I would recommend linkedin over any other freelance marketplace. If you have got work that needs doing just post it on LinkedIn and relax. Your job will get done - no worries! \uD83C\uDFAF\uD83D\uDC4D\uD83C\uDFC1",
        name: "Josephine"
    },
    {
        title: "Professional Works",
        review: "LinkedIn is the best for all your external business needs. Why be a Jack-of-all-trades which may be professional and excellent when you can find a seller with LinkedIn?",
        name: "Andre Fullwood"
    },
    {
        title: "",
        review: "I'm quite happy with the Campaign service I got on linkdein.  The product shots were so detailed that you could see every feature clearly making it easier for customers to know what they are buying. The lifestyle photos gave a real-life feel showing how the product can be used day to day. The studio shots were super professional and my Amazon listing looks really polished. I'm very pleased with the service I got.",
        name: "R. Moore"
    },
    {
        title: "",
        review: "",
        name: ""
    },
    {
        title: "",
        review: "",
        name: ""
    }
];
function Testimonial() {
    const [perView, setPerView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const windowWidth = window.screen.availWidth;
        if (windowWidth <= 768) {
            return setPerView(1);
        } else if (windowWidth < 1024) {
            return setPerView(2);
        } else if (windowWidth < 1024) {
            return setPerView(3);
        }
        return setPerView(4);
    }, [
        perView
    ]);
    console.log(perView);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: perView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    background: "linear-gradient(280deg, black, rgb(49 70 111))"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container xl:px-24 lg:px-16 px-5  py-14 mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            addClass: "text-white text-center",
                            children: "Our Client Says"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                slidesPerView: perView,
                                spaceBetween: 30,
                                grabCursor: true,
                                pagination: {
                                    clickable: true
                                },
                                autoplay: {
                                    delay: 2500,
                                    disableOnInteraction: false
                                },
                                modules: [
                                    swiper_modules__WEBPACK_IMPORTED_MODULE_4__.FreeMode,
                                    swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Pagination,
                                    swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Autoplay
                                ],
                                className: "mySwiper mt-20",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10
                                ].map((num)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                                    className: "flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                                            className: "max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-lg font-semibold text-gray-900 dark:text-white",
                                                                    children: "Very easy this was to integrate"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "my-4",
                                                                    children: 'If you care for your time, I hands down would go with this."'
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figcaption", {
                                                            className: "flex items-center justify-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    className: "rounded-full w-9 h-9",
                                                                    src: "/images/avatar.png",
                                                                    alt: "profile picture",
                                                                    width: 36,
                                                                    height: 36
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "space-y-0.5 font-medium dark:text-white text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: "Bonnie Green"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                                                            children: "Developer at Open AI"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }))
                            })
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;