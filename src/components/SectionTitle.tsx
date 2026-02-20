import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-10"
  >
    <h2 className="font-display text-[11px] font-bold tracking-[0.3em] uppercase text-gold whitespace-nowrap">
      {children}
    </h2>
    <div className="flex-1 h-px bg-border" />
  </motion.div>
);

export default SectionTitle;
