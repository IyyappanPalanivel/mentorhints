import React from 'react';
import logo from 'brand/logo_transparent.png';
import { NavLink } from 'react-router-dom';

const About = () => {

    const Header = () => {
        return (
            <header className='w-full bg-white flex justify-around items-center p-2 fixed'>
            <img className='w-40 h-12 object-cover' src={logo} alt='' />

            {/* NavItems for Large Devices */}
            <NavLink className='block cursor-pointer text-sm font-poppins font-normal text-navTextColor hover:text-brandPrimary first:text-brandPrimary' to="/">Home</NavLink>
            <NavLink className='block cursor-pointer text-sm font-poppins font-normal text-navTextColor hover:text-brandPrimary first:text-brandPrimary' to="/about">About</NavLink>

            {/* Find a Mentor */}
            <button className='bg-brandSecondary py-1 px-3 border-2 border-black rounded-lg hover:bg-brandPrimary font-poppins font-semibold transition-all duration-300'>
                Find a Mentor
            </button>
        </header>
        )
    }

    
    return (
        <div>
            <Header/>
        </div>
    );
};

export default About;