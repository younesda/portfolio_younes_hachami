import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfilSection from "@/components/ProfilSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import FormationSection from "@/components/FormationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProfilSection />
      <ExperienceSection />
      <SkillsSection />
      <FormationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
