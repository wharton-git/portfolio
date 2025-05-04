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
                    <SkillsCard icon={<HtmlSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<CssSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<JsSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<PhpSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<JavaSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<PytonSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<TailwindSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<ReactSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<NodeSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<FramerSVG classSVG='w-20 h-20' />} />
                    <SkillsCard icon={<LaravelSVG classSVG='w-20 h-20' />} />
                </div>
            </div>
        </div>
    )
}

export default Skills
