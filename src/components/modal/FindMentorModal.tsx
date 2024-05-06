import React, { useEffect, useRef, useState } from 'react';
import { EMAIL_CONFIG, ZOHO_CONFIG } from '../../utils/constants';
import { Label, TextInput } from 'flowbite-react';
import ZohoForm from '../common/ZohoForm';

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

    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!modalRef.current.contains(event.target)) {
                onCloseModal();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onCloseModal]);

    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 rounded">
                        <div ref={modalRef} className="bg-white max-w-lg w-full rounded-lg shadow-lg mx-2">
                            <ZohoForm formLink={ZOHO_CONFIG.ZOHO_FORM_LINK} />
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default FindMentorModal;