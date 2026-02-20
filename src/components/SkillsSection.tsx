import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    title: "Machine Learning",
    tags: [
      { label: "Scikit-learn", variant: "primary" as const },
      { label: "XGBoost", variant: "primary" as const },
      { label: "Random Forest", variant: "secondary" as const },
      { label: "SVM", variant: "secondary" as const },
    ],
  },
  {
    title: "Deep Learning",
    tags: [
      { label: "CNN", variant: "primary" as const },
      { label: "RNN", variant: "primary" as const },
      { label: "LSTM", variant: "primary" as const },
      { label: "TensorFlow", variant: "gold" as const },
      { label: "Keras", variant: "gold" as const },
    ],
  },
  {
    title: "NLP & IA Générative",
    tags: [
      { label: "NLP", variant: "gold" as const },
      { label: "LLM", variant: "gold" as const },
      { label: "RAG", variant: "gold" as const },
      { label: "ChromaDB", variant: "secondary" as const },
      { label: "Prompt Eng.", variant: "secondary" as const },
    ],
  },
  {
    title: "Data & Backend",
    tags: [
      { label: "Python", variant: "primary" as const },
      { label: "Flask", variant: "primary" as const },
      { label: "Pandas", variant: "secondary" as const },
      { label: "NumPy", variant: "secondary" as const },
      { label: "SQLAlchemy", variant: "secondary" as const },
    ],
  },
  {
    title: "Bases de données",
    tags: [
      { label: "PostgreSQL", variant: "primary" as const },
      { label: "Oracle", variant: "primary" as const },
      { label: "SQL / PL-SQL", variant: "secondary" as const },
      { label: "Parquet", variant: "secondary" as const },
    ],
  },
  {
    title: "BI & Reporting",
    tags: [
      { label: "Power BI", variant: "gold" as const },
      { label: "ETL", variant: "secondary" as const },
      { label: "Data Warehouse", variant: "secondary" as const },
    ],
  },
  {
    title: "DevOps & Tools",
    tags: [
      { label: "Git", variant: "primary" as const },
      { label: "API REST", variant: "secondary" as const },
      { label: "HTML / CSS / JS", variant: "secondary" as const },
    ],
  },
];

const tagStyles = {
  primary: "bg-primary text-primary-foreground",
  secondary: "border border-steel-light text-steel bg-transparent",
  gold: "bg-gold/15 border border-gold/40 text-accent-foreground",
};

const SkillsSection = () => (
  <section id="competences" className="py-20 bg-paper">
    <div className="max-w-4xl mx-auto px-6">
      <SectionTitle>Compétences</SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <p className="font-mono-code text-[10px] tracking-[0.12em] text-steel uppercase mb-3">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`text-[10.5px] font-medium px-2.5 py-1 rounded-sm transition-transform hover:-translate-y-0.5 cursor-default ${tagStyles[tag.variant]}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <div className="mt-14">
        <SectionTitle>Langues</SectionTitle>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "Français", level: 5 },
            { name: "Wolof", level: 5 },
            { name: "Anglais", level: 3 },
          ].map((lang) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
              <span className="text-steel text-sm font-medium">{lang.name}</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((d) => (
                  <div
                    key={d}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      d <= lang.level ? "bg-gold" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
