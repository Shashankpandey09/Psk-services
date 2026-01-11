import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Process.css';

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "We dive deep into your ecosystem to identify the core opportunity."
    },
    {
        num: "02",
        title: "Strategy",
        desc: "Architecting the blueprint that connects ambition to reality."
    },
    {
        num: "03",
        title: "Creation",
        desc: "Rigorous design and engineering with obsessive attention to detail."
    },
    {
        num: "04",
        title: "Launch",
        desc: "Deploying scalable systems that drive long-term dominance."
    }
];

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineScale = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

    return (
        <section id="process" className="process-section" ref={containerRef}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="label">Methodology</span>
                    <h2 className="display-lg">The path to <span className="text-secondary">precision.</span></h2>
                </motion.div>

                <div className="process-timeline">
                    <motion.div
                        className="process-line"
                        style={{ scaleY: lineScale }}
                    />

                    <div className="process-steps">
                        {steps.map((step, index) => (
                            <ProcessStep key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ step, index }: { step: any, index: number }) => {
    return (
        <motion.div
            className="process-step"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className="step-marker">
                <div className="marker-dot" />
            </div>
            <div className="step-content">
                <span className="step-num">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
            </div>
        </motion.div>
    );
};
