import SectionWrapper from '../components/SectionWrapper';
import { currentCourses } from '../data/portfolio';
import { BookOpen, Clock } from 'lucide-react';

export default function CurrentCourses() {
  return (
    <SectionWrapper id="current-courses">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient flex items-center gap-3">
        <BookOpen className="text-maroon-light" />
        Cursos en curso
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentCourses.map((course, index) => (
          <div
            key={index}
            className="glass-card p-5 rounded-xl flex items-start gap-4 border-l-4 border-l-maroon-light"
          >
            <div className="p-2 bg-maroon/10 rounded-lg text-maroon-light shrink-0 mt-0.5">
              <BookOpen size={20} />
            </div>

            <div className="flex-1 min-w-0">
              {course.link ? (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/90 font-medium text-sm md:text-base hover:text-maroon-light transition-colors leading-snug block"
                >
                  {course.name}
                </a>
              ) : (
                <p className="text-cream/90 font-medium text-sm md:text-base leading-snug">
                  {course.name}
                </p>
              )}

              <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Clock size={11} />
                {course.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
