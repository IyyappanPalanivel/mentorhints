import React from 'react';
import logo from 'brand/logo_transparent.png';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    const { toggleEnquiry } = props;

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Tech Network', path: 'mentors' },
        { link: 'Blog', path: 'blog' },
        { link: 'Contact', path: 'footer' },
    ];

    return (
        <header className='w-full bg-white flex justify-around items-center p-2 fixed'>
            <img className='w-40 h-12 object-cover' src={logo} alt='' />

            {/* NavItems for Large Devices */}
            <ul className='md:flex space-x-12 hidden'>
                {navItems.map(({ link, path }) => (
                    <React.Fragment key={path}>
                        {path === 'about' ? (
                            <NavLink className='block cursor-pointer text-sm font-poppins font-normal text-navTextColor hover:text-brandPrimary first:text-brandPrimary' to="/about">About</NavLink>
                        ) : (
                            <Link to={path} spy={true} smooth={true} offset={-100} className='block cursor-pointer text-sm font-poppins font-normal text-navTextColor hover:text-brandPrimary first:text-brandPrimary'>{link}</Link>
                        )}
                    </React.Fragment>
                ))}
            </ul>

            {/* Find a Mentor */}
            <button
                onClick={toggleEnquiry}
                className='bg-brandSecondary py-1 px-3 border-2 border-black rounded-lg hover:bg-brandPrimary font-poppins font-semibold transition-all duration-300'>
                Find a Mentor
            </button>
        </header>
    );
};

export default Navbar;