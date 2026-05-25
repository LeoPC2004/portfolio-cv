import SectionWrapper from '../components/SectionWrapper';
import { experience } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient flex items-center gap-3">
        <Briefcase className="text-maroon-light" />
        Experiencia Profesional
      </h2>
      
      <div className="relative border-l border-maroon/30 ml-3 md:ml-6 space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-10">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-maroon-light rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(190,18,60,0.8)]"></div>
            
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-cream mb-1">{exp.role}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <span className="text-lg text-cream/80 font-medium">{exp.company}</span>
                <span className="hidden md:inline text-cream/40">•</span>
                <span className="text-maroon-light font-medium text-sm px-3 py-1 bg-maroon/10 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-2">
                {exp.functions.map((func, idx) => (
                  <li key={idx} className="text-cream/70 flex items-start gap-2">
                    <span className="text-maroon-light mt-1.5 text-xs">▹</span>
                    {func}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
