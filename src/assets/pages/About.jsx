import React from 'react'
import Box from '../components/tools/Box'

const About = () => {
    return (
        <Box>
            <div className="p-2 neu-sm dark:neu-dark-sm">
                <div className='text-4xl font-bold mb-4'>
                    About Me
                </div>
                <div>
                    Fullstack Developer with a Network Engineering Edge
                </div>
                <div>
                    Building fast, secure, and scalable applications from the ground up.
                </div>
                <div>
                    I am a passionate Fullstack Developer with (not a lot) years of experience in building comprehensive, end-to-end web applications. My unique background as a Network Engineer gives me a distinct advantage: I architect and code with a deep understanding of the underlying infrastructure.

                    Where some developers see only code, I also see data packets, request cycles, and bandwidth. This results in smarter technical choices, native performance optimization, and security that is baked in from the start.
                </div>

                <div>
                    I am constantly seeking technical challenges that allow me to push the boundaries of performance, scalability, and user experience.

                    Have a project? Let's talk architecture.
                </div>
            </div>
        </Box>
    )
}

export default About