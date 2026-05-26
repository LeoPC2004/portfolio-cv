import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/portfolio';
import { FolderGit2, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
        Proyectos Destacados
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-white/5 border-b border-white/10 relative overflow-hidden flex items-center justify-center">

              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="text-cream/40 text-sm">
                    Aquí debería ir la imagen o link del proyecto
                  </div>
                  <FolderGit2
                    size={48}
                    className="absolute text-cream/20 group-hover:text-maroon/40 transition-colors duration-300"
                  />
                </div>
              )}

              {/* SOLO UN BOTÓN */}
              {project.link && (
                <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-dark rounded-full text-cream hover:text-maroon-light transition-colors shadow-lg"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-cream mb-3 group-hover:text-maroon-light transition-colors">
                {project.title}
              </h3>

              <p className="text-cream/70 text-sm mb-6 min-h-[60px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2 py-1 bg-maroon/10 text-maroon-light rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}