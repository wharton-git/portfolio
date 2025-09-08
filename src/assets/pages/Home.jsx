import React from 'react'
import Box from '../components/tools/Box'
import Lottie from 'lottie-react'
import spacer from "./../images/lotties/spacer.json"
import { AtSign } from 'lucide-react'
import { Phone } from 'lucide-react'

const Home = () => {
    return (
        <Box>
            <div className="w-full h-full md:flex grid items-center justify-center">
                <div className='flex flex-col gap-4 w-3/2'>
                    <div className='flex items-center gap-4'>
                        <div className='neu-protrude dark:neu-protrude w-max h-25 text-6xl p-5 font-extrabold'>
                            <span className='title dark:title-dark'>WA</span>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='w-full text-2xl p-5 flex items-center justify-center'>
                                My name is Wharton Aldrick
                            </div>
                            <div className='w-full text-sm flex items-center mb-5 justify-center'>
                                Developer Full Stack | Network Engineer
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='neu-protrude dark:neu-protrude w-full p-5 flex items-center'>
                            Because the world needs more people who understand both JavaScript and TCP/IP packets. <br />
                            I build apps that work… and make sure they actually reach you. Lag-free, of course.
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='neu-protrude dark:neu-protrude p-2 flex items-center gap-2 text-sm'>
                            <AtSign /><span>whartonaldrick@gmail.com</span>
                        </div>
                        <div className='neu-protrude dark:neu-protrude p-2 w-full flex items-center gap-2 text-[90%]'>
                            <Phone /><span>+261 38 57 390 44 | +261 37 49 838 79</span>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-50 h-50 mx-auto neu-protrude rounded-full'>
                        <Lottie
                            animationData={spacer}
                            loop={true}
                            className='w-60'
                        />
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Home