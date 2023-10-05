import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import NewRelease from "../../components/NewRelease/NewRelease";
import Collaboration from "../../components/Collaboration/Collaboration";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NewRelease />
      <Collaboration />
    </>
  );
};

export default Home;
