import React from 'react';
import underline from 'assets/underline.png';
import Learning from 'animations/Learning.json';
import Working from 'animations/Working.json';
import Lottie from 'lottie-react';

const LearnYourWay = () => {
    return (
        <div className='max-w-full bg-lightBlue items-center justify-center p-4 md:p-12'>
            {/* Section title */}
            <div className='flex flex-col items-center'>
                <div>
                    <div className='flex'>
                        <h1 className='text-4xl font-poppins font-semibold text-brandPrimary pr-2'>Learn</h1>
                        <h1 className='text-4xl font-poppins font-semibold'> your way</h1>
                    </div>
                    <img className='w-32 h-2' src={underline} alt='' />
                </div>
            </div>

            {/* Section desc */}
            <h1 className='text-base font-poppins font-normal text-gray text-center py-6'>Everyone's needs are different - We match you with experienced tutors who personalise your learning to help you achieve your goals.</h1>

            {/* Make Mentor Hint Moves in Your Career */}
            <div className='flex flex-col md:flex-row justify-around items-center'>
                <div className='md:w-1/3'>
                    <h1 className='text-4xl text-center md:text-left'>Make Mentor Hint moves in your career</h1>
                    <h1 className='text-base font-poppins font-normal text-gray py-6 text-center md:text-left'>Access top software developers who help you switch to a tech role or get promoted</h1>
                </div>
                {/* Working Animation */}
                <Lottie className='w-80 h-80' animationData={Working} loop={true} />
            </div>

            {/* Upskill on your own time */}
            <div className='flex flex-col md:flex-row-reverse justify-around items-center'>
                <div className='md:w-1/3'>
                    <h1 className='text-4xl text-center md:text-left'>Upskill on your own time</h1>
                    <h1 className='text-base font-poppins font-normal text-gray py-6 text-center md:text-left'>Take classes when you’re free. You can easily do it alongside your full time job or over the weekends.</h1>
                </div>
                {/* Learning Animation */}
                <Lottie className='w-96 h-96' animationData={Learning} loop={true} />
            </div>
        </div>
    );
};

export default LearnYourWay;