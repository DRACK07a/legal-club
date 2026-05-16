import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
}

const projects: Project[] = [
  { 
    id: 'akademia', 
    title: "Akademia spółek", 
    description: "Czy zastanawialiście się kiedyś, co odróżnia foundera, który wie, jak zbudować spółkę odporną na kryzysy od tego, który dowiaduje się o luakch w umowie dopiero przed sądem?\n\nNa te pytania szukamy odpowiedzi w projekcie Akademia Spółek, pod okiem niezastąpionych specjalistów z BLSK Kozłowski i Wspólnicy" 
  },
  { 
    id: 'follawus', 
    title: "FollawUS", 
    description: "Kancelarie. Studenci. Job shadowing. Te trzy pojęcia najlepiej definiują FollawUs - projekt, który powstał po to, żebyście mogli zobaczyć, jak wygląda praca prawnika w nieco mniej zobowiązujący sposób, niż staż.", 
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    id: 'moot', 
    title: "Moot courts", 
    description: "Chcielibyście się dowiedzieć, jak wygląda postępowanie przed sądem, ale nie chcecie czytać KPC? Wychodzimy Wam na przeciw z inicjatywą, w której przyglądamy się temu, jak wygląda rozprawa, a następnie, pod czujnym okiem ekspertów, sami przeprowadzamy rozprawę w formule moot court." 
  },
  { 
    id: 'horyzonty', 
    title: "Prawne Horyzonty Biznesu", 
    description: "Zastanawialiście się kiedyś, gdzie kończy biznes, a zaczyna prawo? My myślimy o tym non stop - a rozmawiamy na cyklu spotkań, dotykającym różnych prawnych aspektów prowadzenia biznesu - od odpowiedzialności prawnej menadżerów po prawne ograniczenia w korzystaniu z AI w biznesie." 
  },

interface ProjectCardProps {
  key?: Key;
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    whileHover={{ y: -15, scale: 1.02 }}
    onClick={onClick}
    className="glass relative h-[400px] rounded-2xl cursor-pointer overflow-hidden group transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10" />
    {project.image ? (
       <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
    ) : (
      <div className="w-full h-full bg-accent/5 flex items-center justify-center p-8 text-center text-accent/20">
        Miejsce na grafikę
      </div>
    )}
    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
      <h3 className="text-2xl text-accent font-medium">{project.title}</h3>
    </div>
  </motion.div>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative min-h-screen bg-primary py-32 px-4 overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <img src="/input_file_1.png" alt="" className="w-3/4 max-w-4xl" referrerPolicy="no-referrer" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl text-accent mb-16"
        >
          Projekty
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i}
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-primary/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-primary border border-accent/30 rounded-3xl p-8 md:p-12 max-w-3xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-accent hover:rotate-90 transition-transform p-2"
              >
                <X size={32} />
              </button>
              
              <h3 className="text-4xl text-accent mb-8 pr-12">{selectedProject.title}</h3>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                {selectedProject.description}
               
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
