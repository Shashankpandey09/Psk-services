import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Work.css';

// Import images
import eliteWellnessImg from '../../assets/Elite_Wellness.jpg';
import electroPanelImg from '../../assets/ElectroPanel.jpg';
import gymFitImg from '../../assets/Gym_fit.jpg';

const projects = [
    {
        id: '01',
        title: "Elite Wellness",
        category: "Fintech Platform",
        year: "2025",
        image: eliteWellnessImg,
        link: "https://v0-website-redesign-omega-hazel.vercel.app/"
    },
    {
        id: '02',
        title: "Electro Panel",
        category: "Automation Dashboard",
        year: "2025",
        image: electroPanelImg,
        link: "https://b2bmanufacturedemo.pskservice.org/"
    },
    {
        id: '03',
        title: "Gym Fit",
        category: "Fitness Platform",
        year: "2024",
        image: gymFitImg,
        link: "https://gymdemo.pskservice.org/"
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
                    <h2 className="display-lg">Work that solves real problems..</h2>
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
    link: string;
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
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                <div className="project-image-container">
                    <motion.div className="project-image-wrapper" style={{ y }}>
                        <img src={project?.image} alt={project.title} loading="lazy" />
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
