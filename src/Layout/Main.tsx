import Header from "@/component/SharedComponent/Header";
import Head from "next/head";
import React from "react";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <script>AOS.init();</script>
      </Head>
      <div className="bg-white">
        <div className="mx-auto relative ">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Main;
