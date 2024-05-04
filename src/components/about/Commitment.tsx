import React from 'react';
import commitment from 'assets/about/Commitment.png';

const Commitment = () => {
    return (
        <section className="w-full p-8">
            <div className='flex flex-col md:flex-row gap-2 text-center md:text-left'>
                {/* Our Commitment to excellence */}
                <div className='md:w-2/3 justify-between flex flex-col'>
                    <h1 className='font-poppins font-extrabold text-4xl'>Our Commitment to Excellence</h1>
                    <p className='py-2 font-poppins text-base text-gray'>
                        At <a className='font-semibold text-base text-brandPrimary'>Mentorhints</a>, excellence is not just a goal - it's our standard. We're committed to delivering the highest quality training programs and unparalleled customer service to ensure that every student has a positive and rewarding learning experience. Join us at *r MENTORHINTS/ update our link here *r and take the first step towards a brighter future in technology. Whether you're looking to launch a new career, advance in your current role, or simply stay ahead of the curve, we're here to help you succeed.
                    </p>

                    <h1 className='font-poppins font-extrabold text-4xl'>Key features of our online course</h1>
                    <p className='py-2 font-poppins text-base text-gray'>
                        Experts as Mentors from Top Global companies. A Portfolio of Real-world Projects. Globally Recognized Certification. Online recorded sessions in English,தமிழ் to grasp easily Hands-On Assignment for Each Module Both for Fresher’s & Working professionals
                    </p>
                </div>
                {/* Image */}
                <div className='md:w-1/3'>
                    <img src={commitment} alt='' />
                </div>
            </div>

            {/* "STAY CONNECTED WITH US, ADVANCE CONGRATS ON YOUR EXCITING NEW JOURNEY" */}
            <h1 className='text-center font-poppins font-medium text-2xl mt-4'>"STAY CONNECTED WITH US, ADVANCE CONGRATS ON YOUR EXCITING NEW JOURNEY"</h1>
        </section>
    );
};

export default Commitment;