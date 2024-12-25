// components/Footer.js
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-4 py-4 h-40">
      <p className="text-center mb-2 font-semibold">Simra Blog</p>
      <p className="text-center mb-2">© 2024 All Rights Reserved</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/simra-khan-2641a72b5" 
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white hover:text-blue-400 dark:hover:text-blue-600"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/simrakhaan" 
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white hover:text-gray-400 dark:hover:text-gray-600"
        >
          <FaGithub size={24} />
        </a>
          
          
           
                     
      </div>
    </footer>
  );
};

export default Footer;
