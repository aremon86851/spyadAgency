import React from "react";
import ContactForm from "./ContactForm";
import Heading from "../SharedComponent/Heading";
import ClickToConnect from "./ClickToConnect";

const ContactUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="container py-14 px-24 mx-auto">
        <Heading>Contact</Heading>
        <div className="grid grid-cols-2 gap-20">
          <div className="pl-4">
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
