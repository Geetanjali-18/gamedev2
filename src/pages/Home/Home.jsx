import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import NewRelease from "../../components/NewRelease/NewRelease";
// import Collaboration from "../../components/Collaboration/Collaboration";
import Footer from "../../components/Footer/Footer";
import Body from "../../components/Body/Body";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <NewRelease />
      <Body />
      <Footer />
    </>
  );
};

export default Home;