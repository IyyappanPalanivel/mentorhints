import Lottie from 'lottie-react';
import React from 'react';
import Interview from 'animations/Interview.json'
import { TypeAnimation } from 'react-type-animation';

const Home = (props) => {

    const { toggleEnquiry } = props;

    return (
        <div className='max-w-full bg-skyBlue pt-28 pb-8 md:pb-20 items-center justify-center flex flex-col'>
            <div className='w-full flex flex-col text-center justify-center items-center md:flex-row md:justify-around'>
                {/* Mentor Helps you to Upgrade your skill/Get Interview/Crack Interview... */}
                <div>
                    <h1 className='md:text-6xl text-4xl font-anton tracking-wider font-normal'>Mentor Helps You</h1>
                    <div className='flex py-4'>
                        <h1 className='md:text-6xl text-4xl font-anton tracking-wider font-normal pr-4'>To</h1>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Upgrade your Skill',
                                1000,
                                'Get Interview',
                                1000,
                                'Crack Interview',
                                1000,
                            ]}
                            speed={20}
                            repeat={Infinity}
                            className = 'bg-white border border-black text-center font-anton justify-center items-center flex px-2 md:text-4xl text-3xl'
                        />
                    </div>
                </div>

                {/* Interview Animation */}
                <Lottie className='w-80 h-80 md:w-96 md:h-96' animationData={Interview} loop={true} />
            </div>

            <div>
                {/* Find a Mentor */}
                <button
                    onClick={toggleEnquiry}
                    className='bg-brandSecondary md:py-1 px-3 border-2 border-black rounded-lg hover:bg-brandPrimary font-poppins font-semibold text-2xl transition-all duration-300'>
                    Find a Mentor
                </button>
            </div>
        </div>
    );
};

export default Home;