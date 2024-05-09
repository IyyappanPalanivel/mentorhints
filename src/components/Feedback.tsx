import React from 'react';
import underline from 'assets/underline.png';
import jenny from 'assets/feedbacks/jenny.png';
import quatation from 'assets/feedbacks/quatation.png';

const Feedback = () => {

    const feedbacksData = [
        {
            id: 1,
            username: 'Jenny Wilson',
            designation: 'UI-UX Designer',
            description:
                `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`,
        },
        {
            id: 2,
            username: 'Guy Hawkins',
            designation: 'UI-UX Designer',
            description:
                `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`,
        },
        {
            id: 3,
            username: 'Vijay',
            designation: 'Mobile App Developer',
            description:
                `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`,
        },
        // Add more card objects here
    ]

    const Feedback = ({ id, username, designation, description }) => {
        return (
            <div className="feedback-card mx-auto bg-white rounded-lg shadow-md max-w-sm p-4 overflow-hidden cursor-pointer select-none flex-shrink-0 flex-grow-0 w-72 md:w-auto border mr-4">
                <div className='flex justify-between'>
                    {/* User details */}
                    <div className='flex gap-2'>
                        <img className='w-14 h-14' src={jenny} alt='' />
                        <div>
                            <h1 className='font-poppins text-base font-semibold'>{username}</h1>
                            <p className='font-poppins text-sm font-normal'>{designation}</p>
                        </div>
                    </div>
                    <img className='w-9 h-8' src={quatation} alt='' />
                </div>

                {/* Feedback content */}
                <p className='font-poppins text-sm font-normal pt-5 text-neutralDGray'>{description}</p>
            </div>
        )
    }

    return (
        <div className='max-w-full items-center justify-center py-4 md:p-14'>
            {/* Section title: Student Feedback */}
            <div className='flex md:flex-row text-center items-center justify-center '>
                <h1 className='text-2xl md:text-4xl font-poppins font-semibold'>Student</h1>
                <div className='px-2 items-center flex flex-col pt-2'>
                    <h1 className='text-2xl md:text-4xl font-poppins font-semibold text-brandPrimary'>Feedback</h1>
                    <img className='w-32 h-2' src={underline} alt='' />
                </div>
            </div>

            {/* Section desc */}
            <h1 className='text-base font-poppins font-normal text-gray text-center py-6 px-4'>Various versions have evolved over the years, sometimes by accident,</h1>

            {/* Feedbacks List */}
            <div className='md:grid lg:grid-cols-3 md:grid-cols-2 md:w-11/12 grid-cols-1 mx-auto md:gap-12 flex overflow-x-auto pl-4 md:pl-0'>
                {
                    feedbacksData.map(feedback =>
                        <Feedback key={feedback.id} {...feedback} />
                    )
                }
            </div>

        </div>
    );
};

export default Feedback;