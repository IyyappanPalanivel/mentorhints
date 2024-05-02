import React from 'react';
import GroupDiscuss from 'assets/GroupDiscuss.png';

const Join = () => {
    return (
        <div className='bg-lightBlue flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-16'>
            <div>
                <img className='h-auto w-96' src={GroupDiscuss} alt='' />
            </div>

            {/* Join the best learnig platform */}
            <div className='text-center md:text-left'>
                <h1 className='font-poppins text-2xl md:text-4xl font-semibold'>Join the <span className='font-poppins text-2xl md:text-4xl  font-semibold text-brandPrimary'>best learning</span></h1>
                <h1 className='font-poppins text-2xl md:text-4xl font-semibold'>Platform</h1>

                {/* Section desc */}
                <h1 className='text-xs md:text-base font-poppins font-normal text-gray py-6'>Start learning by registering for free</h1>

                {/* Find a Mentor */}
                <button className='bg-brandSecondary py-1 px-3 border-2 rounded-lg hover:bg-brandPrimary font-poppins font-semibold transition-all duration-300'>
                    Find a Mentor
                </button>
            </div>
        </div>
    );
};

export default Join;