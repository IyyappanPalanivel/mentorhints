import React from 'react';
import underline from 'assets/underline.png';
import TellGoal from 'assets/TellGoal.png';

const GetStarted = () => {

    const cardsData = [
        {
            step: '01',
            title: 'Tell us your goals',
            description:
                'Share the subject you need help with along with your contact details so we can get in touch with you',
        },
        {
            step: '02',
            title: 'Get Connected',
            description:
                'We go beyond basic matching algorithms. Our dedicated team handpicks tutors based on your needs',
        },
        {
            step: '03',
            title: 'Start Learning',
            description:
                'Take your learning to the next level with tailored guidance',
        },
        // Add more card objects here
    ]

    const Card = ({ step, title, description }) => {
        return (
            <div className="bg-white rounded-lg shadow-md max-w-sm hover:-translate-y-2 hover:border-b-4 hover:border-brandPrimary transition-all duration-300">
                <div className='flex items-center justify-center bg-brandPrimary rounded-t-lg'>
                    <img className='w-44 h-44' src={TellGoal} alt=''/> 
                </div>
                {/* <div className="flex justify-between px-4 py-3">
                    <span className="text-xl font-bold text-gray-800">{step} Step</span>
                </div> */}
                <div className="px-4 py-4">
                    <h3 className="font-bold text-xl font-poppins">{title}</h3>
                    <p className="text-sm text-gray font-poppins">{description}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-full items-center justify-center p-4 md:p-14 bg-lightBlue'>
            {/* Section title: How To Get Started*/}
            <div className='flex md:flex-row text-center items-center justify-center '>
                <h1 className='text-2xl md:text-4xl font-poppins font-semibold'>How to</h1>
                <div className='px-2 items-center flex flex-col pt-2'>
                    <h1 className='text-2xl md:text-4xl font-poppins font-semibold text-brandPrimary'>Get Started</h1>
                    <img className='w-36 h-2' src={underline} alt='' />
                </div>
            </div>

            {/* Steps List*/}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 md:w-11/12 grid-cols-1 mx-auto gap-12'>
                {
                    cardsData.map(card =>
                        <Card key={card.step} {...card} />
                    )
                }
            </div>
        </div>
    );
};

export default GetStarted;