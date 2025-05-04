import React from 'react'
import TailwindSVG from '../assets/svg/TailwindSVG'


const Skills = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>My Experiences</h1>
            <p className='text-gray-400 sm:my-4 my-2 text-sm'>Web developers turn ideas into functional, user-friendly websites.</p>
            <div className='sm:p-4 sm:h-[270px] h-60 overflow-y-scroll rounded-lg'>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 px-10'>
                    <div className='text-red-500 w-20'>
                        <TailwindSVG classSVG="w-40 h-40 text-green-400"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
