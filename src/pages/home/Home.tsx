import React from "react";
import "./Home.css";
import homeLogo from "../../assets/20944201.jpg";

const Home = () => {
  return (
    <>
      <h1 className="titulo">Home</h1>;
      <img src={homeLogo} className="img" alt="login" />
    </>
  );
};

export default Home;
