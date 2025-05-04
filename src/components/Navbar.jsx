import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Contact, FolderKanban, Home, Info, Menu, X } from 'lucide-react'; // ou tout autre icône, ex: Heroicons

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const links = [
        { name: 'Home', path: '/', icon: <Home size={22} /> },
        { name: 'Resume', path: '/resume', icon: <Info size={22} /> },
        { name: 'Work', path: '/work', icon: <FolderKanban size={22} /> },
        { name: 'Contact', path: '/contact', icon: <Contact size={22} /> },
    ];

    const containerRef = useRef(null);
    const [markerStyle, setMarkerStyle] = useState({ left: 0, width: 0 });
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;
        const activeLink = containerRef.current.querySelector(`[data-path='${currentPath}']`);
        if (activeLink) {
            const { offsetLeft, offsetWidth } = activeLink;
            setMarkerStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [currentPath]);

    useEffect(() => {
        setMobileOpen(false);
    }, [currentPath]);

    return (
        <nav className="p-4 flex justify-between items-center w-11/12 mx-auto relative z-50">
            <div className="text-2xl font-bold text-white">
                Xeon<span className="text-green-400">.</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden sm:flex relative gap-6" ref={containerRef}>
                {links.map(link => (
                    <Link
                        key={link.path}
                        to={link.path}
                        data-path={link.path}
                        className={`transition-all text-sm relative flex items- gap-2 pb-3 ${currentPath === link.path ? 'text-green-400' : 'text-white'
                            }`}
                    >
                        <span>{link.icon}</span>
                        <span>{link.name}</span>
                    </Link>
                ))}
                <motion.div
                    className="absolute bottom-0 h-[2px] bg-green-400 rounded"
                    animate={markerStyle}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </div>

            {/* Mobile burger icon */}
            <div className="sm:hidden z-50">
                <button
                    onClick={() => setMobileOpen(prev => !prev)}
                    className="text-white focus:outline-none"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Overlay fond sombre */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Menu mobile */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 shadow-lg p-6 flex flex-col justify-center sm:hidden z-50"
                        >
                            <div className='absolute top-10'>
                                <h1 className='text-xl font-bold text-green-400'>Wharton <br />
                                    <span className='m-0 lsp'>Aldrick</span>
                                    <span className='text-white'>.</span>
                                </h1>
                            </div>
                            <div>
                                {links.map(link => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        data-path={link.path}
                                        className={`text-lg font-medium flex gap-4 py-3 items-center ${currentPath === link.path ? 'text-green-400' : 'text-white'
                                            }`}
                                    >
                                        <span>{link.icon}</span>
                                        <span>{link.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;
