import React from 'react';
import Commitment from 'assets/about/Commitment.png';

const TalkToExperts = (props) => {

    const { toggleEnquiry } = props;

    return (
        <section className="w-full p-8 gap-4 text-center md:text-left bg-lightBlue md:flex md:flex-row-reverse justify-center items-center">
            <div className=''>
                <h1 className='font-poppins font-extrabold text-2xl'>Don't Know Which Program to choose? Talk to our Experts</h1>
                {/* Find a Mentor */}
                <button
                    onClick={toggleEnquiry}
                    className='bg-brandSecondary py-1 px-3 border-2 border-black rounded-lg hover:bg-brandPrimary font-poppins font-semibold transition-all duration-300 mt-4'>
                    Get a free demo
                </button>
            </div>
            <div className=''>
                <img className='w-80 h-60 rounded' src={Commitment} alt='' />
            </div>
        </section>
    );
};

export default TalkToExperts;