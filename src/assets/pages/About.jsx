import React from 'react'
import Box from '../components/tools/Box'
import Button from '../components/tools/Button'

const About = () => {
    return (
        <Box>
            <div className="p-6 neu-sm dark:neu-dark-sm rounded-2xl shadow-md">

                {/* Title */}
                <h1 className="text-4xl font-extrabold mb-6 text-center">
                    About Me
                </h1>

                {/* Subtitle */}
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center mb-8">
                    Fullstack Developer with a Network Engineering Edge
                </p>

                {/* Sections */}
                <div className="space-y-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">

                    <p className="text-center italic text-gray-600 dark:text-gray-400">
                        Building fast, secure, and scalable applications from the ground up.
                    </p>

                    <p>
                        I am a passionate <span className="font-semibold">Fullstack Developer </span>
                        with just enough years of experience to know where the semicolons go.
                        My unique background as a <span className="font-semibold">Network Engineer </span>
                        gives me a distinct advantage: I architect and code with a deep understanding
                        of the underlying infrastructure.
                    </p>

                    <p>
                        Where some developers see only code, I also see <span className="font-semibold">data packets</span>,
                        <span className="font-semibold"> request cycles</span>, and <span className="font-semibold">bandwidth</span>.
                        This results in smarter technical choices, native performance optimization,
                        and <span className="font-semibold">security baked in from the start</span>.
                    </p>

                    <p>
                        I am constantly seeking technical challenges that allow me to push the boundaries
                        of <span className="font-semibold">performance</span>,
                        <span className="font-semibold">scalability</span>, and
                        <span className="font-semibold"> user experience</span>.
                    </p>

                    {/* Call to action */}
                    <div className="mt-8 mx-auto w-full">
                        <Button >
                            Let’s Talk Architecture
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default About
