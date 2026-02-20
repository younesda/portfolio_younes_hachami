import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const ProfilSection = () => (
  <section id="profil" className="py-20 bg-paper">
    <div className="max-w-4xl mx-auto px-6">
      <SectionTitle>Profil</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gold-border-left pl-6"
      >
        <p className="text-smoke text-[14px] leading-[1.8] font-light">
          <strong className="text-steel font-medium">Data Scientist, Ingénieur IA et Data Analyst certifié</strong> en Master 2 Big Data & Data Strategy,
          maîtrisant l'ensemble de la chaîne data : ingestion ETL, modélisation dimensionnelle,
          Machine Learning et Deep Learning (CNN, RNN, LSTM).
          Expérimenté en <strong className="text-steel font-medium">NLP, LLM et architectures RAG</strong> à travers le développement
          d'un assistant IA en production. <strong className="text-steel font-medium">Certifié IBM Data Analyst</strong>, avec une maîtrise avancée de 
          <strong className="text-steel font-medium">Power BI</strong> pour la création de dashboards interactifs, le suivi de KPIs et le reporting décisionnel.
          Orienté impact métier avec une capacité à transformer
          des données complexes en décisions concrètes. Ouvert à tout poste Data.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProfilSection;
