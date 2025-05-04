import React from 'react'

const SkillsCard = ({ icon, style }) => {
    return (
        <div className=''>
            <div className={`${style} bg-gray-800 w-max text-white p-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-105`}>
                {icon}
            </div>
        </div>
    )
}

export default SkillsCard
