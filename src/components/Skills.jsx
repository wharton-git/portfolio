import React from 'react'
import SkillsCard from './SkillsCard'
import { TailwindSVG, ReactSVG, PytonSVG, PhpSVG, NodeSVG, LaravelSVG, JsSVG, JavaSVG, HtmlSVG, FramerSVG, CssSVG } from '../assets/svg/XeonSVG'


const Skills = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>My Experiences</h1>
            <p className='text-gray-400 sm:my-4 my-2 text-sm'>Web developers turn ideas into functional, user-friendly websites.</p>
            <div className='sm:p-4 sm:h-[270px] h-60 overflow-y-scroll rounded-lg'>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 px-10'>
                    <SkillsCard style="hover:bg-orange-500" icon={<HtmlSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-blue-700" icon={<CssSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-yellow-400" icon={<JsSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-purple-300 hover:text-gray-900" icon={<PhpSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-gray-100 hover:text-red-600" icon={<JavaSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-blue-600 hover:text-yellow-400" icon={<PytonSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-sky-500 hover:text-gray-900" icon={<TailwindSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-gray-600 hover:text-cyan-400" icon={<ReactSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-gray-600 hover:text-green-400" icon={<NodeSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-blue-500" icon={<FramerSVG classSVG='w-20 h-20' />} />
                    <SkillsCard style="hover:bg-gray-100 hover:text-red-600" icon={<LaravelSVG classSVG='w-20 h-20' />} />
                </div>
            </div>
        </div>
    )
}

export default Skills
