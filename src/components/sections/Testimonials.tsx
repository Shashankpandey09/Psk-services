import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
    {
        quote: "PSK re-engineered our entire digital presence. The result is nothing short of world-class.",
        author: "Alex V.",
        role: "CEO, Nexus"
    },
    {
        quote: "A rare combination of aesthetic restraint and technical dominance. They don't just build, they elevate.",
        author: "Elena R.",
        role: "CTO, Orbit"
    }
];

export const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-wrapper">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} data={t} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ data, index }: { data: any, index: number }) => {
    return (
        <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
        >
            <div className="quote-mark">“</div>
            <p className="t-quote">{data.quote}</p>
            <div className="t-meta">
                <span className="t-author">{data.author}</span>
                <span className="t-role">{data.role}</span>
            </div>
        </motion.div>
    );
};
