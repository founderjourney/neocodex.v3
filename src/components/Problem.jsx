const painPoints = [
  {
    icon: '🔒',
    text: 'Sientes que un "programa oculto" corre en segundo plano y te impide avanzar.',
  },
  {
    icon: '🔄',
    text: 'Te enfrentas a bloqueos recurrentes sin entender su origen.',
  },
  {
    icon: '❓',
    text: 'Buscas respuestas sobre tu propósito y talentos, pero no sabes dónde encontrarlas.',
  },
  {
    icon: '🌀',
    text: 'La vida parece una serie de eventos aleatorios, sin un mapa claro a seguir.',
  },
];

// Generate binary background pattern
const generateBinaryRows = () => {
  const rows = [];
  for (let i = 0; i < 50; i++) {
    const row = Array(100)
      .fill(0)
      .map(() => (Math.random() > 0.5 ? '1' : '0'))
      .join(' ');
    rows.push(row);
  }
  return rows;
};

const Problem = () => {
  const binaryRows = generateBinaryRows();

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="matrix-font text-neogreen text-xs leading-tight">
          {binaryRows.map((row, i) => (
            <div key={i} className="whitespace-nowrap mb-1">
              {row}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">
            ¿Te sientes <span className="text-red-400">desconectado</span> de tu propósito y
            <span className="text-red-400"> estancado</span> en un ciclo que no comprendes?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Muchas personas navegan la vida sin entender por qué se repiten ciertos patrones o
            por qué les cuesta alcanzar su máximo potencial.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning box */}
        <div className="text-center bg-gradient-to-r from-red-900/20 to-orange-900/20 p-6 sm:p-8 rounded-xl border border-red-500/30">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-300 mb-4">
            Sin un mapa claro, sigues navegando a ciegas...
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Cada día que pasa sin descifrar tu código interno es una oportunidad perdida para
            activar tu verdadero potencial y vivir con propósito.
          </p>
        </div>

        {/* Matrix error message */}
        <div className="flex justify-center mt-12">
          <div className="matrix-font text-red-400 text-lg animate-pulse">
            &gt;&gt; ERROR: Código no encontrado...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
