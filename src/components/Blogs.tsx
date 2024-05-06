import React from 'react';
import underline from 'assets/underline.png';
import posing from 'assets/blogs/posing.png';

const Blogs = () => {

    const blogsData = [
        {
            id: 1,
            username: 'Vijay',
            image: 'https://media.licdn.com/dms/image/D5612AQFVfcC3YIys9g/article-cover_image-shrink_423_752/0/1710410239304?e=1720656000&v=beta&t=b-aVbijyOFSlUiIXlE-a5VMsFVlXN245HXzIapWOe1A',
            title: `DEVIN - World's First AI Software Engineer.`,
            description:
                `This AI can exactly do whatever a Software Engineer can do. From creating a code, debugging the code, solving the problems in the code, and testing the code to deployment, this AI takes care of all of these tasks. There are many Articles posted regarding this saying that this AI will wipe out all the Software Engineers & establish dominance. Many Articles state that Organizations will prefer to use this AI for cost-cutting.
                
                Our subscribers who read these Articles commented about this like "I just took IT in college. Will I have a career in the future?"`,
        },
        {
            id: 2,
            username: 'The View From Here',
            image: 'https://media.istockphoto.com/id/1051453428/photo/smiling-employers-handshaking-male-candidate-congratulating-with-hiring.jpg?b=1&s=612x612&w=0&k=20&c=imVKdZ_hzBia_cHoqPSA3LT2XSUbrNJ9vhSmjyEbKx4=',
            title: 'Secret ways to get interview call from LinkedIn',
            description:
                `LinkedIn is one of the top job-searching platforms. Nearly, 67 million companies use
                LinkedIn for their hiring process. For every minute, 6 people are getting hired on LinkedIn. For each day, around 6.5 million people apply for jobs on Linkedin.
                
                These statistics clearly show that many jobs are available. Even though there are many vacancies, we struggle to get a single job. I think, there are only two reasons for this. `,
        },
        {
            id: 3,
            username: 'The View From Here',
            image: 'https://www.infowindtech.com/wp-content/uploads/2023/05/Banner-Image-1024x576-1.webp',
            title: '10 Tips for Effective UI-UX Design',
            description:
                `In the digital age, user experience (UX) design has become a critical aspect of creating successful products and services. A well-designed user interface (UI) can enhance user satisfaction and drive engagement.
                Here are 10 tips for effective UI-UX design:
                
                1. Understand your users: Conduct thorough research to understand your target audience, their needs, preferences, and pain points.
                2. Keep it simple: Design should be intuitive and easy to navigate. Avoid clutter and unnecessary elements.`,
        },
        // Add more card objects here
    ]

    const Blog = ({ id, title,image, description }) => {
        // Split the description into an array of points based on newline character (\n)
        const points = description.split('\n');
        return (
            <div className="mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-2 transition-all duration-300">
                <a href="#">
                    <img className="rounded-t-lg w-full h-64 object-fill" src={image} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-lg font-normal font-poppins tracking-tight">{title}</h5>
                    </a>
                    {/* Render each point as a separate paragraph */}
                    {points.map((point, index) => (
                        <p key={index} className="text-xs font-poppins font-normal text-gray pb-2">{point}</p>
                    ))}
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