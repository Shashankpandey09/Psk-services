import { useState } from 'react';
import { Loader } from './components/common/Loader';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Work } from './components/sections/Work';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/ui/CustomCursor';
import { SmoothScroll } from './components/common/SmoothScroll';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <SmoothScroll />
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Process />
            <Work />
            <Testimonials />
            <Contact />
          </main>

          <footer style={{
            padding: '4rem 2rem',
            background: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>PSK.</span>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>&copy; {new Date().getFullYear()} PSK Services.</p>
            </div>
          </footer>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
