"use client";

import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Leave a Comment
      </h2>
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <textarea
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
          rows="4"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 dark:hover:bg-blue-400"
        >
          Submit
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Comments ({comments.length})
        </h3>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="p-4 bg-white dark:bg-gray-700 rounded shadow-sm border border-gray-200 dark:border-gray-600"
              >
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
