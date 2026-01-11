import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './About.css';

const Counter = ({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: 2.5,
                ease: [0.16, 1, 0.3, 1], // easeOutExpo
                onUpdate(value) {
                    if (node) {
                        node.textContent = Math.floor(value) + suffix;
                    }
                },
            });
            return () => controls.stop();
        }
    }, [from, to, isInView, suffix]);

    return <span ref={nodeRef} className="stat-value" />;
};

export const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="label">The Agency</span>
                        <h2 className="display-lg">
                            We operate at the intersection of <span className="about-highlight">art and engineering.</span>
                        </h2>
                    </motion.div>

                    <div className="about-content">
                        <motion.p
                            className="body-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            In a digital landscape cluttered with noise, we build clarity.
                            PSK is a design and technology partner for ambitious brands
                            looking to define the future.
                        </motion.p>

                        <motion.p
                            className="body-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Our methodology is rooted in subtraction. We remove the unnecessary
                            to reveal the essential, creating products that are not just beautiful,
                            but fundamentally sound and performant.
                        </motion.p>

                        <motion.div
                            className="about-stats"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="stat-item">
                                <Counter from={1} to={10} suffix="+" />
                                <span className="stat-label">Years of Innovation</span>
                            </div>
                            <div className="stat-item">
                                <Counter from={1} to={50} suffix="+" />
                                <span className="stat-label">Global Awards</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
