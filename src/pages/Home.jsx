// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Linkedin, Facebook, Mail } from 'lucide-react';
import Profile from "./../assets/images/profile.png";

import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className='px-5'
        >
            <div className='sm:flex sm:flex-row-reverse items-center sm:justify-between sm:w-9/12 mx-auto mt-10'>
                <div className='text-center w-full'>
                    <div className='border border-green-400 rounded-full sm:w-64 sm:h-64 w-40 h-40 flex justify-center items-center mx-auto overflow-hidden'>
                        <img src={Profile} alt="Profile image" srcset="" />
                    </div>
                </div>
                <div className='md:max-w-2/4'>
                    <p className='text-sm text-gray-400 my-2'>Web Developer</p>
                    <h2 className='md:text-4xl text-2xl font-bold text-white'>Yo I'm</h2>
                    <div className='relative'>
                        <h1 className='hidden md:block font-bold text-gray-400 absolute left-74 -bottom-5'>Name Code <span className='text-white'>Xeon</span></h1>
                        <h1 className='md:text-5xl text-3xl font-bold text-green-400'>Wharton Aldrick<span className='text-white'>.</span></h1>
                    </div>
                    <div className='mt-10'>
                        <p className='text-sm text-gray-400 mt-2 text-justify pr-3'>
                            I'm a web developer with a passion for creating beautiful and functional websites.
                            I have experience in various technologies and programing languages.
                        </p>
                    </div>
                    <div className='mt-4 flex gap-3 items-center'>
                        <a
                            href='/path-to-your-cv.pdf'
                            download='Wharton_Aldrick_CV.pdf'
                            className='flex text-sm sm:text-md w-max gap-3 items-center px-4 py-2 bg-transparent text-green-400 border border-green-400 rounded-full hover:bg-green-400 hover:text-gray-900 transition'
                        >
                            Download My CV
                            <Download size={20} />
                        </a>
                        <a href='https://www.linkedin.com/in/your-profile' className='border border-green-400 rounded-full p-2 bg-transparent text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all' target='_blank' rel='noopener noreferrer'>
                            <Linkedin size={14} />
                        </a>
                        <a href='https://www.facebook.com/your-profile' className='border border-green-400 rounded-full p-2 bg-transparent text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all' target='_blank' rel='noopener noreferrer'>
                            <Facebook size={14} />
                        </a>
                        <a href='mailto:your-email@example.com' className='border border-green-400 rounded-full p-2 bg-transparent text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all'>
                            <Mail size={14} />
                        </a>
                    </div>
                </div>

            </div>
            <div className='py-10 flex sm:justify-evenly sm:flex-row flex-col w-max mx-auto gap-10'>
                <div className='flex items-center gap-4'>
                    <AnimatedCounter target={5} duration={1} />
                    <div className="flex flex-col">
                        {"Recognized Certifications".split(" ").map((word, index) => (
                            <span key={index}>{word}</span>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <AnimatedCounter target={6} duration={2} />
                    <div className="flex flex-col">
                        {"Technologies Mastered".split(" ").map((word, index) => (
                            <span key={index}>{word}</span>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <AnimatedCounter target={300} duration={3} />
                    <div className="flex flex-col">
                        {"Code Commits".split(" ").map((word, index) => (
                            <span key={index}>{word}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;