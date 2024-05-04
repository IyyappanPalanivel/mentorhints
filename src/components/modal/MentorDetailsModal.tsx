import React, { useEffect, useRef } from 'react';

const MentorDetailsModal = (props) => {

    const { mentorData, closeModal } = props;

    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [closeModal]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
            <div ref={modalRef} className="bg-white max-w-lg w-full rounded-lg shadow-lg p-2 mx-2">
                <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex">
                    <div className="w-36 h-36">
                        <img className="object-center object-cover w-full h-full rounded" src={mentorData.image} alt="photo" />
                    </div>
                    <div className="w-full md:w-3/5 text-left p-3 md:p-4 space-y-2">
                        <h3 className="text-xs md:text-lg font-medium text-gray-800 font-poppins">{mentorData.name}</h3>
                        <p className="text-xs md:text-sm font-medium text-gray-700 font-poppins">{mentorData.designation}</p>
                        <p className="text-xs md:text-sm text-gray-600 font-poppins">{mentorData.skills}</p>
                    </div>
                </div>
                <p className="text-xs md:text-sm text-black font-poppins py-4">Connect with {mentorData.name} to elevate your skills and accelerate your career journey. 
                    Get personalized guidance and industry insights directly from a seasoned professional.
                    Don't miss this opportunity to learn, grow, and achieve your goals with {mentorData.name}!</p>
            </div>
        </div>
    );
};

export default MentorDetailsModal;