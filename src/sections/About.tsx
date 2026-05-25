import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-maroon to-maroon-light"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cream">Sobre mí</h2>
        <p className="text-cream/80 text-lg leading-relaxed">
          {personalInfo.about}
        </p>
      </div>
    </SectionWrapper>
  );
}
