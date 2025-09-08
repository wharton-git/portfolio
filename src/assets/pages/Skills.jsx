import React from 'react'
import Box from '../components/tools/Box'
import SK from '../components/tools/SK'

import reactIcon from "./../images/react.png"
import expressIcon from "./../images/express.png"
import gsapIcon from "./../images/Gsap.jpg"
import figmaIcon from "./../images/figma.png"
import daisyuiIcon from "./../images/daisyui.svg"
import laravel from "./../images/lrvl.png"
import photoshopIcon from "./../images/ps.png"
import canvasIcon from "./../images/canva.png"
import tailwindIcon from "./../images/tailwind.png"
import mysqlIcon from "./../images/mysql.png"
import dockerIcon from "./../images/docker.png"
import gitIcon from "./../images/git.png"

const Skills = () => {
    return (
        <Box>
            <div className="p-2 neu-sm dark:neu-dark-sm">
                <div className="grid grid-cols-6 gap-4">
                    <SK image={reactIcon} title="React" color="#61DAFB" />
                    <SK image={expressIcon} title="Express.js" color="#68A063" />
                    <SK image={laravel} title="Laravel" color="#FF2D20" />
                    <SK image={gsapIcon} title="GSAP" color="#88CE02" />
                    <SK image={tailwindIcon} title="TailwindCSS" color="#38BDF8" />
                    <SK image={daisyuiIcon} title="DaisyUI" color="#ffc53a" />
                    <SK image={figmaIcon} title="Figma" color="#ed3d53" />
                    <SK image={canvasIcon} title="Canva" color="#00C4CC" />
                    <SK image={photoshopIcon} title="Photoshop" color="#31A8FF" />
                    <SK image={mysqlIcon} title="MySQL" color="#5c5bff" />
                    <SK image={gitIcon} title="Git" color="#F1502F" />
                    <SK image={dockerIcon} title="Docker" color="#0DB7ED" />
                </div>
            </div>
        </Box>
    )
}

export default Skills
