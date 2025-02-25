import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="aboutme" className="p-10 bg-black">
      <h2 className="text-4xl font-bold mb-6 text-yellow-400 margin-top">Sobre Mim</h2>
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-400 mb-4">Sobre Mim</h2>
          <p className="text-gray-100 text-lg">Sou um estudante de TI com habilidades em JavaScript, React, Python, HTML,
             HTTP, CSS, Bootstrap, AWS, MySQL e fundamentos de Design utilizando Canva e Figma. Com uma mentalidade
             de crescimento e foco na evolução contínua,meu principal objetivo é solucionar problemas e agregar valor ao seu negócio. 
             Estou preparado para transformar desafios em oportunidades e contribuir de forma decisiva para o sucesso da sua empresa.</p>
        </section>

        <section id="education" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-400 mb-4">Escolaridade</h2>
          <div className="bg-white p-4 rounded ">
            <h3 className="text-xl font-semibold">E.E.E.M.I. Prof° Nelson do Nascimento Monteiro</h3>
            <p className="text-gray-500">Ensino Médio Completo | 2021 - 2023</p>
          </div>
          <div className="bg-white p-4 rounded mt-5">
            <h3 className="text-xl font-semibold">FATEC São José dos Campos - Prof. Jessen Vidal</h3>
            <p className="text-gray-500">Tecnologo em DSM - Desenvolvimento de Software Multiplataforma | 2024 - Dezembro de 2026</p>
          </div>
        </section>

        <section id="skills" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-400 mb-6">Habilidades</h2>
          <div className="flex flex-wrap">
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">JavaScript</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">Python</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">Java</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">TypeScript</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">Spring</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">React</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">Node.js</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">AWS</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">HTML5</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">CSS3</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">Bootstrap</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">MySQL</span>
            <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">Figma</span>
          </div>
        </section>
    </section>
  );
};

export default AboutMe;
