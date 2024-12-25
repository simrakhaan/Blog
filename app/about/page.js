"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="h-screen">
    <div className="container items-center  mx-auto max-w-4xl p-6">
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        {/* Image Section */}
        <div className="mb-6 md:mb-0">
          <Image
            src="/Image/portfolio profile.jpeg" 
            alt="/About Us"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* About Us Section */}
        <div>
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
            About Us
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
          I'm  Simra Khan,  and my goal is to develop responsive 
          and high-quality websites that provide an excellent user experience. 
            
          </p>
          <p className="text-gray-700 dark:text-gray-300">
          Welcome to  blog! I'm are passionate about sharing knowledge, 
            exploring new ideas, and creating a community of curious minds. Our goal 
            is to provide valuable insights and engaging content that empowers our readers.
            
          </p>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Frontend Developer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              As a frontend developer, I specialize in crafting interactive and user-friendly interfaces using modern web technologies.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">UI Developer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              As a UI developer, I focus on designing intuitive layouts and ensuring a seamless visual experience for users.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
