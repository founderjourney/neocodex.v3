const packageItems = [
  {
    icon: '🧬',
    title: 'Lectura IKIGAI',
    description: '3 sesiones: Lectura Numerológica Completa + Coaching + Mapa de Guía personalizado.',
    value: '$70',
  },
  {
    icon: '💼',
    title: 'Orientación Profesional',
    description: 'Lectura rápida para descubrir carreras afines y tu camino profesional ideal.',
    value: '$50',
  },
];

const bonuses = [
  {
    icon: '⚡',
    title: 'BONUS: Plan de acción',
    description: '2 preguntas rápidas con respuestas directas basadas en tu código numerológico.',
    value: '+$47',
  },
];

const Offer = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Matrix background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="matrix-font text-neogreen text-xs">
          {Array(30)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="whitespace-nowrap mb-1">
                {Array(150)
                  .fill(0)
                  .map(() => {
                    const chars = '░░░░█░░░░█░█░░██░░░░░░░██░░█░░';
                    return chars[Math.floor(Math.random() * chars.length)];
                  })
                  .join('')}
              </div>
            ))}
        </div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Esto es lo que obtienes hoy al{' '}
            <span className="text-neogreen matrix-glow">descifrar tu código</span> con nosotros.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Con MatrixCode Numerology no solo obtienes una lectura, sino una verdadera transformación.
            Esto es lo que incluye tu viaje de autoconocimiento:
          </p>
        </div>

        {/* Package card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-2 border-neogreen/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-neogreen/20 to-primary/20 p-6 text-center border-b border-neogreen/30">
              <div className="text-sm text-gray-400 mb-2">PAQUETE COMPLETO</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                🔓 DECODIFICACIÓN COMPLETA
              </h3>
            </div>

            {/* Package items */}
            <div className="p-6 md:p-8 space-y-6">
              {packageItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-black/30 rounded-xl border border-gray-700 hover:border-neogreen/30 transition-all duration-300"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <div className="text-neogreen font-bold">Valor: {item.value}</div>
                </div>
              ))}

              {/* Bonuses section */}
              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-xl font-bold text-yellow-400 mb-4 text-center">
                  🎁 BONUSES EXCLUSIVOS:
                </h4>
                {bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-yellow-900/10 rounded-xl border border-yellow-500/30 mb-4"
                  >
                    <div className="text-3xl">{bonus.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-yellow-400 mb-1">{bonus.title}</h4>
                      <p className="text-gray-400 text-sm">{bonus.description}</p>
                    </div>
                    <div className="text-yellow-400 font-bold">{bonus.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price section */}
            <div className="bg-gradient-to-r from-gray-900 to-black p-6 md:p-8 text-center border-t border-neogreen/30">
              <div className="mb-4">
                <div className="text-gray-400 mb-2">VALOR TOTAL NORMAL:</div>
                <div className="text-3xl font-bold text-gray-500 line-through">$167</div>
                <div className="text-sm text-gray-500">Precio individual de todos los componentes</div>
              </div>

              <div className="mb-6">
                <div className="text-neogreen text-sm font-bold mb-2">PRECIO ESPECIAL HOY</div>
                <div className="text-6xl font-black text-neogreen matrix-glow">$97</div>
                <div className="text-yellow-400 font-semibold mt-2">Ahorro de $70</div>
              </div>

              {/* Countdown placeholder */}
              <div className="text-sm text-gray-400 mb-6">
                ⏰ Esta oferta caduca en: <span className="text-red-400 font-bold">47:59:32</span>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('cta-final').scrollIntoView({ behavior: 'smooth' })}
                className="w-full max-w-md mx-auto block px-8 py-5 bg-gradient-to-r from-neogreen to-green-400 text-black font-black text-xl rounded-xl matrix-border hover:shadow-2xl hover:shadow-neogreen/50 transition-all duration-300 transform hover:scale-105"
              >
                🚀 SÍ, QUIERO DESCUBRIR MI CÓDIGO AHORA
              </button>

              {/* Trust indicators */}
              <div className="mt-6 text-sm text-gray-400">
                💳 Pago seguro • 🔒 SSL Encriptado
              </div>
              <div className="text-xs text-gray-500 mt-2">
                * Acceso inmediato después del pago
              </div>

              {/* Payment methods */}
              <div className="mt-4 text-sm text-gray-400">
                Métodos de pago aceptados: 💳🏦📱💰
              </div>
            </div>
          </div>

          {/* Scarcity warning */}
          <div className="mt-8 text-center bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-500/50">
            <div className="text-xl font-bold text-red-400 mb-2">
              ⚠️ ADVERTENCIA: Solo quedan 27 cupos disponibles
            </div>
            <p className="text-gray-300">
              Debido a la naturaleza personalizada del proceso y para garantizar la calidad,
              limitamos la cantidad de decodificaciones por mes. Una vez agotados los cupos,
              tendrás que esperar al siguiente ciclo.
            </p>
          </div>

          {/* Matrix messages */}
          <div className="mt-8 text-center">
            <div className="matrix-font text-neogreen text-sm animate-pulse mb-2">
              &gt;&gt; Inicializando proceso de decodificación...
            </div>
            <div className="matrix-font text-primary text-sm">
              &gt;&gt; Esperando confirmación del usuario...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
