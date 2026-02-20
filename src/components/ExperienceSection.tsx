import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const domains = [
  {
    icon: "⚙",
    label: "Data Engineering",
    bullets: [
      "ETL multi-sources : PostgreSQL + Oracle, transformation, normalisation, chargement",
      "Modélisation dimensionnelle : fait_intervention, dim_statut, dim_agent…",
      "Cache multi-niveaux : mémoire → Parquet → SQL, préchargement parallèle (threading)",
    ],
  },
  {
    icon: "🤖",
    label: "IA / NLP",
    bullets: [
      "Chatbot : pipeline intent detection → query building → formatage réponse",
      "Intégration LLM : prompt engineering, injection de contexte métier",
      "RAG avec ChromaDB pour enrichissement contextuel des réponses",
    ],
  },
  {
    icon: "🐍",
    label: "Backend Python",
    bullets: [
      "Flask : factory pattern, blueprints, API REST, authentification (Flask-Login)",
      "Pandas / NumPy : manipulation avancée (groupby, merge, transform, masks)",
      "SQLAlchemy 2.x : connexions poolées, gestion multi-BDD",
    ],
  },
  {
    icon: "📊",
    label: "Business Intelligence",
    bullets: [
      "KPIs : taux d'isolement, réparation, productivité, absentéisme, turnover…",
      "Qualification automatique (excellent / bon / acceptable / insuffisant)",
      "Git, .env, séparation dev/prod, interface web HTML/CSS/JS",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experiences" className="py-20 bg-cream">
    <div className="max-w-4xl mx-auto px-6">
      <SectionTitle>Expériences Professionnelles</SectionTitle>

      {/* Exp 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 pb-12 border-b border-border"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <div>
            <h3 className="font-display text-lg font-bold text-steel">Développeur IA / Data Scientist</h3>
            <p className="text-gold text-sm font-medium mt-1">SEN'EAU — Société nationale des Eaux du Sénégal</p>
          </div>
          <span className="font-mono-code text-[10px] text-smoke bg-paper border border-border px-3 py-1 rounded-full whitespace-nowrap self-start">
            Janv. 2025 – Janv. 2026 · 1 an
          </span>
        </div>

        <p className="text-smoke text-[13px] italic mt-3 mb-5 leading-relaxed">
          Conception et déploiement d'un assistant IA conversationnel d'aide à la décision
          pour le suivi des KPIs opérationnels (fuites, interventions, RH).
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {domains.map((d) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-paper border border-border rounded-lg p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <p className="font-mono-code text-[9.5px] tracking-[0.2em] uppercase text-gold mb-3">
                {d.icon} {d.label}
              </p>
              <ul className="flex flex-col gap-2">
                {d.bullets.map((b, i) => (
                  <li key={i} className="text-smoke text-[11.5px] leading-[1.5] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-gold before:text-[9px] before:top-[2px]">
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 font-mono-code text-[10px] text-steel-light tracking-wide px-3 py-2 bg-primary/[0.04] rounded border-l-2 border-steel-light">
          Stack · Python · Flask · Pandas · PostgreSQL · Oracle · LLM · ChromaDB · Parquet · SQLAlchemy · REST API
        </div>
      </motion.div>

      {/* Exp 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display text-lg font-bold text-steel">Data Engineer / BI Analyst</h3>
            <p className="text-gold text-sm font-medium mt-1">Expérience professionnelle antérieure</p>
          </div>
        </div>
        <ul className="flex flex-col gap-3 mt-3">
          {[
            "Conception et optimisation de pipelines ETL pour l'intégration de données opérationnelles",
            "Développement de requêtes SQL complexes et procédures PL/SQL pour l'analyse et la fiabilité des données",
            "Modélisation de Data Warehouse (schéma en étoile) pour le reporting métier",
            "Création de dashboards interactifs et KPI avec Power BI, facilitant la prise de décision",
            "Collaboration avec les équipes métiers et BI pour assurer la qualité et la pertinence des données",
          ].map((b, i) => (
            <li key={i} className="text-smoke text-[12.5px] leading-[1.55] pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-gold before:text-[10px] before:top-[3px]">
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
