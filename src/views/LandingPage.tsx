import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import HowItWorks from '../components/HowItWorks';
import LearnYourWay from '../components/LearnYourWay';
import Referral from '../components/Referral';
import GetStarted from '../components/GetStarted';
import Feedback from '../components/Feedback';
import Blogs from '../components/Blogs';
import Join from '../components/Join';
import Footer from '../components/Footer';
import BookTrail from '../components/BookTrail';

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
        <Blogs/>
        <Join/>
        <Footer/>
        {/* Conditional rendering for BookTrail component */}
        <div className="fixed bottom-0 w-full sm:hidden"> {/* Apply fixed positioning only on small screens */}
            <BookTrail/>
        </div>
        </>
    );
};

export default LandingPage;