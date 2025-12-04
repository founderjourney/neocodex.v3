const reveals = [
  {
    icon: '🎯',
    title: 'Carreras afines',
    description: 'Profesiones que resuenan con tu energía numerológica única',
  },
  {
    icon: '🔍',
    title: 'Áreas de especialización',
    description: 'Nichos y campos donde tu potencial brilla con más fuerza',
  },
  {
    icon: '🔄',
    title: 'Enfoque para tu profesión actual',
    description: 'Si ya tienes carrera: qué rama o variante se ajusta mejor a tu diseño numérico',
  },
  {
    icon: '💪',
    title: 'Fortalezas laborales',
    description: 'Tus talentos naturales aplicados al campo profesional',
  },
];

const OrientacionProfesional = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 container-custom px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-6xl">💼</span>
          </div>
          <h2 className="section-title mb-4">
            <span className="text-neogreen matrix-glow">Orientación Profesional</span>
          </h2>
          <p className="text-sm text-neogreen matrix-font mb-4">// Lectura Rápida</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto">
          {/* Description card */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border-2 border-neogreen/30 p-8 md:p-12 mb-12 backdrop-blur-sm">
            <div className="text-center mb-10">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Una lectura rápida diseñada para{' '}
                <span className="text-neogreen font-bold">orientarte profesionalmente</span> según
                tu código numerológico. Ideal si estás{' '}
                <span className="text-neogreen font-bold">eligiendo carrera</span>, pensando en un{' '}
                <span className="text-neogreen font-bold">cambio profesional</span> o deseas saber
                hacia qué área dirigir tu trabajo actual.
              </p>
            </div>

            {/* Who is this for */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-gray-900/50 px-5 py-3 rounded-full border border-gray-700/50">
                <span className="text-gray-300 text-sm">
                  🎓 Eligiendo carrera universitaria
                </span>
              </div>
              <div className="bg-gray-900/50 px-5 py-3 rounded-full border border-gray-700/50">
                <span className="text-gray-300 text-sm">🔄 Considerando un cambio de trabajo</span>
              </div>
              <div className="bg-gray-900/50 px-5 py-3 rounded-full border border-gray-700/50">
                <span className="text-gray-300 text-sm">📈 Buscando especialización</span>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px bg-neogreen/30 flex-grow"></div>
              <span className="text-neogreen matrix-font text-sm">// LO QUE REVELA</span>
              <div className="h-px bg-neogreen/30 flex-grow"></div>
            </div>

            {/* What it reveals grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {reveals.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-neogreen/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-neogreen/10 border border-neogreen/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefit callout */}
            <div className="bg-gradient-to-r from-neogreen/10 to-primary/10 rounded-xl border border-neogreen/20 p-6 text-center mb-10">
              <p className="text-gray-200">
                <span className="text-neogreen font-bold">Nota:</span> Esta lectura es especialmente
                útil para quienes sienten que están en una{' '}
                <span className="text-white font-semibold">encrucijada profesional</span> o necesitan{' '}
                <span className="text-white font-semibold">claridad</span> sobre qué dirección tomar
                en su vida laboral.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => document.getElementById('cta-final').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-10 py-4 hover:scale-105 transition-transform"
              >
                DESCUBRIR MI CAMINO PROFESIONAL
              </button>
            </div>
          </div>
        </div>

        {/* Matrix message */}
        <div className="text-center mt-8">
          <div className="matrix-font text-neogreen text-sm animate-pulse">
            &gt;&gt; Analizando código de carrera profesional...
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrientacionProfesional;
