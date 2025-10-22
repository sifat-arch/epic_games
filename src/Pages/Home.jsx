import React from "react";
import useDocumentTitle from "../CustomHook/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");
  return <div>Home page</div>;
};

export default Home;
