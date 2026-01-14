import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Process.css';

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "We understand your product, users, and business constraints to identify the real problem worth solving."
    },
    {
        num: "02",
        title: "Strategy",
        desc: "We define the product direction, experience architecture, and technical approach before writing a single line of code."
    },
    {
        num: "03",
        title: "Design & Build",
        desc: "Design and engineering move together to create usable, scalable, production-ready solutions."
    },
    {
        num: "04",
        title: "Launch & Iterate",
        desc: "We support launch, validate performance, and refine based on real usage — not assumptions."
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
                    <h2 className="display-lg">How we <span className="text-secondary">work.</span></h2>
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
