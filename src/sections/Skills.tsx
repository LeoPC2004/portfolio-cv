import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data/portfolio';

export default function Skills() {
  const SkillCategory = ({ title, items }: { title: string, items: string[] }) => (
    <div className="glass-card p-6 rounded-2xl hover:border-maroon/50 transition-colors duration-300">
      <h3 className="text-xl font-bold text-cream mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-cream/90 hover:bg-maroon hover:border-maroon transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">Habilidades Técnicas</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <SkillCategory title="Lenguajes" items={skills.languages} />
        <SkillCategory title="Herramientas" items={skills.tools} />
        <SkillCategory title="Conceptos" items={skills.concepts} />
      </div>
    </SectionWrapper>
  );
}
