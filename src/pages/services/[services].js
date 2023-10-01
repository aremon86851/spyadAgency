import Main from "@/Layout/Main";
import Banner from "@/component/Banner/Banner";
import Blogs from "@/component/Blogs";
import OurSpecialization from "@/component/Home/OurSpecialization";
import AboutService from "@/component/Services/AboutService";
import FAQ from "@/component/Services/FAQ";
import Testimonial from "@/component/SharedComponent/Testimonial";
import SpydeData from "@/config/SpydeData";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const accordionItems = [
  {
    id: 1,
    title: "Section 1",
    content: "Content for Section 1",
  },
  {
    id: 2,
    title: "Section 2",
    content: "Content for Section 2",
  },
  {
    id: 3,
    title: "Section 3",
    content: "Content for Section 3",
  },
  {
    id: 4,
    title: "Section 4",
    content: "Content for Section 4",
  },
  {
    id: 5,
    title: "Section 5",
    content: "Content for Section 5",
  },
  {
    id: 6,
    title: "Section 6",
    content: "Content for Section 6",
  },
  {
    id: 7,
    title: "Section 7",
    content: "Content for Section 7",
  },
];
const Services = () => {
  const router = useRouter();
  const [singleService, setSingleService] = useState({});
  console.log(router.query.services);
  useEffect(() => {
    SpydeData.servicesData.map((service, i) => {
      if (service.processUrl === router.query.services) {
        console.log(service);
        setSingleService(service);
      }
    });
  }, [router]);
  return (
    <Main>
      <Banner data={singleService} />
      <AboutService />
      {/* Specialization for single services */}
      <OurSpecialization data={singleService?.techStack} />
      <OurSpecialization
        data={singleService?.specializationData}
        from="specialization"
      />
      <FAQ items={accordionItems} />
      <Testimonial />
      <Blogs />
    </Main>
  );
};

// export async function getStaticPaths() {
//   console.log('Page [...slug].js getStaticPaths');
//   //const paths = await sourcebitDataClient.getStaticPaths();
//   const paths = eachServicesInfos.map((s) => {
//       return {
//           params: {
//               services: s.processUrl
//           }
//       };
//   });

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   console.log('Page [...slug].js getStaticProps, params: ', params);
//   // console.log('params' + params);
//   // const pagePath = '/' + (params.opening ? params.slug.join('/') : 'index');
//   // console.log('pagePath' + pagePath);

//   // const file = await import(`../../content/pages${pagePath}`);
//   //const props = file.page;
//   //await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
//   return {
//       props: {
//           services: params.services
//       }
//   };
// }
export default Services;
