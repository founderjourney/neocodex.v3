const services = [
  {
    icon: '⚡',
    name: 'Código Express',
    tagline: '2 preguntas rápidas',
    price: '$47',
    originalPrice: '$97',
    duration: 'Respuesta inmediata',
    features: [
      '2 preguntas específicas',
      'Respuestas directas y claras',
      'Basada en tu código numerológico',
      'Ideal para dudas puntuales',
    ],
    cta: 'OBTENER MI CÓDIGO EXPRESS',
    highlight: false,
    color: 'neogreen',
  },
  {
    icon: '🧬',
    name: 'Lectura IKIGAI',
    tagline: '3 sesiones de transformación',
    price: '$297',
    originalPrice: '$497',
    duration: '3 sesiones',
    features: [
      'Lectura Numerológica Completa + PDF',
      'Sesión de Coaching personalizada',
      'Mapa de Guía y trazabilidad',
      'Descubre talentos y propósito',
      'Misión de vida revelada',
    ],
    cta: 'COMENZAR MI VIAJE IKIGAI',
    highlight: true,
    color: 'neogreen',
  },
  {
    icon: '💼',
    name: 'Orientación Profesional',
    tagline: 'Lectura rápida vocacional',
    price: '$97',
    originalPrice: '$197',
    duration: 'Lectura rápida',
    features: [
      'Carreras afines a tu código',
      'Áreas de especialización',
      'Fortalezas laborales',
      'Ideal para cambios de carrera',
    ],
    cta: 'DESCUBRIR MI CAMINO',
    highlight: false,
    color: 'primary',
  },
];

const ServiceCard = ({ service, index }) => {
  const borderColor = service.highlight
    ? 'border-neogreen'
    : 'border-gray-700 hover:border-neogreen/50';

  const bgGlow = service.highlight
    ? 'shadow-lg shadow-neogreen/20'
    : '';

  return (
    <div
      className={`relative flex flex-col p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-2 ${borderColor} ${bgGlow} transition-all duration-300 hover:scale-105`}
    >
      {/* Popular badge */}
      {service.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-neogreen to-green-400 text-black font-bold px-4 py-1 rounded-full text-sm">
            MÁS POPULAR
          </span>
        </div>
      )}

      {/* Icon and name */}
      <div className="text-center mb-4">
        <div className="text-5xl mb-3">{service.icon}</div>
        <h3 className="text-xl font-bold text-white">{service.name}</h3>
        <p className="text-sm text-gray-400 mt-1">{service.tagline}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-4">
        {service.originalPrice && (
          <span className="text-gray-500 line-through text-lg mr-2">
            {service.originalPrice}
          </span>
        )}
        <span
          className={`text-3xl font-black ${
            service.price === 'GRATIS' ? 'text-neogreen' : 'text-white'
          }`}
        >
          {service.price}
        </span>
        <p className="text-sm text-gray-400 mt-1">{service.duration}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-grow">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-2 text-sm">
            <span className="text-neogreen mt-0.5">✓</span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => document.getElementById('cta-final').scrollIntoView({ behavior: 'smooth' })}
        className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
          service.highlight
            ? 'bg-gradient-to-r from-neogreen to-green-400 text-black hover:shadow-lg hover:shadow-neogreen/50'
            : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
        }`}
      >
        {service.cta}
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array(144)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="matrix-font text-neogreen text-xs animate-pulse">
                {Math.random() > 0.5 ? '░' : '█'}
              </div>
            ))}
        </div>
      </div>

      <div className="relative z-10 container-custom px-4">
        {/* Section header */}
        <div className="text-center mb-12 px-2">
          <h2 className="section-title">
            Elige tu <span className="text-neogreen matrix-glow">nivel de acceso</span> al código
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Desde consultas rápidas hasta una transformación completa en 3 sesiones.
            Cada nivel te acerca más a tu verdadero potencial.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-neogreen/30 max-w-3xl mx-auto">
            <p className="text-gray-300">
              <span className="text-neogreen font-semibold">¿No sabes cuál elegir?</span> Empieza
              con el <span className="text-neogreen">Código Express</span> para resolver tus dudas
              puntuales o ve directo a la <span className="text-neogreen">Lectura IKIGAI</span> para
              una transformación completa.
            </p>
          </div>
        </div>

        {/* Matrix message */}
        <div className="text-center mt-8">
          <div className="matrix-font text-neogreen text-sm animate-pulse">
            &gt;&gt; Selecciona tu nivel de acceso...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
