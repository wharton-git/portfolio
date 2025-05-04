import React from 'react'

const SkillsCard = ({ icon }) => {
    return (
        <div className=''>
            <div className='bg-gray-800 w-max text-white p-4 rounded-lg'>
                {icon}
            </div>
        </div>
    )
}

export default SkillsCard
