import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-maroon-light/20 blur-3xl rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Contacto
            </h2>

            <p className="text-cream/70 mb-10 text-lg">
              ¿Interesado en trabajar juntos o discutir un proyecto de Data Engineering y Automatización? Contáctame.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-4 text-cream/90 hover:text-maroon-light transition-colors group"
              >
                <div className="p-3 glass rounded-xl group-hover:bg-maroon/20 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg">{personalInfo.contact.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-4 text-cream/90 hover:text-maroon-light transition-colors group"
              >
                <div className="p-3 glass rounded-xl group-hover:bg-maroon/20 transition-colors">
                  <Phone size={24} />
                </div>
                <span className="text-lg">{personalInfo.contact.phone}</span>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-cream hover:bg-maroon hover:text-white transition-all shadow-lg hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-cream hover:bg-maroon hover:text-white transition-all shadow-lg hover:-translate-y-1"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              const name = (document.getElementById("name") as HTMLInputElement).value;
              const email = (document.getElementById("email") as HTMLInputElement).value;
              const message = (document.getElementById("message") as HTMLTextAreaElement).value;

              window.location.href =
                `mailto:${personalInfo.contact.email}?subject=Mensaje de ${name}&body=Correo: ${email}%0D%0A%0D%0AMensaje:%0D%0A${message}`;
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cream/70 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cream/70 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cream/70 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors resize-none"
                placeholder="¿En qué te puedo ayudar?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-maroon hover:bg-maroon-light text-white font-bold rounded-xl transition-all shadow-lg shadow-maroon/25 flex justify-center items-center gap-2"
            >
              Enviar Mensaje <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}