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
            className='flex w-9/12 mx-auto mt-10 gap-2'
        >
            <div className='w-full'>
                <h1>Why Hire Me ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className='flex flex-col gap-2'>
                    {['experiences', 'educations', 'skills', 'about'].map((section) => (
                        <button
                            key={section}
                            className={`${
                                activeSection === section
                                    ? "bg-green-400 text-gray-900"
                                    : "bg-gray-800 text-white"
                            } p-2 rounded-lg m-2 hover:bg-green-700 hover:text-white transition-all`}
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
