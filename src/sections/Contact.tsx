import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, Linkedin, Github, Send, User, MessageSquare, Briefcase, Code, HelpCircle, CheckCircle } from 'lucide-react';

type MessageType = 'work' | 'collab' | 'general';

export default function Contact() {
  const [reason, setReason] = useState<MessageType>('general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Pre-fill / placeholder helper messages based on selected reason
  const getPlaceholder = () => {
    switch (reason) {
      case 'work':
        return 'Hola Leonardo, he visto tu perfil y me gustaría hablarte sobre una oportunidad de trabajo o desarrollo en nuestra empresa...';
      case 'collab':
        return 'Hola Leonardo, tengo una idea de proyecto sobre análisis/automatización de datos y me gustaría colaborar contigo...';
      case 'general':
      default:
        return 'Hola Leonardo, tengo una consulta sobre tu experiencia o tus proyectos de automatización...';
    }
  };

  const getSubject = () => {
    switch (reason) {
      case 'work':
        return `Oportunidad de Trabajo/Prácticas - ${name || 'Contacto'}`;
      case 'collab':
        return `Colaboración en Proyecto - ${name || 'Contacto'}`;
      case 'general':
      default:
        return `Consulta desde Portafolio - ${name || 'Contacto'}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');

      const subject = encodeURIComponent(getSubject());
      const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nMotivo: ${reason === 'work' ? 'Trabajo/Prácticas' : reason === 'collab' ? 'Colaboración/Proyecto' : 'Consulta General'}\n\nMensaje:\n${message}`);

      window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;

      // Reset status after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1200);
  };

  return (
    <SectionWrapper id="contact">
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/25 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-maroon-light/25 blur-3xl rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Contacto
            </h2>

            <p className="text-cream/70 mb-10 text-lg">
              ¿Interesado en trabajar juntos o discutir un proyecto de Data Engineering y Automatización? Escríbeme y responderé lo antes posible.
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

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Reason selector chips */}
            <div>
              <label className="block text-sm font-medium text-cream/70 mb-2">
                ¿Cuál es el motivo de tu contacto?
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setReason('work')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-300 ${reason === 'work'
                      ? 'bg-maroon/30 border-maroon-light text-cream shadow-[0_0_15px_rgba(186,18,60,0.15)] font-semibold'
                      : 'bg-dark/50 border-white/10 text-cream/70 hover:border-white/20 hover:text-cream'
                    }`}
                >
                  <Briefcase size={16} className={reason === 'work' ? 'text-maroon-light' : 'text-cream/50'} />
                  <span>Trabajo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReason('collab')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-300 ${reason === 'collab'
                      ? 'bg-maroon/30 border-maroon-light text-cream shadow-[0_0_15px_rgba(186,18,60,0.15)] font-semibold'
                      : 'bg-dark/50 border-white/10 text-cream/70 hover:border-white/20 hover:text-cream'
                    }`}
                >
                  <Code size={16} className={reason === 'collab' ? 'text-maroon-light' : 'text-cream/50'} />
                  <span>Proyecto</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReason('general')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-300 ${reason === 'general'
                      ? 'bg-maroon/30 border-maroon-light text-cream shadow-[0_0_15px_rgba(186,18,60,0.15)] font-semibold'
                      : 'bg-dark/50 border-white/10 text-cream/70 hover:border-white/20 hover:text-cream'
                    }`}
                >
                  <HelpCircle size={16} className={reason === 'general' ? 'text-maroon-light' : 'text-cream/50'} />
                  <span>Consulta</span>
                </button>
              </div>
            </div>

            {/* Name Input */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-cream/70 mb-1 group-focus-within:text-maroon-light transition-colors">
                Tu Nombre
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40 group-focus-within:text-maroon-light transition-colors" />
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-cream focus:outline-none focus:border-maroon-light focus:ring-1 focus:ring-maroon-light transition-all"
                  placeholder="Ej. Leonardo Pachas"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-cream/70 mb-1 group-focus-within:text-maroon-light transition-colors">
                Tu Correo
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40 group-focus-within:text-maroon-light transition-colors" />
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-cream focus:outline-none focus:border-maroon-light focus:ring-1 focus:ring-maroon-light transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="group">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="message" className="block text-sm font-medium text-cream/70 group-focus-within:text-maroon-light transition-colors">
                  Mensaje
                </label>
                <span className="text-xs text-cream/40 font-medium">
                  {message.length} / 500
                </span>
              </div>
              <div className="relative">
                <MessageSquare size={18} className="absolute left-4 top-4 text-cream/40 group-focus-within:text-maroon-light transition-colors" />
                <textarea
                  id="message"
                  required
                  rows={4}
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-cream focus:outline-none focus:border-maroon-light focus:ring-1 focus:ring-maroon-light transition-all resize-none min-h-[120px]"
                  placeholder={getPlaceholder()}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            {status === 'idle' && (
              <button
                type="submit"
                className="w-full py-4 bg-maroon hover:bg-maroon-light text-white font-bold rounded-xl transition-all shadow-lg shadow-maroon/25 flex justify-center items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enviar Mensaje</span>
                <Send size={18} />
              </button>
            )}

            {status === 'loading' && (
              <button
                type="button"
                disabled
                className="w-full py-4 bg-maroon/50 text-white/70 font-bold rounded-xl flex justify-center items-center gap-3 cursor-not-allowed"
              >
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Abriendo tu gestor de correo...</span>
              </button>
            )}

            {status === 'success' && (
              <button
                type="button"
                disabled
                className="w-full py-4 bg-emerald-800 text-white font-bold rounded-xl flex justify-center items-center gap-2 shadow-lg shadow-emerald-900/25"
              >
                <span>¡Redirigiendo!</span>
                <CheckCircle size={18} className="animate-bounce" />
              </button>
            )}
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}