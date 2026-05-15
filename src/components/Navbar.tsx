import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'O nas', target: 'about' },
  { name: 'Projekty', target: 'projects' },
  { name: 'Kontakt', target: 'cta' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || window.innerHeight;
      
      // Show navbar if scrolled past Hero
      if (window.scrollY > (heroHeight - 100)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-8 py-4 glass rounded-full shadow-2xl"
        >
          <ul className="flex items-center gap-8">
            <li 
              className="text-accent/60 hover:text-accent cursor-pointer transition-colors text-sm font-medium"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </li>
            {navLinks.map(link => (
              <li 
                key={link.target}
                className="text-white/60 hover:text-white cursor-pointer transition-colors text-sm font-medium"
                onClick={() => scrollTo(link.target)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
