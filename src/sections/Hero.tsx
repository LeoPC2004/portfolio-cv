import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { FileDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-maroon/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-maroon-light/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-maroon-light font-medium tracking-wider mb-2 text-sm md:text-base">HOLA, SOY</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient block">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-cream/80 font-medium mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-cream/60 leading-relaxed mb-10 max-w-lg">
            {personalInfo.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-maroon hover:bg-maroon-light text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-maroon/25"
            >
              Ver Proyectos <ArrowRight size={18} />
            </a>
            <a
              href="/images/CV_LeoPachasCleonares.pdf"
              download="CV_Leonardo_Pachas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass hover:bg-white/10 text-cream font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              Descargar CV <FileDown size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Hero Avatar Image */}
          <div className="w-80 h-80 mx-auto glass-card rounded-3xl overflow-hidden flex items-center justify-center border-white/10 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-maroon/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity z-10 pointer-events-none"></div>
            
            <img 
              src="/images/hero_avatar.png" 
              alt="Leonardo Pachas - Data Engineer" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Central Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-maroon/30 rounded-full blur-3xl -z-10 group-hover:bg-maroon/40 transition-colors duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
