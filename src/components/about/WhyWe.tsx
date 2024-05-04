import React from 'react';
import WhyChoose from 'assets/about/WhyChoose.png'

const WhyWe = () => {
    return (
        <section className="w-full p-8 gap-4 text-center md:text-left bg-lightBlue md:flex md:flex-row-reverse items-center">
            <div className='md:w-2/3'>
                <h1 className='font-poppins font-extrabold text-4xl'>Why Choose Us?</h1>
                <h2 className='font-poppins pt-2'><span className='font-semibold text-base'>Expert Instructors:</span> is clear : To bridge the gap between ambition and expertise</h2>
                <p>Our instructors are industry experts with years of hands-on experience in their respective fields. They bring real-world insights and practical knowledge to the classroom, ensuring that you receive top-notch instruction at every turn.</p>
                <ul className="list-disc pl-4 mt-4">
                    <li><span className='font-semibold text-base'>Comprehensive Curriculum: </span>We offer a diverse range of courses covering everything from programming languages and web development to data science and cyber security. Our curriculum is carefully curated to provide you with the skills and expertise needed to thrive in today's competitive job market.</li>
                    <li><span className='font-semibold text-base'>Hands-On Learning: </span>We believe in learning by doing. That's why our courses feature hands-on projects, case studies, and interactive exercises designed to reinforce key concepts and enhance your understanding of the material.</li>
                    <li><span className='font-semibold text-base'>Flexible Learning Options: </span>Flexible Learning Options: Whether you prefer in-person instruction or online learning, we've got you covered. Our flexible course offerings allow you to choose the format that best fits your schedule and learning style.</li>
                    <li><span className='font-semibold text-base'>Career Support: </span>Career Support: Your success is our top priority. That's why we offer comprehensive career support services to help you achieve your professional goals. From resume writing workshops to mock interviews, we'll provide you with the tools and resources you need to land your dream job.</li>
                </ul>
            </div>
            <div className='md:w-1/3 md:mt-0 mt-4'>
                <img className='rounded' src={WhyChoose} alt='' />
            </div>
        </section>
    );
};

export default WhyWe;