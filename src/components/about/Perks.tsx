import React from 'react';
import commitment from 'assets/about/Commitment.png';

const Perks = () => {

    const perks = [
        { imageUrl: 'https://via.placeholder.com/150', description: 'Starts from 499/-' },
        { imageUrl: 'https://via.placeholder.com/150', description: 'Simplified Enrolment Process - No Tests, No Hassles' },
        { imageUrl: 'https://via.placeholder.com/150', description: 'Placement Assistance with assured Minimum Package Starting from INR 5 LPA' },
        { imageUrl: 'https://via.placeholder.com/150', description: '7 day refund policy' },
        { imageUrl: 'https://via.placeholder.com/150', description: 'From learning, working on industry oriented realtime Projects, attending tests, resume building, taking up challenging mock interviews till achieving your dream job.' },
        { imageUrl: 'https://via.placeholder.com/150', description: 'Highest Salary' },
        { imageUrl: 'https://via.placeholder.com/150', description: 'EMI options available' },
        { imageUrl: 'https://via.placeholder.com/150', description: 'Ask me anything sessions (Weekdays/Weekend LIVE classes)/ One-on-One knowledge gain session with Mentors' },
        { imageUrl: 'https://via.placeholder.com/150', description: 'Designed by Industry experts' },
        { imageUrl: 'https://via.placeholder.com/150', description: 'Helps to switch over with 100 % hike' },
        { imageUrl: 'https://via.placeholder.com/150', description: '100+ Start-ups to top tech Companies referrals' }
    ];


    return (
        <section className="w-full p-8">
            {/* "Section Title" */}
            <h1 className='font-poppins font-extrabold text-4xl text-center'>Perks of the program</h1>

            {/* Perks List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {perks.map((perk, index) => (
                    <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
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