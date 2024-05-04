import React, { useState } from 'react';
import logo from 'brand/logo_transparent.png';
import { NavLink } from 'react-router-dom';
import HeroSection from '../components/about/HeroSection';
import WhatIsMentorHints from '../components/about/WhatIsMentorHints';
import WhyWe from '../components/about/WhyWe';
import Commitment from '../components/about/Commitment';
import TalkToExperts from '../components/about/TalkToExperts';
import Perks from '../components/about/Perks';
import FindMentorModal from '../components/modal/FindMentorModal';

const About = () => {

    const [showEnquiry, setShowEnquiry] = useState(false);

    const toggleEnquiry = () => {
        setShowEnquiry(!showEnquiry);
    };

    const Header = () => {
        return (
            <header className='w-full bg-white flex justify-around items-center p-2 fixed'>
                <img className='w-40 h-12 object-cover' src={logo} alt='' />

                {/* NavItems for Large Devices */}
                <ul className='md:flex space-x-12 hidden'>
                    <NavLink className='block cursor-pointer text-sm font-poppins font-normal text-navTextColor hover:text-brandPrimary' to="/">Home</NavLink>
                    <NavLink className='block cursor-pointer text-sm font-poppins font-normal hover:text-brandPrimary text-brandPrimary' to="/about">About</NavLink>
                </ul>

                {/* Find a Mentor */}
                <button
                    onClick={toggleEnquiry}
                    className='bg-brandSecondary py-1 px-3 border-2 border-black rounded-lg hover:bg-brandPrimary font-poppins font-semibold transition-all duration-300'>
                    Find a Mentor
                </button>
            </header>
        )
    }

    return (
        <div>
            <Header />
            <HeroSection />
            <WhatIsMentorHints />
            <WhyWe />
            <Commitment />
            <TalkToExperts toggleEnquiry={toggleEnquiry}/>
            <Perks />
            <FindMentorModal showModal={showEnquiry} toggleModal={toggleEnquiry} />
        </div>
    );
};

export default About;