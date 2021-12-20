import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import GreetingSection from "../GreetingSection/GreetingSection";
import RentHome from "../RentHome/RentHome";
import TopProjects from "../TopProjects/TopProjects";
import UpCommingProjects from "../UpCommingProjects/UpCommingProjects";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <GreetingSection />
      <TopProjects />
      <RentHome />
      <UpCommingProjects />
      <Footer />
    </div>
  );
};

export default Home;
