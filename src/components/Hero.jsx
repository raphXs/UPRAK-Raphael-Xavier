import React from 'react';
import petani from '../assets/petani Hero.png';

function Hero() {
  return (
    <section className="bg-gray-800 px-4 md:px-8 py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        
        <div className="max-w-xl md:pr-10">
          <h1 className="text-6xl font-bold mb-5 tracking-tighter">Petani Kode</h1>

          <p className="text-2xl font-light mb-6">
            Belajar budidaya kode <i>(coding)</i> dengan tutorial yang mudah <br />
            dipahami. <i>Mostly</i> pakai Linux.
          </p>

          <div className="flex flex-row gap-3">
            <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500">
              Mulai Belajar
            </button>
            <button className="px-3 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 text-teal-100 rounded-lg active:bg-teal-500">
              Join Newsletter
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            src={petani}
            alt="petani Hero"
            className="h-64 md:h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
