import React from 'react';
import underline from 'assets/underline.png';
import posing from 'assets/blogs/posing.png';

const Blogs = () => {

    const blogsData = [
        {
            id: 1,
            username: 'The View From Here',
            title: 'UI-UX Designer',
            description:
                `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`,
        },
        {
            id: 2,
            username: 'The View From Here',
            title: 'UI-UX Designer',
            description:
                `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`,
        },
        {
            id: 3,
            username: 'The View From Here',
            title: 'UI-UX Designer',
            description:
                `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`,
        },
        // Add more card objects here
    ]

    const Blog = ({id,title,description}) => {
        return (
            <div className="mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-2 transition-all duration-300">
                <a href="#">
                    <img className="rounded-t-lg" src={posing} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-lg font-normal font-poppins tracking-tight">{title}</h5>
                    </a>
                    <p className="text-xs font-poppins font-normal text-gray pb-2">{description}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-xs font-medium  font-poppins text-center bg-brandSecondary rounded-lg hover:bg-brandPrimary focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-full items-center justify-center p-3 md:p-8' id='blog'>
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
            <h1 className='text-base font-poppins font-normal text-gray text-center py-6'>Various versions have evolved over the years, sometimes by accident,</h1>

            {/* Blogs List */}
            <div className='mt-4 grid lg:grid-cols-3 md:grid-cols-2 md:w-11/12 grid-cols-1 mx-auto gap-12 mb-2'>
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