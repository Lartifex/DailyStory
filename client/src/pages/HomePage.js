import React from "react";
import Footer from "../components/Footer";
import Stories from "../components/Stories";
import "../components/styles/stories.css";

const HomePage = ({ stories }) => {
  return (
    <div>
      <h1>Hi, Name!</h1>
      <h2>Choose your daily story:</h2>
      <Stories stories={stories} />
      <Footer />
    </div>
  );
};

export default HomePage;
