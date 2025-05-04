// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import About from '../components/About';
import { useState } from 'react';

const Resume = () => {
    const [activeSection, setActiveSection] = useState('experiences');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const renderSection = () => {
        const motionProps = {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            transition: { duration: 0.4 }
        };

        switch (activeSection) {
            case 'experiences':
                return <motion.div key="experiences" {...motionProps}><Experience /></motion.div>;
            case 'educations':
                return <motion.div key="educations" {...motionProps}><Education /></motion.div>;
            case 'skills':
                return <motion.div key="skills" {...motionProps}><Skills /></motion.div>;
            case 'about':
                return <motion.div key="about" {...motionProps}><About /></motion.div>;
            default:
                return null;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className='sm:flex sm:w-9/12 sm:px-0 mx-auto px-7 sm:mt-10 gap-2'
        >
            <div className='sm:w-max'>
                <h1 className='text-xl font-bold'>Why Hire Me ?</h1>
                <p className='text-gray-400 sm:my-4 my-2 text-sm'>Web developers turn ideas into functional, user-friendly websites.</p>
                <div className='sm:flex sm:flex-col sm:text-lg sm:gap-2 sm:w-full sm:my-0 my-3 gap-3 w-max mx-auto grid grid-cols-2 text-sm'>
                    {['experiences', 'educations', 'skills', 'about'].map((section) => (
                        <button
                            key={section}
                            className={`${
                                activeSection === section
                                    ? "bg-green-400 text-gray-900"
                                    : "bg-gray-800 text-white"
                            } p-2 rounded-lg sm:my-2 hover:bg-green-700 hover:text-white transition-all`}
                            onClick={() => handleSectionChange(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className='w-full relative'>
                <AnimatePresence mode="wait">
                    {renderSection()}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Resume;
