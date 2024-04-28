import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import HowItWorks from '../components/HowItWorks';
import LearnYourWay from '../components/LearnYourWay';

const LandingPage = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <HowItWorks/>
        <LearnYourWay/>
        </>
    );
};

export default LandingPage;