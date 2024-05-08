import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import logo from 'assets/brand/logo_transparent.png';
import { getBlogDetailsById } from '../../datas/BlogDatas';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Footer from '../Footer';
import FindMentorModal from '../modal/FindMentorModal';

const BlogDetail = (props) => {

    // const {blogData} = props;
    const { id } = useParams();

    const [blogData, setBlogData] = useState();
    const [body, setBody] = useState();
    const [showEnquiry, setShowEnquiry] = useState(false);

    // Split the description into an array of points based on newline character (\n)


    useEffect(() => {
        console.log("Id", id)
        const blog = getBlogDetailsById(id);
        setBlogData(blog);
        const points = blog.body.split('\n');
        setBody(points);
    }, [])

    const toggleEnquiry = () => {
        setShowEnquiry(!showEnquiry);
    };

    const Header = () => {
        return (
            <header className='w-full bg-white flex justify-around items-center p-2 fixed top-0 left-0 right-0'>
                {/* Brand MentorHints Logo */}
                <a href='/' className='text-2xl font-semibold flex items-center space-x-3'>
                    <img className='w-40 h-12 object-cover' src={logo} alt='' />
                </a>

                {/* NavItems for Large Devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {/* <NavLink className='block cursor-pointer text-sm font-poppins font-normal text-navTextColor hover:text-brandPrimary' to="/">Home</NavLink> */}
                    <NavLink className='block cursor-pointer text-sm font-poppins font-normal hover:text-brandPrimary text-brandPrimary' to="/blog">Blog</NavLink>
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
            <div className='px-6 md:px-20 mt-20'>
                {
                    blogData && <>
                        <h3 className='text-red-500 text-[12px]'>{blogData.title}</h3>
                        <h3 className='text-[23px] font-bold'>{blogData.title}</h3>
                        <div className='flex items-center mt-5'>
                            <img src={logo}
                                className='w-[35px] rounded-full border' />
                            <div className='ml-2'>
                                <h3 className='font-bold text-[12px]'>Mentorhints</h3>
                                <h3 className='text-gray-500 text-[10px]'>07 May 2024</h3>
                            </div>
                        </div>
                        <img src={blogData.image} className='rounded-2xl mt-5 mb-5 w-full' />
                        {/* Render each point as a separate paragraph */}
                        {body.map((point, index) => (
                            <p key={index} className="text-xs font-poppins font-normal text-gray pb-2">{point}</p>
                        ))}
                    </>
                }

                {/* <h3>{post.desc}</h3> */}
                {/* <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown> */}
            </div>
            <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Footer />
            <FindMentorModal showModal={showEnquiry} toggleModal={toggleEnquiry} />
        </div>

    );
};

export default BlogDetail;