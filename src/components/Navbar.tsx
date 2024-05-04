import React, { useEffect, useState } from 'react';
import logo from 'brand/logo_transparent.png';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = (props) => {

    const { toggleEnquiry } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Tech Network', path: 'mentors' },
        { link: 'Blog', path: 'blog' },
        { link: 'Contact', path: 'footer' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className='w-full bg-white fixed top-0 left-0 right-0 py-2'>
            <nav className={`lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 " : ""} `}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Brand GreyMatterLogo */}
                    <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                        <img className='w-40 h-12 object-cover' src={logo} alt='' />
                    </a>

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

                    {/* Find a Mentor Button for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        {/* <a href='' className='text-brandPrimary hover:text-gray900'>Login</a> */}
                        <button
                            onClick={toggleEnquiry}
                            className='bg-brandSecondary py-1 px-3 border-2 border-black rounded-lg hover:bg-brandPrimary font-poppins font-semibold transition-all duration-300'
                        >Find a Mentor
                        </button>
                    </div>

                    {/* Button for only mobile devices */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'
                        >
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                {/* NavItems for mobile devices */}
                <div className={`space-y-4 px-4 mt-12 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-2 left-0 right-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => (
                            <React.Fragment key={path}>
                                {path === 'about' ? (
                                    <NavLink className='block cursor-pointer text-sm font-poppins font-normal text-navTextColor hover:text-white' to="/about">About</NavLink>
                                ) : (
                                    <Link to={path} spy={true} smooth={true} offset={-100} className='block cursor-pointer text-sm font-poppins font-normal text-navTextColor hover:text-white'>{link}</Link>
                                )}
                            </React.Fragment>
                        ))
                    }
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    {/* Find a Mentor Button for small devices */}
                    <div className='space-x-12 items-center'>
                        {/* <a href='' className='text-brandPrimary hover:text-gray900'>Login</a> */}
                        <button
                            onClick={toggleEnquiry}
                            className='bg-brandSecondary py-1 px-3 border-2 border-black rounded-lg hover:bg-brandPrimary font-poppins font-semibold transition-all duration-300'
                        >Find a Mentor
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;