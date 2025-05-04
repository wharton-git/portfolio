import React from 'react'

const About = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>About Me</h1>
            <p className='text-gray-400 sm:my-4 my-2 text-sm'>Web developers turn ideas into functional, user-friendly websites.</p>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 my-10'>
                <div className='sm:flex-row flex flex-col sm:gap-4'>
                    <div className='text-gray-400 sm:text-[1em] text-sm'>Name</div>
                    <div className='text-white sm:ml-0 ml-5'>Wharton Aldrick</div>
                </div>
                <div className='sm:flex-row flex flex-col sm:gap-4'>
                    <div className='text-gray-400 sm:text-[1em] text-sm'>Experiences</div>
                    <div className='text-white sm:ml-0 ml-5'>1 year</div>
                </div>
                <div className='sm:flex-row flex flex-col sm:gap-4'>
                    <div className='text-gray-400 sm:text-[1em] text-sm'>Nationality</div>
                    <div className='text-white sm:ml-0 ml-5'>Malagasy</div>
                </div>
                <div className='sm:flex-row flex flex-col sm:gap-4'>
                    <div className='text-gray-400 sm:text-[1em] text-sm'>Freelance</div>
                    <div className='text-white sm:ml-0 ml-5'>Available</div>
                </div>
                <div className='sm:flex-row flex flex-col sm:gap-4'>
                    <div className='text-gray-400 sm:text-[1em] text-sm'>Phone</div>
                    <div className='text-white sm:ml-0 ml-5'>+261 34 18 611 81</div>
                </div>
                <div className='sm:flex-row flex flex-col sm:gap-4'>
                    <div className='text-gray-400 sm:text-[1em] text-sm'>LinkedIn</div>
                    <div className='text-white sm:ml-0 ml-5'>Wharton Aldrick</div>
                </div>
                <div className='sm:flex-row flex flex-col sm:gap-4'>
                    <div className='text-gray-400 sm:text-[1em] text-sm'>Email</div>
                    <div className='text-white sm:ml-0 ml-5'>whartonaldrick@gmail.com</div>
                </div>
                <div className='sm:flex-row flex flex-col sm:gap-4'>
                    <div className='text-gray-400 sm:text-[1em] text-sm'>Languages</div>
                    <div className='text-white sm:ml-0 ml-5'>Malagasy, French, English</div>
                </div>
            </div>
        </div>
    )
}

export default About
