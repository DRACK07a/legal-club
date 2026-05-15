import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, ArrowUpRight } from 'lucide-react';

const SocialTile = ({ icon: Icon, title, value, href, delay }: { icon: any, title: string, value: string, href?: string, delay: number }) => (
  <motion.a
    href={href}
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    className="glass p-6 rounded-2xl flex items-center justify-between w-full group transition-all"
  >
    <div className="flex items-center gap-6">
      <div className="bg-accent/10 p-4 rounded-xl text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest">{title}</p>
        <p className="text-white text-lg">{value}</p>
      </div>
    </div>
    {href && <ArrowUpRight className="text-white/20 group-hover:text-accent transition-colors" />}
  </motion.a>
);

export default function CTA() {
  return (
    <section id="cta" className="relative min-h-screen bg-primary py-32 px-4 overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-5 pointer-events-none select-none">
        <h2 className="text-[20vw] font-black tracking-tighter leading-none">KONTAKT</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 relative z-10 items-center">
        {/* Left Side: Info */}
        <div className="lg:col-span-2 space-y-8 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="glass px-4 py-1.5 rounded-full text-accent text-xs uppercase tracking-widest inline-block mb-4">Kontakt</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Skontaktuj <br/>się z nami</h2>
            <p className="text-white/60 text-lg max-w-sm">
              Masz pytania? Chcesz nawiązać współpracę lub dowiedzieć się więcej o naszych projektach? Napisz do nas!
            </p>
          </motion.div>

          <div className="space-y-4">
            <SocialTile icon={Mail} title="Email" value="kontakt@sghlegalclub.pl" delay={0.2} />
            <SocialTile icon={Instagram} title="Instagram" value="@sgh_legalclub" href="https://instagram.com" delay={0.3} />
            <SocialTile icon={Linkedin} title="LinkedIn" value="SGH Legal Club" href="https://linkedin.com" delay={0.4} />
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-3 glass p-8 md:p-12 rounded-[2.5rem]"
        >
          <form className="space-y-8" action="https://usebasin.com/f/53208b0264dd" method="POST">
            <div className="space-y-2">
              <label className="text-white/40 text-xs uppercase tracking-widest block px-1">Imię</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Twoje imię" 
                className="w-full bg-white/5 border-b border-white/20 px-4 py-4 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all text-white placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/40 text-xs uppercase tracking-widest block px-1">E-mail</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="twój@email.com" 
                className="w-full bg-white/5 border-b border-white/20 px-4 py-4 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all text-white placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/40 text-xs uppercase tracking-widest block px-1">Jak możemy Ci pomóc?</label>
              <textarea 
                rows={5}
                name="message"
                required
                placeholder="Opisz swoją sprawę..." 
                className="w-full bg-white/5 border-b border-white/20 px-4 py-4 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all text-white placeholder:text-white/20 resize-none md:min-h-50"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-primary font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            >
              <span>Wyślij</span>
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
