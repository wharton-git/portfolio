import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // ou tout autre icône, ex: Heroicons

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Resume', path: '/resume' },
        { name: 'Work', path: '/work' },
        { name: 'Contact', path: '/contact' },
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
                        className={`transition-all text-sm relative ${currentPath === link.path ? 'text-green-400' : 'text-white'
                            }`}
                    >
                        {link.name}
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
                            className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 shadow-lg p-6 flex flex-col gap-4 sm:hidden z-50"
                        >
                            {links.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    data-path={link.path}
                                    className={`text-lg font-medium ${currentPath === link.path ? 'text-green-400' : 'text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;
