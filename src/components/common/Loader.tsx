import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

interface LoaderProps {
    onLoadingComplete: () => void;
}

export const Loader = ({ onLoadingComplete }: LoaderProps) => {
    const [count, setCount] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const duration = 2200;
        const steps = 100;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setIsExiting(true);
                    setTimeout(onLoadingComplete, 1000);
                    return 100;
                }
                return prev + 1;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="loader-inner">
                <motion.div
                    className="loader-line-top"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: count / 100 }}
                    transition={{ ease: "linear" }}
                />

                <div className="loader-content">
                    <motion.div
                        className="loader-logo"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        PSK
                    </motion.div>

                    <motion.div
                        className="loader-counter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {String(count).padStart(3, '0')}
                    </motion.div>
                </div>

                <motion.div
                    className="loader-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: count > 30 ? 0.5 : 0 }}
                >
                    Engineering Digital Excellence
                </motion.div>

                <motion.div
                    className={`loader-reveal ${isExiting ? 'active' : ''}`}
                />
            </div>
        </motion.div>
    );
};
