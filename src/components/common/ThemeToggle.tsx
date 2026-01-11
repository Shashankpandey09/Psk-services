
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="icon-wrapper"
            >
                {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
        </button>
    );
};
