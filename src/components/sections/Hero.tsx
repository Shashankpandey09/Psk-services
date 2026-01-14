import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.5 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 + i * 0.1 }
        })
    };

    return (
        <section ref={containerRef} className="hero">
            <motion.div
                className="hero-content"
                style={{ y, opacity, scale }}
            >
                <div className="container">
                    <motion.div
                        className="hero-label"
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <span className="label">Digital Agency</span>
                    </motion.div>

                    <div className="hero-headline">
                        <motion.div
                            className="headline-line"
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                        

                            <span className="display-xl">We design and</span>
                        </motion.div>
                        <motion.div
                            className="headline-line"
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <span className="display-xl"> build digital</span>
                        </motion.div>
                        <motion.div
                            className="headline-line"
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <span className="display-xl accent"> products</span>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-divider"
                        initial="hidden"
                        animate="visible"
                        variants={lineVariants}
                    />

                    <div className="hero-bottom">
                        <motion.p
                            className="body-lg hero-desc"
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                           Strategy-led design and engineering for startups and growing companies that need clarity, speed, and scale.
                        </motion.p>

                        <motion.div
                            className="hero-cta"
                            custom={5}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <a href="#work" className="cta-primary">
                                <span>View Our Work</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="hero-scroll-indicator">
                <span className="label">Scroll</span>
                <div className="scroll-line">
                    <div className="scroll-dot" />
                </div>
            </div>
        </section>
    );
};
