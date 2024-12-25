"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending...");

    // Mock email send logic (replace this with actual email API integration)
    setTimeout(() => {
      setMessage("Your query has been sent successfully!");
      setFormData({ name: "", email: "", query: "" });
    }, 2000);
  };

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-12">
        {/* Image Section */}
        <div className="mb-6 md:mb-0">
          <Image
            src="/Image/contact.jpg" 
            alt="Contact Us"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Your Query"
              rows="4"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 dark:hover:bg-blue-400"
            >
              Send
            </button>
          </form>
          {message && (
            <p className="mt-4 text-green-500 dark:text-green-400">{message}</p>
          )}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 text-gray-700 dark:text-gray-300">
        <a href="https://www.linkedin.com/in/simra-khan-2641a72b5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/simrakhaan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
          <FaGithub size={30} />
        </a>
        <a href="mailto:khansimra652@gmail.com" className="hover:text-red-600">
          <FaEnvelope size={30} />
        </a>

      </div>
    </div>
  );
};

export default ContactPage;

