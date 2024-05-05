import React, { useState } from 'react';
import underline from 'assets/underline.png';
import Arun from 'assets/mentors/Arun.jpeg';
import Iyyappan from 'assets/mentors/Iyyappan.jpeg';
import Vengadesh from 'assets/mentors/Vengadesh.jpeg';
import Ram from 'assets/mentors/Ram.jpeg';
import MentorDetailsModal from './modal/MentorDetailsModal';

const PopularMentors = () => {

    const [selectedDomain, setSelectedDomain] = useState('All') // State for selected domain
    const [showMentorDetails, setShowMentorDetails] = useState(false);
    const [selectedMentor, setSelectedMentor] = useState(null); // State for selected mentor data

    const domains = ['All', 'Designing', 'Frontend', 'Backend', 'Android', 'iOS'] // List of domains

    const devData = [
        {
            name: 'Iyyappan',
            image: Iyyappan,
            experience: '4 yrs',
            designation: 'Mobile App Developer @Techno Tackle Software Solutions',
            skills: 'Native iOS, Native Android, React Native, Java, Kotlin, Swift,',
        },
        {
            name: 'Arun',
            image: Arun,
            experience: '8 yrs',
            designation: 'Backend Developer @Google',
            skills: 'Java, Oracle, Spring boot, Kafka, Backend',
        },
        {
            name: 'Vengadesh',
            image: Vengadesh,
            experience: '10 yrs',
            designation: 'Backend Developer @Google',
            skills: 'Java, Oracle, Spring boot, Kafka, Backend',
        },
        {
            name: 'Ram Kumar',
            image: Ram,
            experience: '2 yrs',
            designation: 'Mobile App Developer @Techno Tackle Software Solutions',
            skills: 'React Native, React, Frontend, Javascript, Typescript',
        },
        // Add more developer objects here
    ]

    const filterDevs = (devs) => {
        if (selectedDomain === 'All') {
            return devs
        } else {
            return devs.filter((dev) => dev.skills.includes(selectedDomain))
        }
    }

    const handleClick = (domain) => {
        setSelectedDomain(domain)
    }

    const filteredDevs = filterDevs(devData)

    const DevCard = ({ name, image, experience, designation, skills, onClick }) => {
        const handleCardClick = () => {
            onClick({ name, image, experience, designation, skills });
        };

        return (
            <div
                onClick={handleCardClick}
                className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm cursor-pointer select-none border border-[#e9e5eb] ml-4 md:ml-0 hover:-translate-y-2 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex-shrink-0 flex-grow-0 w-72 mr-4">
                {/* Profile Image */}
                <img className='w-full aspect-square object-cover rounded-lg transform transition duration-500 hover:scale-95' src={image} alt='' />
                {/* Name & Experience */}
                <div className="flex justify-between px-4 pt-4">
                    <h3 className="text-lg font-medium text-gray-800 font-poppins">{name}</h3>
                    <span className="text-base text-gray-500 font-poppins">{experience}</span>
                </div>
                {/* Designation & Skills */}
                <div className="px-4 pb-4">
                    <p className="text-sm font-medium text-gray-700 font-poppins">{designation}</p>
                    <p className="text-sm text-gray-600 font-poppins">{skills}</p>
                </div>
            </div>
        )
    }

    const handleCardClick = (mentorData) => {
        setShowMentorDetails(true);
        // Set the selected mentor data in state to be passed to the modal
        setSelectedMentor(mentorData);
    };

    return (
        <div className='max-w-full items-center justify-center py-4 md:p-14 bg-lightBlue' id='mentors'>
            {/* Section title: Most Popular Mentors */}
            <div className='flex md:flex-row text-center items-center justify-center '>
                <h1 className='text-2xl md:text-4xl font-poppins font-semibold'>Most</h1>
                <div className='px-2 items-center flex flex-col pt-2'>
                    <h1 className='text-2xl md:text-4xl font-poppins font-semibold text-brandPrimary'>Popular Mentors</h1>
                    <img className='w-36 h-2' src={underline} alt='' />
                </div>
            </div>

            {/* Domains List*/}
            <div className="flex flex-col pt-8">
                {/* Domains List */}
                <div className="flex overflow-x-auto mb-4 pl-4 md:pl-0">
                    {domains.map((domain) => (
                        <button
                            key={domain}
                            className={`px-4 py-2 mr-2 rounded-md text-sm font-medium font-poppins  hover:bg-brandPrimary ${selectedDomain === domain ? 'bg-brandPrimary text-white' : 'bg-white hover:bg-gray-200'
                                }`}
                            onClick={() => handleClick(domain)}
                        >
                            {domain}
                        </button>
                    ))}
                </div>

                {/* Mentors List */}
                <div className="flex overflow-x-auto pb-4">
                    {filteredDevs.map((dev) => (
                        <DevCard key={dev.name} {...dev} onClick={handleCardClick} />
                    ))}
                </div>
            </div>

            {/* Mentor Details Modal */}
            {showMentorDetails && selectedMentor && (
                <MentorDetailsModal
                    mentorData={selectedMentor}
                    closeModal={() => setShowMentorDetails(false)}
                />
            )}
        </div>
    );
};

export default PopularMentors;