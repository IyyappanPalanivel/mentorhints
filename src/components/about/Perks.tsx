import React from 'react';
import limitedOffer from 'assets/perks/limited-offer.png';
import testing from 'assets/perks/testing.png';
import job from 'assets/perks/job-offer.png';
import money from 'assets/perks/money.png';
import cv from 'assets/perks/cv.png';
import paycheck from 'assets/perks/paycheck.png';
import loan from 'assets/perks/loan.png';
import query from 'assets/perks/query.png';
import spread from 'assets/perks/spread.png';
import badge from 'assets/perks/badge.png';
import bank from 'assets/perks/bank.png';

const Perks = () => {

    const perks = [
        { imageUrl: limitedOffer, description: 'Starts from 499/-' },
        { imageUrl: testing, description: 'Simplified Enrolment Process - No Tests, No Hassles' },
        { imageUrl: job, description: 'Placement Assistance with assured Minimum Package Starting from INR 5 LPA' },
        { imageUrl: money, description: '7 day refund policy' },
        { imageUrl: cv, description: 'From learning, working on industry oriented realtime Projects, attending tests, resume building, taking up challenging mock interviews till achieving your dream job.' },
        { imageUrl: paycheck, description: 'Highest Salary' },
        { imageUrl: loan, description: 'EMI options available' },
        { imageUrl: query, description: 'Ask me anything sessions (Weekdays/Weekend LIVE classes)/ One-on-One knowledge gain session with Mentors' },
        { imageUrl: badge, description: 'Designed by Industry experts' },
        { imageUrl: bank, description: 'Helps to switch over with 100 % hike' },
        { imageUrl: spread, description: '100+ Start-ups to top tech Companies referrals' }
    ];


    return (
        <section className="w-full p-8">
            {/* "Section Title" */}
            <h1 className='font-poppins font-extrabold text-4xl text-center'>Perks of the program</h1>

            {/* Perks List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {perks.map((perk, index) => (
                    <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:-translate-y-2 hover:border-b-4 hover:border-brandPrimary transition-all duration-300">
                        <img src={perk.imageUrl} alt={`Perk Image ${index + 1}`} className="w-16 h-16 mb-4" />
                        <p className="text-xs text-center font-poppins">{perk.description}</p>
                    </div>
                ))}
            </div>

            {/* "BE A PART OF MENTOR HINTS" */}
            <h1 className='text-center font-poppins font-medium text-2xl mt-4'>"BE A PART OF <span className='text-brandPrimary'>MENTOR HINTS</span>"</h1>
        </section>
    );
};

export default Perks;