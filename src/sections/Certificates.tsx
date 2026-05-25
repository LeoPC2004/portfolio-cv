import SectionWrapper from '../components/SectionWrapper';
import { certificates } from '../data/portfolio';
import { Award } from 'lucide-react';

export default function Certificates() {
  return (
    <SectionWrapper id="certificates">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient flex items-center gap-3">
        <Award className="text-maroon-light" />
        Certificados y Formación
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <div key={index} className="relative glass-card p-5 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors group cursor-pointer">
            <div className="p-2 bg-maroon/10 rounded-lg text-maroon-light group-hover:scale-110 transition-transform">
              <Award size={20} />
            </div>
            <p className="text-cream/90 font-medium text-sm md:text-base">{cert.name}</p>

            {/* Hover Image Preview */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 md:w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none scale-95 group-hover:scale-100 origin-bottom">
              <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-2xl flex flex-col items-center">
                <span className="text-xs text-cream/70 mb-2 font-medium">Vista previa</span>
                <img src={cert.image} alt={cert.name} className="w-full h-auto max-h-48 object-cover rounded-lg shadow-inner" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
