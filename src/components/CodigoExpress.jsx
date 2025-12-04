const exampleQuestions = [
  '¿Qué bloqueo debo resolver para avanzar en este momento de mi vida?',
  '¿Somos compatibles energéticamente mi pareja y yo?',
  '¿Qué decisión me alinea más con mi propósito: A o B?',
  '¿Qué energía está influyendo en mi situación actual?',
  '¿Qué debo aprender de este vínculo o experiencia?',
];

const CodigoExpress = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Binary background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 gap-2 h-full">
          {Array(200)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="matrix-font text-neogreen text-xs">
                {Math.random() > 0.5 ? '01' : '10'}
              </div>
            ))}
        </div>
      </div>

      <div className="relative z-10 container-custom px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-6xl">⚡</span>
          </div>
          <h2 className="section-title mb-4">
            <span className="text-neogreen matrix-glow">Código Express</span>
          </h2>
          <p className="text-sm text-neogreen matrix-font mb-4">// 2 preguntas rápidas</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>
        </div>

        {/* Main content card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border-2 border-neogreen/30 p-8 md:p-12 backdrop-blur-sm">
            {/* Description */}
            <div className="text-center mb-10">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Haz <span className="text-neogreen font-bold">dos preguntas específicas</span> sobre
                lo que hoy quieres claridad. Este módulo es ideal para dudas puntuales relacionadas
                con tus procesos personales, relaciones, decisiones o bloqueos. Recibirás una{' '}
                <span className="text-neogreen font-bold">respuesta directa</span> basada en tu
                código numerológico.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px bg-neogreen/30 flex-grow"></div>
              <span className="text-neogreen matrix-font text-sm">// EJEMPLOS</span>
              <div className="h-px bg-neogreen/30 flex-grow"></div>
            </div>

            {/* Help text */}
            <div className="text-center mb-6">
              <p className="text-gray-400 italic">
                Si no sabes qué preguntar, aquí tienes algunas ideas:
              </p>
            </div>

            {/* Example questions */}
            <div className="space-y-4 mb-10">
              {exampleQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-neogreen/30 transition-all duration-300 group"
                >
                  <span className="text-neogreen font-bold mt-0.5 group-hover:scale-110 transition-transform">
                    &gt;
                  </span>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    "{question}"
                  </p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
                <span className="text-2xl mb-2 block">🎯</span>
                <p className="text-sm text-gray-300">Respuestas directas y claras</p>
              </div>
              <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
                <span className="text-2xl mb-2 block">⏱️</span>
                <p className="text-sm text-gray-300">Lectura rápida y puntual</p>
              </div>
              <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
                <span className="text-2xl mb-2 block">🔮</span>
                <p className="text-sm text-gray-300">Basada en tu código numerológico</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => document.getElementById('cta-final').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-10 py-4 hover:scale-105 transition-transform"
              >
                OBTENER MI CÓDIGO EXPRESS
              </button>
            </div>
          </div>
        </div>

        {/* Matrix message */}
        <div className="text-center mt-8">
          <div className="matrix-font text-neogreen text-sm animate-pulse">
            &gt;&gt; Cargando módulo de consulta rápida...
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodigoExpress;
