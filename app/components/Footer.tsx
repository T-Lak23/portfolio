import React from "react";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t border-border p-5 sm:px-8 flex sm:flex-row flex-col justify-center items-center sm:justify-between ">
      <div className="font-medium">&copy; 2025 Tilak. All rights reserved</div>
      <div className="font-medium">
        Built with <SiNextdotjs className="inline-block" /> Next JS.
      </div>
    </footer>
  );
};

export default Footer;
