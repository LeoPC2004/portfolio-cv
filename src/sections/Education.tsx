import SectionWrapper from '../components/SectionWrapper';
import { education } from '../data/portfolio';
import { GraduationCap, FileText, ExternalLink } from 'lucide-react';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient flex items-center gap-3">
        <GraduationCap className="text-maroon-light" />
        Educación
      </h2>
      
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <div key={index} className="glass-card p-6 md:p-8 rounded-2xl flex flex-col gap-6 border-l-4 border-l-maroon">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold text-cream mb-1">{edu.institution}</h3>
                <p className="text-lg text-cream/90">{edu.degree}</p>
                <p className="text-sm text-cream/60 mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-maroon-light"></span>
                  {edu.status}
                </p>
              </div>
              <div className="text-left md:text-right shrink-0">
                <span className="inline-block px-4 py-2 bg-white/5 rounded-lg text-cream/80 font-medium">
                  {edu.period}
                </span>
              </div>
            </div>

            {edu.certificates && edu.certificates.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2 border-t border-white/5">
                {edu.certificates.map((cert, cIndex) => (
                  <a
                    key={cIndex}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-maroon/15 text-cream hover:text-white hover:bg-maroon/30 border border-maroon/30 transition-all duration-200 group shadow-sm hover:shadow-maroon/20 hover:scale-[1.02]"
                  >
                    <FileText size={16} className="text-maroon-light group-hover:scale-110 transition-transform" />
                    <span>{cert.label}</span>
                    <ExternalLink size={14} className="text-cream/50 group-hover:text-cream transition-colors ml-0.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
