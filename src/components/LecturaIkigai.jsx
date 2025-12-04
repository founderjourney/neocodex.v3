const sessions = [
  {
    number: 1,
    title: 'Lectura Numerológica Completa',
    duration: '30 minutos aprox.',
    icon: '🔬',
    description: [
      'Se explica en detalle el significado de cada número clave (destino, alma, personalidad, sombra, ciclos, etc.)',
      'Se entrega un PDF personalizado con la lectura completa',
    ],
    highlight: 'PDF personalizado incluido',
  },
  {
    number: 2,
    title: 'Sesión de Coaching (Socialización)',
    duration: 'Sesión en vivo',
    icon: '💬',
    description: [
      'Espacio para resolver dudas, inquietudes y preguntas que surjan de la lectura',
      'Se profundiza en la interpretación de los números aplicados a su vida real',
    ],
    highlight: 'Resolución de dudas personalizada',
  },
  {
    number: 3,
    title: 'Trazabilidad + Mapa de Guía',
    duration: 'Entrega final',
    icon: '🗺️',
    description: [
      'Se elabora y entrega un mapa de ruta personalizado para alinear talentos, propósito y misión',
      'Incluye recomendaciones, pasos concretos y dirección clara para avanzar',
    ],
    highlight: 'Mapa de ruta personalizado',
  },
];

const SessionCard = ({ session, index }) => {
  return (
    <div className="relative">
      {/* Connection line (not on last item) */}
      {index < sessions.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-neogreen to-transparent"></div>
      )}

      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border-2 border-gray-700 hover:border-neogreen/50 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-neogreen/10 h-full flex flex-col">
        {/* Session number badge */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neogreen to-green-500 flex items-center justify-center text-black font-black text-xl">
            {session.number}
          </div>
          <div>
            <span className="text-xs text-neogreen matrix-font">SESIÓN {session.number}</span>
            <p className="text-sm text-gray-400">{session.duration}</p>
          </div>
        </div>

        {/* Icon and title */}
        <div className="mb-6">
          <span className="text-4xl block mb-3">{session.icon}</span>
          <h3 className="text-xl md:text-2xl font-bold text-white">{session.title}</h3>
        </div>

        {/* Description list */}
        <ul className="space-y-4 mb-6 flex-grow">
          {session.description.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-neogreen mt-1">✓</span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>

        {/* Highlight badge */}
        <div className="mt-auto">
          <div className="bg-neogreen/10 border border-neogreen/30 rounded-lg px-4 py-2 text-center">
            <span className="text-neogreen text-sm font-semibold">{session.highlight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const LecturaIkigai = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neogreen/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container-custom px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-7xl">🧬</span>
          </div>
          <h2 className="section-title mb-4">
            Lectura <span className="text-neogreen matrix-glow">IKIGAI</span>
          </h2>
          <p className="text-sm text-neogreen matrix-font mb-4">
            // Lectura Especializada — 3 Sesiones
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>

          {/* Main tagline */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto italic">
            "Un viaje en tres etapas para descubrir quién eres, hacia dónde vas y cómo encaminar tu
            energía hacia tu verdadero propósito."
          </p>
        </div>

        {/* Description card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-2xl border border-neogreen/20 p-8 text-center backdrop-blur-sm">
            <p className="text-lg text-gray-200 leading-relaxed">
              La lectura IKIGAI es un{' '}
              <span className="text-neogreen font-bold">acompañamiento personalizado</span> de tres
              sesiones que revela tus talentos, tus dones naturales, tu propósito interno y tu
              misión de vida. Combina{' '}
              <span className="text-neogreen font-bold">
                numerología, análisis profundo y guía estratégica
              </span>
              .
            </p>
          </div>
        </div>

        {/* Sessions grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-neogreen matrix-font text-sm">// DESGLOSE DE SESIONES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {sessions.map((session, index) => (
              <SessionCard key={index} session={session} index={index} />
            ))}
          </div>
        </div>

        {/* What you get summary */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-2 border-neogreen/30 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Lo que descubrirás en tu viaje IKIGAI
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-neogreen/10 border border-neogreen/30 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <p className="text-gray-300 text-sm">Tus talentos naturales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-neogreen/10 border border-neogreen/30 flex items-center justify-center">
                  <span className="text-3xl">💎</span>
                </div>
                <p className="text-gray-300 text-sm">Tus dones únicos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-neogreen/10 border border-neogreen/30 flex items-center justify-center">
                  <span className="text-3xl">🧭</span>
                </div>
                <p className="text-gray-300 text-sm">Tu propósito interno</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-neogreen/10 border border-neogreen/30 flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <p className="text-gray-300 text-sm">Tu misión de vida</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => document.getElementById('cta-final').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-12 py-5 hover:scale-105 transition-transform shadow-lg shadow-neogreen/20"
          >
            COMENZAR MI VIAJE IKIGAI
          </button>
          <p className="text-gray-500 text-sm mt-4">3 sesiones de transformación personal</p>
        </div>

        {/* Matrix message */}
        <div className="text-center mt-12">
          <div className="matrix-font text-neogreen text-sm animate-pulse">
            &gt;&gt; Iniciando protocolo de descubrimiento IKIGAI...
          </div>
        </div>
      </div>
    </section>
  );
};

export default LecturaIkigai;
