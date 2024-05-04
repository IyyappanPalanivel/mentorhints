import React, { useState } from 'react';
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
import PopularMentors from '../components/PopularMentors';
import FindMentorModal from '../components/modal/FindMentorModal';

const LandingPage = () => {

    const [showEnquiry, setShowEnquiry] = useState(false);

    const toggleEnquiry = () => {
        setShowEnquiry(!showEnquiry);
    };

    return (
        <>
            <Navbar toggleEnquiry={toggleEnquiry} />
            <Home toggleEnquiry={toggleEnquiry} />
            <PopularMentors />
            <HowItWorks />
            <LearnYourWay />
            <Referral />
            <GetStarted />
            <Feedback />
            <Blogs />
            <Join toggleEnquiry={toggleEnquiry} />
            <Footer />
            <FindMentorModal showModal={showEnquiry} toggleModal={toggleEnquiry} />
            {/* Conditional rendering for BookTrail component */}
            <div className="fixed bottom-0 w-full sm:hidden"> {/* Apply fixed positioning only on small screens */}
                <BookTrail />
            </div>
        </>
    );
};

export default LandingPage;