import { Link, useLocation } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import ThemeController from "./UI/ThemeController";

const Navbar = () => {
    const location = useLocation();

    const links = [
        { to: "/", label: "Home" },
        { to: "/experiences", label: "Experiences" },
        { to: "/skills", label: "Skills" },
        { to: "/projects", label: "Projects" },
        { to: "/about", label: "About" },
        { to: "/contacts", label: "Contacts" },
    ];

    return (
        <div className='absolute z-10 w-screen flex gap-2 items-center justify-between py-2 px-4'>
            <div className="neu-protrude p-2 dark:neu-protrude">
                Wharton Aldrick
            </div>

            <div className={`neu-protrude dark:neu-protrude flex items-center relative overflow-hidden`}>
                {links.map((link) => {
                    const isActive = location.pathname === link.to;

                    return (
                        <Link key={link.to} to={link.to} className="relative">
                            <div className={`px-3 py-1 ${isActive ? "" : ""}`}>
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute inset-0 neu-dent dark:neu-dent bg-transparent pointer-events-none"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div>
                <ThemeController/>
            </div>
        </div>
    )
}

export default Navbar
