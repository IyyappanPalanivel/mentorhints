import React, { useEffect, useRef, useState } from 'react';
import underline from 'assets/underline.png';
import posing from 'assets/blogs/posing.png';
import { Link } from 'react-router-dom';
import { getBlogsList } from '../datas/BlogDatas';

const Blogs = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const blogsData = getBlogsList();

    useEffect(() => {
        const container = containerRef.current;
        const interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % blogsData.length;
            setCurrentIndex(newIndex);
            container.scrollTo({ left: newIndex * container.offsetWidth, behavior: 'smooth' });
        }, 5000); // Adjust interval as needed (in milliseconds)
        return () => clearInterval(interval);
    }, [blogsData, currentIndex]);

    const Blog = ({ id, title, image, description }) => {
        // Split the description into an array of points based on newline character (\n)
        const points = description.split('\n');
        return (
            <div className="mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer select-none flex-shrink-0 flex-grow-0 w-80 md:w-auto mr-4 mb-2">
                <Link to={`/blog/${id}`}>
                    <img className="rounded-t-lg w-full h-60 object-fill" src={image} alt="" />
                </Link>
                <div className="p-5">
                    <h5 className="mb-2 text-lg font-normal font-poppins tracking-tight">{title}</h5>
                    {/* Render each point as a separate paragraph */}
                    {points.map((point, index) => (
                        <p key={index} className="text-xs font-poppins font-normal text-gray pb-2">{point}</p>
                    ))}
                    <Link to={`/blog/${id}`} className='inline-flex items-center px-3 py-2 text-xs font-medium font-poppins text-center bg-brandSecondary rounded-lg hover:bg-brandPrimary focus:ring-4 focus:outline-none focus:ring-blue-300'>
                        Read more
                        <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                        </svg>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-full items-center justify-center py-3 md:p-8' id='blog'>
            {/* Section title */}
            <div className='flex flex-col items-center'>
                <div>
                    <div className='flex'>
                        <h1 className='text-4xl font-poppins font-semibold text-brandPrimary pr-2'>Stay</h1>
                        <h1 className='text-4xl font-poppins font-semibold'>Curious</h1>
                    </div>
                    <img className='w-24 h-2' src={underline} alt='' />
                </div>
            </div>

            {/* Section desc */}
            <h1 className='text-base font-poppins font-normal text-gray text-center py-6 p-3'>Various versions have evolved over the years, sometimes by accident,</h1>

            {/* Blogs List */}
            <div ref={containerRef} className='md:grid lg:grid-cols-3 md:grid-cols-2 md:w-11/12 grid-cols-1 mx-auto gap-2 flex overflow-x-auto pl-3 md:pl-0 hide-scroll-bar'>
                {
                    blogsData.map(blog =>
                        <Blog key={blog.id} {...blog} />
                    )
                }
            </div>

        </div>
    );
};

export default Blogs;