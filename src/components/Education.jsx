import React from 'react'
import ExperienceCard from './ExperienceCard'

const Education = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>My Educations</h1>
            <p className='text-gray-400 sm:my-4 my-2 text-sm'>Web developers turn ideas into functional, user-friendly websites.</p>
            <div className='sm:p-4 sm:h-[270px] h-60 overflow-y-scroll rounded-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-10'>
                    <ExperienceCard date="2023 - Present" title="Web Developer" location="Company Name" />
                    <ExperienceCard date="2022 - 2023" title="Intern" location="Company Name" />
                    <ExperienceCard date="2021 - 2022" title="Junior Developer" location="Company Name" />
                </div>
            </div>
        </div>
    )
}

export default Education
