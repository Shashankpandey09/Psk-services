
import { motion } from 'framer-motion';
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
                            A digital agency  <span className="about-highlight">built for execution.</span>
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
                          PSK is a design and technology partner helping businesses turn ideas into high-performing digital products.
                        </motion.p>

                        <motion.p
                            className="body-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                             We work with founders and teams who care about usability, performance, and long-term growth not surface-level design. We don't chase trends.
                            We solve problems that matter to your business.
                        </motion.p>


                    </div>
                </div>
            </div>
        </section>
    );
};
