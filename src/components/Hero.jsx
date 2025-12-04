import { useEffect, useState } from 'react';

const MatrixRain = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const chars = '01';
    const columnCount = 50;
    const newColumns = [];

    for (let i = 0; i < columnCount; i++) {
      const randomChars = Array(10)
        .fill(0)
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join('\n');

      newColumns.push({
        id: i,
        chars: randomChars,
        left: `${(i / columnCount) * 100}%`,
        animationDuration: `${Math.random() * 10 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    setColumns(newColumns);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {columns.map((col) => (
        <div
          key={col.id}
          className="absolute top-0 matrix-font text-neogreen text-sm whitespace-pre leading-loose"
          style={{
            left: col.left,
            animation: `matrix-fall ${col.animationDuration} linear infinite`,
            animationDelay: col.animationDelay,
            opacity: col.opacity,
          }}
        >
          {col.chars}
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <MatrixRain />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-[1]"></div>

      <div className="relative z-10 container-custom text-center py-20 px-4">
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black matrix-font matrix-glow text-neogreen mb-4 leading-tight">
            <span className="block sm:inline">MatrixCode</span>{' '}
            <span className="text-primary">Numerology</span>
            <span className="text-white text-lg sm:text-2xl md:text-3xl align-top">™</span>
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-neogreen to-primary mx-auto"></div>
        </div>

        {/* Main headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight max-w-5xl mx-auto px-2">
          Descifra el <span className="text-neogreen matrix-glow">Código Oculto</span> que{' '}
          <span className="text-primary">Gobierna tu Vida</span>
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-4 leading-relaxed px-2">
          Cada número es una línea de programación en tu sistema interior, cada patrón un algoritmo que dirige tus decisiones y experiencias.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed px-2">
          Con <span className="text-neogreen font-semibold">MatrixCode Numerology</span> accedes a tu código fuente,
          detectas anomalías, desprogramas creencias limitantes y actualizas tu "software del alma"
          para ejecutar tu máximo potencial.
        </p>

        {/* Loading animation */}
        <div className="mb-8 max-w-sm sm:max-w-md mx-auto px-4">
          <div className="matrix-font text-neogreen text-xs sm:text-sm mb-2 text-left">
            &gt;&gt; Iniciando decodificación...
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 sm:h-4 border border-neogreen/30">
            <div
              className="bg-gradient-to-r from-neogreen to-green-400 h-full rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="matrix-font text-neogreen text-xs sm:text-sm mt-2 text-right">
            [{'■'.repeat(Math.floor(progress / 10))}{'□'.repeat(10 - Math.floor(progress / 10))}] {progress}%
          </div>
        </div>

        {/* Binary code decoration */}
        <div className="matrix-font text-neogreen/30 text-xs mb-8 overflow-hidden whitespace-nowrap px-4">
          <span className="hidden sm:inline">1100011000001101111100111101101111000100001001010110110100001010100100001011100101111100111101100100</span>
          <span className="sm:hidden">110001100000110111110011110110</span>
        </div>

        {/* CTA Button */}
        <div className="mb-12 px-4">
          <button
            onClick={() => document.getElementById('cta-final').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base sm:text-xl md:text-2xl px-6 sm:px-10 py-4 sm:py-5 matrix-border w-full sm:w-auto"
          >
            DESCIFRA TU CÓDIGO AHORA
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neogreen rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neogreen rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
