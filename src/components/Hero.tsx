import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full max-w-2xl px-4 flex justify-center"
      >
        <img 
          src="/logo-tlo.svg" 
          alt="SGH Legal Club Logo" 
          className="mx-auto"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-accent text-sm tracking-widest uppercase">Przewiń</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-accent w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
