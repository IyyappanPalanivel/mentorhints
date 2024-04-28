import React from 'react';
import underline from 'assets/underline.png';

const HowItWorks = () => {
    return (
        <div className='max-w-full justify-center items-center p-4 md:p-14'>
            {/* Section title How can 1:1 mentorship help you */}
            <div className='flex flex-col md:flex-row text-center items-center justify-center '>
                <h1 className='text-4xl font-sans font-semibold'>How can</h1>
                <div className='px-2 items-center flex flex-col pt-2'>
                    <h1 className='text-4xl font-sans font-semibold text-brandPrimary'>1:1 mentorship</h1>
                    <img className='w-36 h-2' src={underline} alt='' />
                </div>
                <h1 className='text-4xl font-sans font-semibold'>help you</h1>
            </div>

            {/* Youtube Video */}
            <div className='container-image p-4 md:p-14 justify-center items-center flex'>
                <iframe
                    className='w-3/4 h-96'
                    src="https://www.youtube.com/embed/xOJ7fTPhZOA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default HowItWorks;