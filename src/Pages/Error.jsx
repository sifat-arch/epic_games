import React from "react";
import useDocumentTitle from "../CustomHook/useDocumentTitle";

const Error = () => {
  useDocumentTitle("404 Error");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-9xl font-bold text-gray-900">404</h1>
      <p className="text-xl text-gray-500 mt-4">Oops! Page not found</p>
      <p className="text-gray-400 mt-2">
        We are sorry but the page you requested was not found.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default Error;
