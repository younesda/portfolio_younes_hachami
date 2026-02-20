import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const FormationSection = () => (
  <section id="formation" className="py-20 bg-cream">
    <div className="max-w-4xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <SectionTitle>Formation</SectionTitle>
          {[
            {
              degree: "Master 2 – Big Data & Data Strategy",
              school: "Institut Supérieur de Management (ISM)",
              date: "Oct. 2025 — Actuel",
            },
            {
              degree: "Licence – Génie Logiciel Réseaux & Systèmes",
              school: "Institut Supérieur de Management (ISM)",
              date: "Sept. 2021 — Juil. 2024",
            },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="gold-border-left pl-4 mb-6"
            >
              <h4 className="font-display text-[13px] font-bold text-steel leading-snug mb-1">
                {edu.degree}
              </h4>
              <p className="text-smoke text-[11.5px] mb-1">{edu.school}</p>
              <p className="font-mono-code text-[10px] text-gold tracking-wide">{edu.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <SectionTitle>Certifications</SectionTitle>
          {[
            {
              name: "IBM Data Analyst Professional Certificate (V3)",
              org: "Coursera · Juin 2025",
            },
            {
              name: "IBM Machine Learning with Python (V2)",
              org: "Coursera · Nov. 2025",
            },
          ].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-paper border border-border rounded-lg p-4 mb-3 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-gold"
            >
              <h4 className="font-display text-[11.5px] font-semibold text-steel leading-snug">
                {cert.name}
              </h4>
              <p className="font-mono-code text-[10px] text-gold mt-1">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FormationSection;
