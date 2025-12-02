const benefits = [
  {
    icon: '🎯',
    title: 'Claridad en tu Propósito',
    description: 'Un mapa claro de tu propósito y ciclos de vida.',
  },
  {
    icon: '⚡',
    title: 'Acción Consciente',
    description: 'Un plan para actuar con mayor claridad, sincronía y poder.',
  },
  {
    icon: '🚀',
    title: 'Activación de tu Potencial',
    description: 'Reprogramación de patrones para activar tus dones ocultos.',
  },
];

const processSteps = [
  { number: '01', label: 'INPUT DATA', sublabel: 'Fecha + Nombre', color: 'neogreen' },
  { number: '02', label: 'PROCESSING', sublabel: 'Algoritmo Matrix', color: 'primary' },
  { number: '03', label: 'OUTPUT', sublabel: 'Código Revelado', color: 'silver' },
];

// Generate binary pattern for background
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

const Solution = () => {
  const binaryRows = generateBinaryRows();

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Binary background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="matrix-font text-neogreen text-xs">
          {binaryRows.map((row, i) => (
            <div
              key={i}
              className="mb-1 animate-pulse whitespace-nowrap"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {row}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Presentamos <span className="text-neogreen matrix-glow">MatrixCode Numerology</span>, la clave
            que descifra tu <span className="text-primary">"Matrix"</span> personal y transforma
            el caos en claridad.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>
        </div>

        {/* Main description */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-neogreen/30 mb-8">
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Nuestro método único utiliza la{' '}
              <span className="text-neogreen font-semibold">numerología</span> como un software
              de decodificación para revelar los patrones invisibles de tu programación interior.
              Convertimos el aparente azar en un mapa de acción, permitiéndote comprender quién
              eres, cuáles son tus talentos y los ciclos que definen tu vida.
            </p>
          </div>

          <div className="matrix-bg p-6 sm:p-8 rounded-xl matrix-border">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              El proceso es como un{' '}
              <span className="text-primary font-semibold">hackeo ético</span> de tu "Matrix"
              personal. Tomamos tus datos base, como tu fecha de nacimiento y nombre, y los
              procesamos para revelar
              <span className="text-neogreen font-semibold"> números arquetípicos</span> y
              patrones ocultos. Al detectar anomalías, como vacíos o repeticiones en tu código,
              podemos actualizar tu
              <span className="text-primary font-semibold"> "software interior"</span> con
              ejercicios prácticos y conciencia aplicada, guiándote hacia una vida más alineada
              y con mayor poder.
            </p>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-neogreen">Qué obtendrás</span> con MatrixCode Numerology:
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-6 sm:p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 hover:border-neogreen/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-neogreen mb-4 group-hover:matrix-glow transition-all duration-300">
                  {benefit.title}
                </h4>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process diagram */}
        <div className="text-center bg-black/50 p-6 sm:p-8 rounded-xl border border-neogreen/50">
          <h4 className="text-2xl font-bold text-neogreen mb-6 matrix-font">
            PROCESO DE DECODIFICACIÓN
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border"
                    style={{
                      backgroundColor:
                        step.color === 'neogreen'
                          ? 'rgba(0, 255, 65, 0.2)'
                          : step.color === 'primary'
                          ? 'rgba(59, 130, 246, 0.2)'
                          : 'rgba(192, 192, 192, 0.2)',
                      borderColor:
                        step.color === 'neogreen'
                          ? '#00FF41'
                          : step.color === 'primary'
                          ? '#3B82F6'
                          : '#C0C0C0',
                    }}
                  >
                    <span
                      className="font-bold"
                      style={{
                        color:
                          step.color === 'neogreen'
                            ? '#00FF41'
                            : step.color === 'primary'
                            ? '#3B82F6'
                            : '#C0C0C0',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{step.label}</p>
                  <p
                    className="text-xs mt-1"
                    style={{
                      color:
                        step.color === 'neogreen'
                          ? '#00FF41'
                          : step.color === 'primary'
                          ? '#3B82F6'
                          : '#C0C0C0',
                    }}
                  >
                    {step.sublabel}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div
                    className="text-2xl animate-pulse mx-4 hidden md:block"
                    style={{
                      color:
                        step.color === 'neogreen'
                          ? '#00FF41'
                          : step.color === 'primary'
                          ? '#3B82F6'
                          : '#C0C0C0',
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 matrix-font text-neogreen text-sm animate-pulse">
            &gt;&gt; Decodificación completa en progreso...
          </div>
        </div>

        {/* Matrix pattern decoration */}
        <div className="mt-12 grid grid-cols-8 gap-2 opacity-20">
          {Array(64)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="matrix-font text-neogreen text-xs animate-pulse text-center">
                {Math.random() > 0.5 ? '░' : '█'}
              </div>
            ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg sm:text-xl matrix-border">
            🔓 QUIERO DESCIFRAR MI CÓDIGO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
