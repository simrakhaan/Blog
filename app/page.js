

'use client';

import Image from "next/image"


export default function HeroSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
  };

  return (
    <div>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">Welcome to my </span>Blog!{" "}
            <br className="hidden lg:block" /> {" "}
            <span className="font-semibold underline decoration-primary text-blue-600">
            innovation and creativity
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          My blog is a space where technology meets design, {" "}
            <br className="hidden lg:block" /> and learning is a continuous journey.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section class="bg-gray-100 dark:bg-black py-12">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">What Our Clients Say</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
        <div class="flex items-center mb-4">
          
          <div>
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200">Jane Doe</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">CEO, Company XYZ</p>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300">This blog has been a game-changer for our business insights. Highly recommend!</p>
      </div>

      
      <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
        <div class="flex items-center mb-4">
          
          <div>
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200">John Smith</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Marketing Head, ABC Corp</p>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300">I always find valuable information here. Its my go-to resource for industry trends.</p>
      </div>

      
      <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
        <div class="flex items-center mb-4">
          
          <div>
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200">Emily Clark</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Freelancer</p>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300">The insights and tips shared here have helped me grow my career exponentially.</p>
      </div>
    </div>
  </div>
</section>



    </div>
  );
}
