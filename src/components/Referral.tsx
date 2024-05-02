import React from 'react';
import underline from 'assets/underline.png';
import infosys from 'assets/companies/infosys.png';
import tcs from 'assets/companies/tcs.avif';
import valuelabs from 'assets/companies/valuelabs.png';
import ReferralHiring from 'animations/ReferralHiring.json';
import google from 'animations/google.json';
import zoho from 'animations/zoho.json';
import amazon from 'animations/amazon.json';
import Apple from 'animations/Apple.json';
import Swiggy from 'animations/Swiggy.json';
import Lottie from 'lottie-react';

const Referral = () => {
    return (
        <div className='max-w-full items-center justify-center p-4 md:p-14'>
            {/* Section title: Referral from top companies*/}
            <div className='flex md:flex-row text-center items-center justify-center '>
                <h1 className='text-2xl md:text-4xl font-poppins font-semibold bg-brandSecondary px-2'>Referral</h1>
                <h1 className='text-2xl md:text-4xl font-poppins font-semibold pl-2'>from</h1>
                <div className='px-2 items-center flex flex-col pt-2'>
                    <h1 className='text-2xl md:text-4xl font-poppins font-semibold text-brandPrimary'>Top Companies</h1>
                    <img className='w-36 h-2' src={underline} alt='' />
                </div>
            </div>

            {/* Animation + Companies */}
            <div className='flex flex-col md:flex-row justify-center items-center md:gap-8'>
                {/* ReferralHiring Animation */}
                <div className='justify-center items-center md:pt-12'>
                    <Lottie className='w-96 h-96' animationData={ReferralHiring} loop={true} />
                </div>


                {/* Companies */}
                <div className='grid grid-cols-3 md:gap-4 items-center justify-center'>
                    <Lottie className='w-36 h-36' animationData={google} loop={true} />
                    <Lottie className='w-36 h-36' animationData={zoho} loop={true} />
                    <Lottie className='w-36 h-36' animationData={amazon} loop={true} />
                    <Lottie className='w-36 h-36' animationData={amazon} loop={true} />
                    <Lottie className='w-36 h-36' animationData={Apple} loop={true} />
                    <Lottie className='w-36 h-36' animationData={Swiggy} loop={true} />
                    <div className='flex items-center justify-center'>
                        <img className='w-24 h-16' src={infosys} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='w-24 h-20' src={tcs} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='w-24 h-20' src={valuelabs} alt='' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Referral;