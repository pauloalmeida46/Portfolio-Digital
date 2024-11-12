import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-10 bg-gray-800">
      <h2 className="text-4xl font-bold mb-2 text-yellow-400 margin-top">Contato</h2>
      <section id="education" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Escolaridade</h2>
          <div className="bg-black p-4 rounded ">
            <h3 className="text-xl font-semibold text-white">E-MAIL</h3>
            <p className="text-gray-400 text-lg">paulo.hmalmeida46@gmail.com</p>
          </div>
          <div className="bg-black p-4 rounded mt-5">
            <h3 className="text-xl font-semibold text-white">LINKEDIN</h3>
            <p className="text-gray-400 text-lg">www.linkedin.com/in/paulo-almeida-3102452a7</p>
          </div>
          <div className="bg-black p-4 rounded mt-5">
            <h3 className="text-xl font-semibold text-white">GITHUB</h3>
            <p className="text-gray-400 text-lg">https://github.com/pauloalmeida46</p>
          </div>
        </section>
    </section>
  );
};

export default Contact;
