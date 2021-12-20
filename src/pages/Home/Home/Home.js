import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import GreetingSection from '../GreetingSection/GreetingSection';
import RentHome from '../RentHome/RentHome';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <GreetingSection />
            <RentHome />
            <Footer />
        </div>
    );
};

export default Home;