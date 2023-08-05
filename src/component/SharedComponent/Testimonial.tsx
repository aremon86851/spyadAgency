import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
const reviews = [
  {
    title: 'On Time Delivery',
    review: 'I am absolutely delighted to Work with the seller Digital Marketer Ads Spyad 👌🏼.They Are professional, deliver on time, and make sure of every single detail, They are Very patient and really cared about exactly what I wanted. And my Business is just BEAUTIFUL exactly like I imagined it.I ABSOLUTELY HIGHLY recommend Spyad',
    name:'Carola Dimas'
  },
  {
    title: 'Great Experience with Spyad',
    review: 'Been working here for a while and it is a decent freelance platform, it helps me to make some extra money on the side. Just wish there were more translation jobs to complete as I am good at it. Great experience overall.',
    name:'Aarush Bhaavik'
  },
  {
    title: 'Trustworthy',
    review: 'Whatever, I needed, I found on Facebook. Instead of finding separate vendors, Facebook gave it under one roof. my Money is secure, Professionals on Facebook are trustworthy',
    name:'Sanjay Panchal'
  },
  {
    title: 'Great Choice',
    review: 'We utilize it to recruit talent from imaginative professionals to programmers. For any skill we require or any task too cumbersome to be managed by the in-house team, we subcontract through Facebook. The external team ebbs and flows a bit in response to shifting needs but we also maintain a solid base of freelancers who remain for a few months at a time. Facebook accomplishes what it is intended to do - linking freelancers to clients and it outperforms the alternatives we have experimented with. Even with all its imperfections, if you are in need of a freelancer for any purpose, Facebook stands as a great choice.',
    name:'Mark Trudo'
  },
  {
    title: 'No Worries',
    review: 'LinkedIn is my go-to spot when I need to find freelancers who can take off my daily tasks and that too for just a third of what a regular professional would charge!🏷️ The best part is Lindein policies are super updated and they have got my back all the time. It is a win-win for all!🌐🔒 I have had disputes in the past and Lenkdein has stepped in and resolved everything fairly keeping my business interest intact. 📜⚖️I would recommend linkedin over any other freelance marketplace. If you have got work that needs doing just post it on LinkedIn and relax. Your job will get done - no worries! 🎯👍🏁',
    name:'Josephine'
  },
  {
    title: 'Professional Works',
    review: 'LinkedIn is the best for all your external business needs. Why be a Jack-of-all-trades which may be professional and excellent when you can find a seller with LinkedIn?',
    name:'Andre Fullwood'
  },
  {
    title: '',
    review: "I'm quite happy with the Campaign service I got on linkdein.  The product shots were so detailed that you could see every feature clearly making it easier for customers to know what they are buying. The lifestyle photos gave a real-life feel showing how the product can be used day to day. The studio shots were super professional and my Amazon listing looks really polished. I'm very pleased with the service I got.",
    name:'R. Moore'
  },
  {
    title: '',
    review: '',
    name:''
  },
  {
    title: '',
    review: '',
    name:''
  },
]
export default function Testimonial() {
  return (
    <div className="container px-24 py-14">
      <Heading>Our Client Says</Heading>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12">
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Very easy this was to integrate
                  </h3>
                  <p className="my-4">
                    If you care for your time, I hands down would go with this."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <Image
                    className="rounded-full w-9 h-9"
                    src="/images/avatar.png"
                    alt="profile picture"
                    width={36}
                    height={36}
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>Bonnie Green</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Developer at Open AI
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
