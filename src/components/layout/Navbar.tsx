import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../common/ThemeToggle';
import './Navbar.css';

const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 50);
            setHidden(currentScrollY > lastScrollY && currentScrollY > 200);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: 0 }}
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <div className="container navbar-inner">
                <a href="/" className="nav-logo">
                    <span className="logo-text">PSK</span>
                </a>

                <nav className="nav-links">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="nav-link"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                        >
                            <span className="nav-link-text">{item.label}</span>
                            <span className="nav-link-line" />
                        </motion.a>
                    ))}
                </nav>

                <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <ThemeToggle />
                    <a href="#contact" className="nav-cta">
                        <span>Start Project</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.header>
    );
};
