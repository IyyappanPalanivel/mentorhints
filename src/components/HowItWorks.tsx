import React from 'react';
import underline from 'assets/underline.png';
import YouTubeEmbed from './common/YouTubeEmbed';

const HowItWorks = () => {
    return (
        <div className='max-w-full justify-center items-center p-4 md:p-14'>
            {/* Section title How can 1:1 mentorship help you */}
            <div className='flex flex-col md:flex-row text-center items-center justify-center '>
                <h1 className='text-xl md:text-4xl font-poppins font-semibold'>How can</h1>
                <div className='px-2 items-center flex flex-col pt-2'>
                    <h1 className='text-xl md:text-4xl font-poppins font-semibold text-brandPrimary'>1:1 mentorship</h1>
                    <img className='w-36 h-2' src={underline} alt='' />
                </div>
                <h1 className='text-xl md:text-4xl font-poppins font-semibold'>help you</h1>
            </div>

            {/* Youtube Video */}
            <YouTubeEmbed embedId="sh31zv6YOqY?si=OUceR5C9XuIvNZF8"/>
        </div>
    );
};

export default HowItWorks;