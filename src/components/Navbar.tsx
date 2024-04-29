import React from 'react';
import logo from 'brand/logo_transparent.png';
import { Link } from 'react-scroll';

const Navbar = () => {

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Tech Network', path: 'technetwork' },
        { link: 'Blog', path: 'blog' },
        { link: 'Contact', path: 'footer' },
    ];

    return (
        <header className='w-full bg-white flex justify-around items-center p-2 fixed'>
            <img className='w-40 h-12 object-cover' src={logo} alt='' />

            {/* NavItems for Large Devices */}
            <ul className='md:flex space-x-12 hidden'>
                {
                    navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} key={path}
                        offset={-100} className='block cursor-pointer text-base text-neutralGray font-sans font-medium hover:text-brandPrimary first:font-medium'>{link}</Link>)
                }
            </ul>

            {/* Find a Mentor */}
            <button className='bg-brandSecondary py-1 px-3 border-2 rounded-lg hover:bg-brandPrimary font-sans font-semibold transition-all duration-300'>
                Find a Mentor
            </button>
        </header>
    );
};

export default Navbar;