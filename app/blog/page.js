// components/BlogCard.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({  onClick }) => {
  return (
    <div className="h-screen">
    <div className="max-w-sm rounded-lg overflow-hidden mx-10 mt-20  shadow-lg bg-white dark:bg-gray-800 dark:text-white">
      <div className="p-4">
        <Image
        src="/image/agentiai.webp"
        alt="/image"
        width={400}
        height={200}
        />
        <h2 className="text-lg font-semibold mb-2">Agentic AI</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">This is the descriptive blog of Agentic AI.</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 font-bold dark:text-gray-400">By: Simra Khan </p>
          <Link href="/blogDet">
          <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 dark:hover:bg-blue-400"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogCard;
