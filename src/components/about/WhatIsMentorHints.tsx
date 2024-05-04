import React from 'react';
import Commitment from 'assets/about/Commitment.png'

const WhatIsMentorHints = () => {
    return (
        <section className="w-full flex p-8 gap-2">
            <div className='w-2/3'>
                <h1 className='font-poppins font-extrabold text-4xl'>What is Mentorhints?</h1>
                <h2 className='font-poppins font-semibold text-base py-2'>Mentorhints is a secret weapon for the techies.</h2>
                <h2 className='font-poppins '><span className='font-semibold text-base'>Our Mission</span> is clear : To bridge the gap between ambition and expertise</h2>
                <p className='py-2 font-poppins text-base text-gray'>
                    We connect newbies with training sessions run by experienced engineers from top companies, helping them get started in their careers.

                    For the pros, we are like matchmakers, setting them up with senior engineers who know their stuff for better job options.

                    And if you're switching from a non-tech job to a tech one, these programs support you with advice, training, and help to get referral from great companies.
                    Basically, we are the shortcuts to boost your tech career, no matter where you're starting from.
                </p>
                <p className='py-2 font-poppins text-base text-gray'>
                At MENTOR HINTS, we have a straightforward goal: to help you move from wanting to knowing. Whether you're just starting out in software or already have experience and want to learn more, we're here to support you every step of the way to success.
                </p>
            </div>
            <div className='w-1/3'>
                <img src={Commitment} alt='' />
            </div>
        </section>
    );
};

export default WhatIsMentorHints;