import { motion } from 'motion/react';

const TeamCard = ({ name, role, delay }: { name: string, role: string, photoId?: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ y: -20, scale: 1.05 }}
    className="flex flex-col items-center gap-4 transition-all duration-300"
  >
    <div className="w-48 h-64 border-2 border-accent/30 rounded-lg overflow-hidden bg-white/5 relative">
      <div className="absolute inset-0 flex items-center justify-center text-accent/20 text-xs text-center p-4">
        Miejsce na zdjęcie
      </div>
    </div>
    <div className="text-center">
      <h4 className="text-accent font-semibold">{name}</h4>
      <p className="text-white/60 text-sm">{role}</p>
    </div>
  </motion.div>
);

export default function AboutUs() {
  const team = [
    { name: "Wojciech Pilipiec", role: "Przewodniczący" },
    { name: "Wojciech Hanf", role: "Wiceprzewodniczący" },
    { name: "Gosia Golik", role: "Wiceprzewodnicząca" },
    { name: "Ignacy Domański", role: "Wiceprzewodniczący" },
    { name: "dr Anna Kociołek-Pęksa", role: "Opiekun" },
  ];

  return (
    <section id="about" className="relative min-h-screen bg-primary py-32 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl text-accent mb-12"
        >
          O nas
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mb-24"
        >
          <p className="text-lg md:text-xl leading-relaxed text-white/80">
            Powstaliśmy w 2025 z myślą o łączeniu uczelnianych środowisk prawniczych z ekonomicznymi, biznesowymi. 
            Popularyzujemy świadomość prawną wśród ekonomistów i świadomość gospodarczą wśród prawników. 
            Naszą misją jest pokazać, że prawo i biznes to komplementarne dziedziny - jedna bez drugiej jest niepełna.
          </p>
          <p className="text-accent italic mt-8 text-2xl">
            "where the business meets the law."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          {team.map((member, i) => (
            <TeamCard 
              key={member.name} 
              name={member.name} 
              role={member.role}
              delay={0.2 + i * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
