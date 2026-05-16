import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="h-[6.67vh] bg-primary border-t border-accent/10 flex items-center justify-center gap-8">
      <p className="text-accent/40 text-xs tracking-[0.2em] font-medium">
        CREATED BY ST4CHU, 2026
      </p>
       <div className="flex items-center gap-4">
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-accent/40 hover:text-accent transition-colors"
          title="Instagram"
        >
          <Instagram size={18} />
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-accent/40 hover:text-accent transition-colors"
          title="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
