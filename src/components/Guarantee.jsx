const guaranteeFeatures = [
  {
    icon: '⏰',
    title: '60 Días Completos',
    description: 'Tiempo suficiente para evaluar tu transformación',
  },
  {
    icon: '💯',
    title: 'Sin Preguntas',
    description: 'Proceso de reembolso simple y directo',
  },
  {
    icon: '🤝',
    title: 'Zero Riesgo',
    description: 'Tu inversión está completamente protegida',
  },
];

const whyGuarantee = [
  {
    icon: '📊',
    title: 'Confianza en Resultados',
    description:
      'El 97% de nuestros clientes experimenta claridad transformadora en las primeras 48 horas. Sabemos que el método funciona.',
  },
  {
    icon: '🎯',
    title: 'Precisión del Sistema',
    description:
      'Nuestro algoritmo de decodificación ha sido refinado con miles de casos. La precisión es matemáticamente predecible.',
  },
];

const trustIndicators = [
  { icon: '🔒', label: 'SSL Seguro' },
  { icon: '🏆', label: '5 Años Online' },
  { icon: '⭐', label: '4.9/5 Rating' },
  { icon: '💝', label: 'Reembolsos <3%' },
];

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-neogreen/20 rounded-full mb-6 border-2 border-neogreen">
            <span className="text-4xl">🛡️</span>
          </div>
          <h2 className="section-title">
            Tu inversión en autoconocimiento está{' '}
            <span className="text-neogreen matrix-glow">100% protegida.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos tan seguros del poder transformador de MatrixCode Numerology que te ofrecemos una
            garantía completa.
          </p>
        </div>

        {/* Main guarantee card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-neogreen/10 to-primary/10 p-8 rounded-2xl border-2 border-neogreen matrix-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-8xl">🛡️</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-neogreen">✅</span> GARANTÍA DE SATISFACCIÓN TOTAL
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Si después de tu sesión no sientes que has recibido una claridad profunda o si
                  el mapa no resuena contigo, te devolvemos el{' '}
                  <span className="text-neogreen font-bold">100% de tu dinero</span> sin
                  preguntas.
                </p>
                <p className="text-primary font-semibold mt-4">
                  Tu única inversión es tu futuro.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {guaranteeFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why we offer this guarantee */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-center text-gray-300 mb-8">
            ¿Por qué ofrecemos esta garantía tan generosa?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whyGuarantee.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-neogreen mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="max-w-4xl mx-auto">
          <h4 className="text-center text-gray-400 mb-6">Indicadores de Confianza</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700"
              >
                <span>{indicator.icon}</span>
                <span className="text-sm text-gray-300">{indicator.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Matrix message */}
        <div className="text-center mt-12">
          <div className="matrix-font text-neogreen text-sm animate-pulse">
            &gt;&gt; Garantía activada y verificada...
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Protegido por nuestra garantía de satisfacción total
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
