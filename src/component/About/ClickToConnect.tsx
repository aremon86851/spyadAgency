import React from "react";
// import Linkedin from "../../assest/linkedin.svg";
// import Github from "../../assest/github-1.png";
// import Whatsapp from "../../assest/whatsapp.png";

const ClickToConnect = () => {
  return (
    <div className="pl-2">
      <h4 className="text-gray-400 mb-5">
        <a
          href="#"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src="/icon/facebook.png" className="w-6" alt="Linkedin icon" />{" "}
          <span>/spyde</span>
        </a>
      </h4>
      <h4 className="text-gray-400 mb-5">
        <a
          href="#"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src="/icon/linkedin.png" className="w-6" alt="Linkedin icon" />{" "}
          <span>/in/spyde/</span>
        </a>
      </h4>
      {/* <h4 className="text-gray-400 mb-5">
        <a
          href="https://github.com/aremon86851"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src={Github} alt="Github icon" className="w-6" />{" "}
          <span>/aremon86851</span>
        </a>
      </h4> */}
      <h4 className="text-gray-400 mb-5">
        <a
          href="https://wa.me/8801634571667"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src="/icon/whatsapp.png" className="w-6" alt="Github icon" />{" "}
          <span>+880-00000-71667</span>
        </a>
      </h4>
      <h4 className="text-gray-400 mb-5">
        <a
          href="tel:+880-16345-716"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src="/icon/call.svg" className="w-6" alt="Call icon" />{" "}
          <span>+880-00000-71667</span>
        </a>
      </h4>
      <h4 className="text-gray-400 mb-0">
        <a
          href="mailto:spyde@gmail.com"
          className="flex items-center gap-5 justify-start "
        >
          <img src="/icon/gmail.svg" className="w-6" alt="Gmail icon" />{" "}
          <span>spyde@gmail.com</span>
        </a>
      </h4>
    </div>
  );
};

export default ClickToConnect;
