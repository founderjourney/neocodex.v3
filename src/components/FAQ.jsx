import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué información necesito proporcionar?',
    answer:
      'Solo tu fecha de nacimiento y tu nombre completo. Estos son los datos esenciales para acceder a tu programación personal. No necesitas conocimientos previos ni preparación especial.',
  },
  {
    question: '¿La numerología es adivinación o predicción del futuro?',
    answer:
      'No, la numerología es un sistema de interpretación de arquetipos y energías basado en patrones matemáticos. No predice el futuro, sino que te ofrece un mapa para que tomes decisiones más conscientes y alineadas con tu ser. Es como un GPS para tu vida interior.',
  },
  {
    question: '¿Qué resultados puedo esperar?',
    answer:
      'Un autoconocimiento profundo y revelador, claridad para tomar decisiones alineadas con tus ciclos, y las herramientas para reprogramar patrones y activar tu máximo potencial. El 97% de nuestros clientes reporta cambios significativos en las primeras 48 horas.',
  },
  {
    question: '¿Cuánto tiempo toma el proceso?',
    answer:
      'La decodificación inicial toma entre 2-3 horas. Recibes tu análisis completo en 24 horas, y la sesión de coaching dura 90 minutos. El proceso de transformación es inmediato, pero los resultados se profundizan en las siguientes semanas.',
  },
  {
    question: '¿Funciona para cualquier persona?',
    answer:
      'Sí, el sistema funciona independientemente de tu edad, profesión o situación actual. Los patrones numerológicos son universales y cada persona tiene un código único que puede ser descifrado sin importar su contexto de vida.',
  },
  {
    question: '¿Qué pasa si no me satisface?',
    answer:
      'Tienes 60 días para evaluar tu experiencia. Si no sientes que has recibido claridad profunda o el mapa no resuena contigo, te devolvemos el 100% de tu dinero sin preguntas. Tu única inversión es tu futuro.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Absolutamente. Utilizamos encriptación SSL de grado bancario y nunca compartimos tu información con terceros. Solo usamos tu fecha de nacimiento y nombre para el análisis numerológico. Tu privacidad es nuestra prioridad.',
  },
  {
    question: '¿En qué se diferencia de otros métodos de autoconocimiento?',
    answer:
      'MatrixCode Numerology combina sabiduría ancestral con precisión matemática. No es psicología tradicional ni coaching genérico. Es un sistema específico que revela patrones ocultos en tu programación personal usando tu información de nacimiento como código fuente.',
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden mb-4 hover:border-neogreen/30 transition-all duration-300">
      <button
        className="w-full p-6 text-left flex items-center justify-between bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:from-gray-800/70 hover:to-gray-900/70 transition-all duration-300"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
        <span
          className={`text-neogreen text-2xl transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 bg-black/30 text-gray-300 leading-relaxed">{faq.answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Question marks background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="grid grid-cols-10 gap-8 p-8">
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="text-4xl text-neogreen animate-pulse">
                ?
              </div>
            ))}
        </div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            ¿Aún tienes <span className="text-neogreen matrix-glow">dudas</span>? Aquí están las
            respuestas.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Resolvemos las preguntas más frecuentes para que puedas tomar una decisión informada
            sobre tu proceso de decodificación.
          </p>
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-neogreen/30">
            <h3 className="text-xl font-bold text-white mb-4">¿Tienes una pregunta específica?</h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de soporte está disponible 24/7 para resolver cualquier duda
              adicional.
            </p>
            <button className="btn-secondary">Contactar Soporte</button>
          </div>
        </div>

        {/* Matrix messages */}
        <div className="text-center mt-12">
          <div className="matrix-font text-neogreen text-sm animate-pulse mb-2">
            &gt;&gt; Todas las dudas resueltas...
          </div>
          <div className="matrix-font text-primary text-sm">
            &gt;&gt; Sistema listo para decodificación...
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
