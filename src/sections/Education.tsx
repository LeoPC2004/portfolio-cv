import SectionWrapper from '../components/SectionWrapper';
import { education } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient flex items-center gap-3">
        <GraduationCap className="text-maroon-light" />
        Educación
      </h2>
      
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <div key={index} className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-l-4 border-l-maroon">
            <div>
              <h3 className="text-2xl font-bold text-cream mb-1">{edu.institution}</h3>
              <p className="text-lg text-cream/90">{edu.degree}</p>
              <p className="text-sm text-cream/60 mt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-maroon-light"></span>
                {edu.status}
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="inline-block px-4 py-2 bg-white/5 rounded-lg text-cream/80 font-medium">
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
