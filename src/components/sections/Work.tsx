import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Work.css';

const projects = [
    {
        id: '01',
        title: "Exness Trade",
        category: "Fintech Platform",
        year: "2025",
        // Trading/Fintech chart visualization
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2600&auto=format&fit=crop"
    },
    {
        id: '02',
        title: "n8n Workflow",
        category: "Automation Dashboard",
        year: "2025",
        // Node-based interface/abstract tech
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2600&auto=format&fit=crop"
    },
    {
        id: '03',
        title: "Nexus Core",
        category: "Web3 Exchange",
        year: "2024",
        // Abstract digital network
        image: "https://images.unsplash.com/photo-1639322537228-ad7117a738b4?q=80&w=2600&auto=format&fit=crop"
    }
];

export const Work = () => {
    return (
        <section id="work" className="work-section">
            <div className="container">
                <motion.div
                    className="work-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="label">Selected Work</span>
                    <h2 className="display-lg">Projects that define industries.</h2>
                </motion.div>

                <div className="work-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    className="work-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <a href="#" className="view-all-link">
                        <span>View All Projects</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

interface ProjectType {
    id: string;
    title: string;
    category: string;
    year: string;
    image: string;
}

const ProjectCard = ({ project, index }: { project: ProjectType; index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <motion.article
            ref={ref}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <a href="#" className="project-link">
                <div className="project-image-container">
                    <motion.div className="project-image-wrapper" style={{ y }}>
                        <img src={project.image} alt={project.title} loading="lazy" />
                    </motion.div>
                    <div className="project-overlay">
                        <span className="project-view">View Project</span>
                    </div>
                </div>

                <div className="project-info">
                    <div className="project-meta">
                        <span className="project-number">{project.id}</span>
                        <span className="project-year">{project.year}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                </div>
            </a>
        </motion.article>
    );
};
