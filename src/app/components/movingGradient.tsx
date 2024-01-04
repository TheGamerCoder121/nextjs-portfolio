import React from 'react'; // Add import statement for React
import { motion } from "framer-motion";

interface MovingGradientProps {
    style: React.CSSProperties;
    delay: number;
}

const MovingGradient: React.FC<MovingGradientProps> = ({ style, delay }) => {
    const variants = {
        animate: {
            scale: [1, 1.2, 1], // Pulsing effect
            opacity: [0, 0.7, 1, 0.7, 0],
            transition: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: delay, // Animation delay
            },
        },
    };

    return (
        <motion.div
            style={style}
            className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl -z-1"
            variants={variants}
            animate="animate"
        />
    );
};


export default MovingGradient;
