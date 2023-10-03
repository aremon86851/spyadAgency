import React from "react";
import ContactForm from "./ContactForm";
import Heading from "../SharedComponent/Heading";
import ClickToConnect from "./ClickToConnect";

const ContactUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="container py-14 xl:px-24 lg:px-16 px-5 mx-auto">
        <Heading>Contact</Heading>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-6">
          <div className="md:pl-4 pl-0">
            <h4 className="font-semibold mb-5">Click to connect</h4>
            <ClickToConnect />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
