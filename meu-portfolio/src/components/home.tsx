import React from 'react';
import '../index.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="text-center p-10 bg-gray-800 ">
      <h1 className="text-5xl font-bold mb-4 text-yellow-400 margin-top-home">Paulo Almeida</h1>
      <p className="text-lg text-white mt-10">Desenvolvedor Full Stack | Front-end | Designer Web | UX/UI Designer | Designer Gráfico |Apaixonado por tecnologia </p>
      <img src="/images/foto-de-perfil.jpg" alt="Sua Foto" className="w-40 h-40 rounded-full mx-auto mt-10 mb-[2%]" />
    </section>
  );
};

export default Home;
