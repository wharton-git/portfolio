import React from 'react'

const SkillsCard = ({ icon, desc, title }) => {
    return (
        <div className=''>
            <div className='bg-gray-800 w-24 text-white p-4 rounded-lg'>
                <img src={icon} alt={desc} title={title} />
            </div>
        </div>
    )
}

export default SkillsCard
