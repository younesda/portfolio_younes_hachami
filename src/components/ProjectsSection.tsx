import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Sphere Office",
    description: "Application web de gestion d'entreprise et d'espace de travail collaboratif.",
    url: "https://sphere-office.lovable.app",
    tags: ["Web App", "React", "Gestion"],
  },
  {
    title: "Cissene Shop",
    description: "Plateforme e-commerce premium au Sénégal avec catalogue produits et paiement intégré.",
    url: "https://cissene-shop.lovable.app",
    tags: ["E-commerce", "React", "Premium"],
  },
];

const ProjectsSection = () => (
  <section id="projets" className="py-20 bg-paper">
    <div className="max-w-4xl mx-auto px-6">
      <SectionTitle>Projets</SectionTitle>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block bg-cream border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-lg font-bold text-steel group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              <ExternalLink size={16} className="text-mist group-hover:text-gold transition-colors mt-1" />
            </div>
            <p className="text-smoke text-[13px] leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-code text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm bg-gold/10 border border-gold/20 text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
