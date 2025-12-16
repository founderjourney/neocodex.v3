import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 31,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
      <div className="bg-black/50 p-4 rounded-lg border border-red-500/50">
        <div className="text-3xl font-bold text-red-400 matrix-font">
          {String(time.hours).padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-400">HORAS</div>
      </div>
      <div className="flex items-center text-red-400 text-2xl">:</div>
      <div className="bg-black/50 p-4 rounded-lg border border-red-500/50">
        <div className="text-3xl font-bold text-red-400 matrix-font">
          {String(time.minutes).padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-400">MINUTOS</div>
      </div>
      <div className="flex items-center text-red-400 text-2xl">:</div>
      <div className="bg-black/50 p-4 rounded-lg border border-red-500/50">
        <div className="text-3xl font-bold text-red-400 matrix-font animate-pulse">
          {String(time.seconds).padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-400">SEGUNDOS</div>
      </div>
    </div>
  );
};

// Generate matrix background characters
const generateMatrixChars = () => {
  const chars = '0▓▓1░1▓▓░10110▓01░░▓0▓░▓▒▓1░1░█▒▒▓0█00░▓█11▓░██1▓▓░▒▓██░0█▓1█1▒00░░0▓░░░░█▓1░▒▒█1▓█▓00▒██0▓▒1░1░10█░░0▒█▒11▓1░110▓█1▒▓001░0▒1█▓▒0▓1▒1▒1░█001▒▓1█1▒00';
  const rows = [];
  for (let i = 0; i < 50; i++) {
    let row = '';
    for (let j = 0; j < 150; j++) {
      row += chars[Math.floor(Math.random() * chars.length)] + ' ';
    }
    rows.push(row);
  }
  return rows;
};

const Pricing = () => {
  const matrixRows = generateMatrixChars();

  return (
    <section id="cta-final" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated matrix background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="matrix-font text-neogreen text-xs">
          {matrixRows.map((row, i) => (
            <div
              key={i}
              className="animate-pulse whitespace-nowrap"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {row}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Urgency header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            ⚠️ ÚLTIMA OPORTUNIDAD ⚠️
          </div>
          <h2 className="section-title">
            ¡No esperes más! Es momento de{' '}
            <span className="text-neogreen matrix-glow">decodificar tu vida</span> y tomar el
            control.
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-neogreen mx-auto mb-8"></div>
        </div>

        {/* Main copy */}
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
            Cada día que vives sin entender tu{' '}
            <span className="text-red-400 font-semibold">programación interna</span> es una
            oportunidad perdida para activar tu verdadero potencial.
            <span className="text-neogreen font-semibold"> MatrixCode Numerology</span> te da las llaves
            para abrir la puerta de esa claridad.
          </p>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-yellow-500/50 max-w-3xl mx-auto">
            <p className="text-xl text-yellow-300 font-semibold">
              "El momento perfecto para plantar un árbol fue hace 20 años. El segundo mejor
              momento es AHORA."
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-red-400 mb-6">
            Esta oferta especial expira en:
          </h3>
          <CountdownTimer />
        </div>

        {/* Pricing card */}
        <div className="bg-gradient-to-br from-neogreen/10 to-primary/10 p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-neogreen matrix-border mb-8 sm:mb-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🔓 DECODIFICACIÓN COMPLETA MATRIXCODE
          </h3>

          {/* Price */}
          <div className="mb-8">
            <div className="text-lg text-gray-400 line-through mb-2">Precio normal: $167</div>
            <div className="text-6xl font-black text-neogreen matrix-glow mb-4">$97</div>
            <div className="text-lg text-yellow-400 font-semibold">
              Ahorro total: $70 (42% de descuento)
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span className="text-neogreen">✅</span>
              <span>Lectura IKIGAI</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span className="text-neogreen">✅</span>
              <span>Orientación Profesional</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-yellow-400">
              <span className="text-yellow-400">🎁</span>
              <span>BONUS: Plan de acción</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/573165895763?text=Hola%2C%20quiero%20descubrir%20mi%20c%C3%B3digo%20con%20MatrixCode%20Numerology"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md mx-auto block px-8 py-6 bg-gradient-to-r from-neogreen to-green-400 text-black font-black text-2xl rounded-xl matrix-border hover:shadow-2xl hover:shadow-neogreen/50 transition-all duration-300 transform hover:scale-105 mb-6 text-center"
          >
            🚀 SÍ, QUIERO DESCUBRIR MI CÓDIGO AHORA
          </a>

          {/* Trust badges */}
          <div className="text-sm text-gray-400 mb-4">
            🔒 Pago 100% seguro • ⚡ Acceso inmediato • 🛡️ Garantía total
          </div>

          {/* Scarcity */}
          <div className="text-xs text-red-400 animate-pulse">
            ⚠️ Solo quedan 12 cupos disponibles en este ciclo
          </div>
        </div>

        {/* Final message */}
        <div className="text-center bg-gradient-to-r from-red-900/30 to-black/50 p-8 rounded-xl border border-red-500/50 max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold text-red-300 mb-4">
            Esta es tu señal del universo...
          </h4>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            No es casualidad que hayas llegado hasta aquí. Tu Matrix personal te está llamando a
            despertar. El código de tu vida está esperando ser descifrado.
            <span className="text-neogreen font-semibold">
              {' '}
              La pregunta es: ¿estás listo para tomar la píldora roja?
            </span>
          </p>
        </div>

        {/* Matrix messages */}
        <div className="mt-16 text-center">
          <div className="matrix-font text-neogreen text-lg animate-pulse mb-4">
            &gt;&gt; Esperando confirmación del usuario...
          </div>
          <div className="matrix-font text-primary text-sm">
            &gt;&gt; Neo, es hora de despertar...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
