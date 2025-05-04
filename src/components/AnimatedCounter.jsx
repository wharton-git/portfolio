import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, animate } from 'framer-motion';

const AnimatedCounter = ({ target = 0, duration = 2, className = '' }) => {
    const count = useMotionValue(0);
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, target, {
            duration,
            onUpdate(value) {
                setCurrentValue(Math.floor(value));
            },
        });

        return () => controls.stop();
    }, [target, duration, count]);

    return (
        <motion.div className={`text-5xl text-center ${className}`}>
            {currentValue}
        </motion.div>
    );
};

export default AnimatedCounter;
