const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-4">
          <span className="text-neogreen matrix-font text-lg">MatrixCode Numerology™</span>
          <span className="text-gray-600 hidden md:inline">|</span>
          <span className="text-gray-400">Descifra el Código Oculto de tu Vida</span>
        </div>
        <div className="text-center text-xs text-gray-500">
          © 2024 MatrixCode Numerology. Todos los derechos reservados. Tu código te pertenece, nosotros
          solo te ayudamos a descifrarlo.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
