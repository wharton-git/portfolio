// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.98 },
};

const pageTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 0.4,
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            transition={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"

        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;