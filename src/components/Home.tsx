import Lottie from 'lottie-react';
import React from 'react';
import Interview from 'animations/Interview.json'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className='max-w-full bg-skyBlue py-20 items-center justify-center flex flex-col'>

            <div className=' w-full md:flex justify-center items-center md:justify-around'>
                {/* Mentor Helps you to Upgrade your skill/Get Interview/Crack Interview... */}
                <div>
                    <h1 className='md:text-6xl text-5xl font-anton tracking-wider font-normal'>Mentor Helps You</h1>
                    <div className='flex py-4'>
                        <h1 className='md:text-6xl text-5xl font-anton tracking-wider font-normal pr-4'>To</h1>
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
                            style={{
                                fontSize: '2em', border: "1px solid black", backgroundColor: 'white', padding: "0px 5px", display: "flex", alignItems: "center", fontFamily: "Anton sans-serif",
                                fontWeight: 400,
                                fontStyle: "normal"
                            }}
                            repeat={Infinity}
                        />
                    </div>
                </div>

                {/* Interview Animation */}
                <Lottie className='w-96 h-96' animationData={Interview} loop={true} />
            </div>

            <div>
                {/* Find a Mentor */}
                <button className='bg-brandSecondary py-1 px-3 border-2 rounded-lg hover:bg-brandPrimary font-poppins font-semibold text-2xl transition-all duration-300'>
                    Find a Mentor
                </button>
            </div>
        </div>
    );
};

export default Home;