import React from 'react';
import '../index.css';


const projects = [
  {
    title: 'CyberScrums',
    image: '/images/cyberscrums-logo.jpg',
    description: 'Este é um projeto acadêmico onde seu principal objetivo foi montar uma aplicação web para o monitoramento de uma estufa artificial de um grupo da faculdade, pelo qual eu fui responsável por produzir o front-end do site juntamente com os integrantes do grupo',
    link: 'https://github.com/CyberScrums/Projeto-Smart-Farming',
  },
  {
    title: 'SkyFall',
    image: '/images/skyfall-logo.png',
    description: 'Este é um projeto acadêmico onde eu e minha equipe fomos encarregados de produzir uma aplicação web para a administração de estoque, onde eu fiz parte da equipe de front-end e me encarreguei de fazer o design de algumas páginas, assim como também os frameworks.',
    link: 'https://github.com/EquipeSkyfall/API_2Semestre',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="project" className="p-10 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-yellow-400 margin-top">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded shadow-sm bg-black">
            <h3 className="text-2xl font-semibold text-gray-400 mb-5 text-center">{project.title}</h3>
            {project.image && (
              <img
                src={project.image}
                alt={`Imagem de ${project.title}`}
                className="w-64 h-64 object-cover rounded mb-4 block mx-auto"
              />)}
            <p className="text-gray-100 text-center mt-6 ml-6 mr-6 text-lg">{project.description}</p>
            <a href={project.link} className="text-yellow-500 hover:text-yellow-600 text-center block mt-4 mb-4 text-xl" target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

/*pra colocar uma imagem

colocar no projeto 1 e 2:
image: '/caminho/para/imagem-projeto1.jpg', // Caminho da imagem

no projeto:
<div key={index} className="border p-4 rounded shadow-sm bg-white">           //esse aqui agr
            {project.image && (
              <img
                src={project.image}
                alt={`Imagem de ${project.title}`}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
*/
