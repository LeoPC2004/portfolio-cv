import SectionWrapper from '../components/SectionWrapper';
import { languages } from '../data/portfolio';
import { Globe2 } from 'lucide-react';

export default function Languages() {
  return (
    <SectionWrapper id="languages" className="py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient flex items-center gap-3">
        <Globe2 className="text-maroon-light" />
        Idiomas
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {languages.map((lang, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-cream">{lang.language}</h3>
              <span className="px-3 py-1 bg-maroon/20 text-maroon-light rounded-full text-sm font-medium border border-maroon/30">
                {lang.level}
              </span>
            </div>
            <p className="text-cream/60 text-sm">{lang.institution}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
