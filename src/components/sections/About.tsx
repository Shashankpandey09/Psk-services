
import { motion} from 'framer-motion';
import './About.css';



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
                            initial={{ opacity: 0, y: 30 }}
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Our methodology is rooted in subtraction. We remove the unnecessary
                            to reveal the essential, creating products that are not just beautiful,
                            but fundamentally sound and performant.
                        </motion.p>

                     
                    </div>
                </div>
            </div>
        </section>
    );
};
