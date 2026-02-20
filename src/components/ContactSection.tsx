import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gradient-steel relative overflow-hidden">
    <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] rounded-full border border-gold/10" />

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-display text-[11px] font-bold tracking-[0.3em] uppercase text-gold mb-6">
          Contact
        </h2>
        <p className="text-mist text-sm font-light mb-10 max-w-md mx-auto">
          Ouvert aux opportunités en Data Science, IA et ingénierie des données.
          N'hésitez pas à me contacter.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { icon: Mail, label: "youneshachami9@gmail.com", href: "mailto:youneshachami9@gmail.com" },
            { icon: Phone, label: "+221 70 860 59 44", href: "tel:+221708605944" },
            { icon: MapPin, label: "Dakar, Sénégal", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-gold/10 border border-gold/20 rounded-lg font-mono-code text-[11px] text-mist hover:text-gold hover:border-gold/40 transition-all"
            >
              <item.icon size={14} className="text-gold" />
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/younes-hachami"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/younesda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all duration-300"
          >
            <Github size={16} />
          </a>
        </div>
      </motion.div>
    </div>

    {/* Footer */}
    <div className="mt-16 text-center">
      <p className="font-mono-code text-[10px] text-mist/40 tracking-widest">
        © 2025 Younes Hachami — Tous droits réservés
      </p>
    </div>
  </section>
);

export default ContactSection;
