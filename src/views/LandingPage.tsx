import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import HowItWorks from '../components/HowItWorks';
import LearnYourWay from '../components/LearnYourWay';
import Referral from '../components/Referral';
import GetStarted from '../components/GetStarted';
import Feedback from '../components/Feedback';

const LandingPage = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <HowItWorks/>
        <LearnYourWay/>
        <Referral/>
        <GetStarted/>
        <Feedback/>
        </>
    );
};

export default LandingPage;