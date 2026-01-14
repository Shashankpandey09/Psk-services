import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Rocket, Search, Globe, Cpu, Smartphone } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Layers size={24} />,
        title: "Product Design",
        description: "User-centric interfaces that blend intuitive function with stunning aesthetics."
    },
    {
        icon: <Cpu size={24} />,
        title: "Engineering",
        description: "Robust, scalable architectures built with modern technologies for peak performance."
    },
    {
        icon: <Search size={24} />,
        title: "SEO Optimisation",
        description: "Strategic search engine optimization to boost your visibility and organic rankings."
    },
    {
        icon: <Globe size={24} />,
        title: "Google Listing",
        description: "Complete Google Business Profile setup and optimization for local search dominance."
    },
    {
        icon: <Smartphone size={24} />,
        title: "Mobile Experiences",
        description: "Beautiful mobile apps for iOS and Android that your customers will love to use."
    },
    {
        icon: <Rocket size={24} />,
        title: "Domain, Hosting & Email",
        description: "End-to-end setup including domain registration, reliable hosting, professional email, and search indexing."
    }
];

export const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="label">Expertise</span>
                    <h2 className="display-lg">Comprehensive <span className="text-secondary">digital capabilities.</span></h2>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service }: { service: any, index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className="service-card"
        >
            <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
            </div>
            <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
            </div>
        </motion.div>
    );
};
