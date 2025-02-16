import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        console.log(`Scrolling to: ${id}`, section); // Vérifie si l'élément est bien trouvé

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen text-[#1c1c1c] bg-gray-100'>
            <div className='text-center'>
                <div className='text-4xl space-x-2 flex flex-col md:flex-row lg:text-6xl transition-all'>
                    <span className=''>Hey I'm</span>
                    <div className='flex justify-center space-x-2'>
                        <span className='text-transparent text-stroke-2'>WHARTON</span>
                        <span className=''>ALDRICK</span>
                    </div>
                </div>
                <div className='flex items-center justify-center text-2xl lg:text-4xl'>
                    <span className='mr-2'>Code Name</span>
                    <span className='text-transparent text-stroke-2'>XEON</span>
                </div>
                <div>
                    I'm a full stack developer & computer network technician
                </div>
            </div>
            <div onClick={() => scrollToSection('projets')} className='cursor-pointer space-x-2 flex items-center my-5 border-2 p-3 rounded-full hover:bg-black hover:text-white active:scale-95 transition-all translate-y-10'>
                <ArrowRight />
                <div>
                    See my projects
                </div>
            </div>
        </div>
    );
};

export default Home;
