import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import younesPhoto from "@/assets/younes-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-steel">
      {/* Decorative circles */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full border border-gold/10 animate-spin" style={{ animationDuration: "25s" }} />
      <div className="absolute top-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full border border-gold/5 animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }} />
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full border border-gold/8" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono-code text-[10px] tracking-[0.3em] uppercase text-gold mb-4"
          >
            Data · AI · Intelligence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[0.95] tracking-tight mb-4"
          >
            Younes<br />
            <span className="text-gradient-gold">Hachami</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-mist text-sm tracking-widest font-light mb-8"
          >
            Data Scientist · AI / ML Engineer · BI & Data Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col gap-3 mb-8"
          >
            <div className="flex items-center gap-3 text-mist font-mono-code text-[11px]">
              <MapPin size={14} className="text-gold" />
              Dakar, Sénégal
            </div>
            <a href="mailto:youneshachami9@gmail.com" className="flex items-center gap-3 text-mist font-mono-code text-[11px] hover:text-gold transition-colors">
              <Mail size={14} className="text-gold" />
              youneshachami9@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://www.linkedin.com/in/younes-hachami"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gold/15 border border-gold/30 rounded-full font-mono-code text-[11px] text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href="https://github.com/younesda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gold/15 border border-gold/30 rounded-full font-mono-code text-[11px] text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="/Younes_Hachami_CV.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-gold border border-gold rounded-full font-mono-code text-[11px] text-ink font-medium hover:bg-gold-light transition-all duration-300"
            >
              <Download size={14} /> Télécharger CV
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl">
              <img
                src={younesPhoto}
                alt="Younes Hachami"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-3 -right-3 w-72 h-72 md:w-80 md:h-80 rounded-2xl border border-gold/20 -z-10" />
            <div className="absolute -bottom-3 -left-3 w-72 h-72 md:w-80 md:h-80 rounded-2xl border border-gold/10 -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#profil" className="flex flex-col items-center gap-2 text-mist/50 hover:text-gold transition-colors">
          <span className="font-mono-code text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
