import React, { useState } from 'react';
import { EMAIL_CONFIG } from '../../utils/constants';
import { Label, TextInput } from 'flowbite-react';

const FindMentorModal = (props) => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const { showModal, toggleModal } = props;

    const EnquiryTitle = "Help us with your number,and we'll match you with the best tutor!";

    function onCloseModal() {
        toggleModal(); // Call the toggleModal function to close the modal
        setName('');
        setMobile('');
    }

    const handleButtonClick = () => {
        const emailBody = EMAIL_CONFIG.ENQUIRY_BODY_TEMPLATE(name, mobile);
        const emailSubject = EMAIL_CONFIG.ENQUIRY_SUBJECT;
        const mailToLink = `mailto:${EMAIL_CONFIG.EMAIL_RECIPIENT}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailToLink;
    }

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                {/*header*/}
                                <div className="flex justify-end p-2 border-b border-solid border-blueGray-200 rounded-t">
                                    <button
                                        type="button" 
                                        onClick={onCloseModal}
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        {/* Heroicon name: outline/x */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/*body*/}
                                <div className="space-y-6 p-6 gap-2">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{EnquiryTitle}</h3>
                                    {/* Email */}
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="name" value="Your Name" />
                                        </div>
                                        <TextInput
                                            id="name"
                                            placeholder="Enter your Name"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                            required
                                        />
                                    </div>
                                    {/* Mobile number */}
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="mobile" value="Your Mobile Number" />
                                        </div>
                                        <TextInput
                                            id="mobile"
                                            placeholder='Enter your mobile number'
                                            type="tel" // Use type="tel" for mobile numbers
                                            value={mobile}
                                            onChange={(event) => setMobile(event.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    {/* Submit */}
                                    <div className="w-full items-center flex">
                                        <button
                                            className='bg-brandPrimary text-white text-sm px-4 py-2 transition-all duration-300 rounded-md hover:bg-brandSecondary'
                                            onClick={handleButtonClick}
                                        >
                                            Get Callback From Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default FindMentorModal;