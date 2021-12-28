import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import GreetingSection from "../GreetingSection/GreetingSection";
import RentHome from "../RentHome/RentHome";
import Testimonials from "../Testimonials/Testimonials";
import TopProjects from "../TopProjects/TopProjects";
import UpCommingProjects from "../UpCommingProjects/UpCommingProjects";
import TopSaleFlats from '../TopSaleFlats/TopSaleFlats';
import TopRentedFlats from "../TopRentedFlats/TopRentedFlats";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <GreetingSection />
      <TopSaleFlats />
      <TopProjects />
      <RentHome />
      <TopRentedFlats />
      <UpCommingProjects />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
