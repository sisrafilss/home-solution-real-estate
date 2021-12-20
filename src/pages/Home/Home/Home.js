import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import GreetingSection from '../GreetingSection/GreetingSection';
import RentHome from '../RentHome/RentHome';

const Home = () => {
    return (
        <div>
            <Navigation />
            <GreetingSection />
            <RentHome />
            <Footer />
        </div>
    );
};

export default Home;