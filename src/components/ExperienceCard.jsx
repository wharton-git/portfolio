import React from 'react'

const ExperienceCard = ({ date, title, location }) => {
    return (
        <div className=''>
            <div className='bg-gray-800 text-white p-4 rounded-lg'>
                <p className='text-green-400'>{date}</p>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p className='text-gray-400 flex items-center gap-1'>
                    <span className='text-green-400 text-2xl -translate-y-1.5'>.</span>
                    <span className=''>{location}</span>
                </p>
            </div>
        </div>
    )
}

export default ExperienceCard
