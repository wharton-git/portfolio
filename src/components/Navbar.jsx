import { BicepsFlexed, Calendar1, Code2, Contact2, Home } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [stateId, setStateId] = useState(null);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setStateId(id);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section"); // Sélectionne toutes les sections
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStateId(entry.target.id); // Met à jour l'état en fonction de la section visible
                    }
                });
            },
            { threshold: 0.6 } // Détecte quand au moins 60% de la section est visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className='fixed w-full top-0 z-50'>
            <div className='bg-white px-10 py-2 rounded-full mt-5 mx-auto w-11/12 shadow-xl'>
                <div className='flex space-x-2 items-center'>
                    <div className='lg:block hidden w-full'>Wharton Aldrick</div>
                    <NavItem id="accueil" icon={<Home />} text="Home" stateId={stateId} scrollToSection={scrollToSection} />
                    <NavItem id="projets" icon={<Code2 />} text="Projects" stateId={stateId} scrollToSection={scrollToSection} />
                    <NavItem id="competences" icon={<BicepsFlexed />} text="Skills" stateId={stateId} scrollToSection={scrollToSection} />
                    <NavItem id="expForm" icon={<Calendar1 />} text="Training" stateId={stateId} scrollToSection={scrollToSection} />
                    <NavItem id="contact" icon={<Contact2 />} text="Contact" stateId={stateId} scrollToSection={scrollToSection} />
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ id, icon, text, stateId, scrollToSection }) => {
    return (
        <div 
            onClick={() => scrollToSection(id)} 
            className={`cursor-pointer flex items-center justify-center w-full py-3 px-2 rounded-full transition-all 
                ${stateId === id ? "bg-black text-white" : "bg-white hover:bg-slate-100"}`}
        >
            {icon}
            <span className='md:block md:ml-3 text-center hidden'>{text}</span>
        </div>
    );
};

export default Navbar;
