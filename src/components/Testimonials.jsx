const stats = [
  { icon: '🔓', value: '2,847', label: 'Códigos Descifrados' },
  { icon: '⭐', value: '97%', label: 'Satisfacción Total' },
  { icon: '🚀', value: '89%', label: 'Cambios en 30 días' },
  { icon: '💡', value: '24/7', label: 'Soporte Matrix' },
];

const testimonials = [
  {
    initials: 'MG',
    name: 'María González',
    role: 'Empresaria',
    id: 'MCN-2847',
    text: '"Después de descifrar mi código con MatrixCode Numerology, finalmente entendí por qué me sentía atrapada en ciclos repetitivos. Ahora vivo con propósito y claridad total."',
  },
  {
    initials: 'CV',
    name: 'Carlos Vega',
    role: 'Artista',
    id: 'MCN-9134',
    text: '"El proceso fue como despertar del Matrix. Pude ver patrones en mi vida que antes eran invisibles. Mi creatividad se disparó cuando activé mi verdadero código."',
  },
  {
    initials: 'AS',
    name: 'Ana Silva',
    role: 'Coach',
    id: 'MCN-5629',
    text: '"Como profesional del desarrollo personal, puedo confirmar que este método va más allá de todo lo que había visto. Es ciencia aplicada al autoconocimiento."',
  },
  {
    initials: 'RC',
    name: 'Roberto Chen',
    role: 'Ingeniero',
    id: 'MCN-7831',
    text: '"Siendo una persona muy analítica, me sorprendió la precisión matemática del sistema. Los resultados fueron tan exactos que me dieron escalofríos."',
  },
];

const trustBadges = [
  { icon: '🛡️', label: '100% Seguro' },
  { icon: '🔒', label: 'Datos Protegidos' },
  { icon: '✅', label: 'Verificado' },
  { icon: '⚡', label: 'Resultados Inmediatos' },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array(64)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="matrix-font text-neogreen text-xs animate-pulse">
                {Math.random() > 0.5 ? '░' : '█'}
              </div>
            ))}
        </div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Quienes ya han <span className="text-neogreen matrix-glow">descifrado su código</span>{' '}
            lo confirman.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Miles de personas han despertado de su Matrix personal y ahora viven con propósito
            total.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-neogreen/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-neogreen matrix-font mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 hover:border-neogreen/30 transition-all duration-300 hover:scale-105"
            >
              {/* Avatar and info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neogreen/20 to-primary/20 rounded-full flex items-center justify-center border border-neogreen/50 mr-4">
                  <span className="text-neogreen font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-neogreen matrix-font">ID: {testimonial.id}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 leading-relaxed italic group-hover:text-white transition-colors duration-300">
                {testimonial.text}
              </p>

              {/* Verification badge */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="matrix-font text-neogreen text-xs opacity-60">
                  &gt;&gt; Testimonio verificado y autenticado
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700"
            >
              <span>{badge.icon}</span>
              <span className="text-sm text-gray-300">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Social proof message */}
        <div className="text-center">
          <div className="matrix-font text-neogreen text-sm animate-pulse">
            &gt;&gt; Únete a la comunidad despierta...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
