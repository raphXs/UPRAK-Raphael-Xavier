import React from 'react';
import petani from '../assets/petani Kode.svg';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
        
        
        <div className="col-span-1">
          <div className="flex flex-col items-start space-y-2">
            <img src={petani} alt="Petani Kode" className="w-32" />
            <p className="text-gray-300">
              Tempat belajar budidaya kode (coding) dengan tutorial yang gampang dipahami.
            </p>
          </div>
        </div>

      
      <div className="ml-15">
          <h3 className="text-lg font-bold mb-2">Belajar</h3>
        <ul className="space-y-1 text-gray-300">
          <li><a href="#" className="hover:text-teal-600">Artikel</a></li>
          <li><a href="#" className="hover:text-teal-600">Tutorial</a></li>
          <li><a href="#" className="hover:text-teal-600">Buku</a></li>
        </ul>
      </div>


        
        <div>
          <h3 className="text-lg font-bold mb-2">Popular Tutorial</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-teal-600">Tutorial Bahasa C</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial Javascript</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial Java</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial PHP</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial Python</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-2">Social Media</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-teal-600">Facebook Page</a></li>
            <li><a href="#" className="hover:text-teal-600">Instagram</a></li>
            <li><a href="#" className="hover:text-teal-600">Twitter</a></li>
            <li><a href="#" className="hover:text-teal-600">Youtube Channel</a></li>
            <li><a href="#" className="hover:text-teal-600">Telegram Channel</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-bold mb-2">Petani Kode</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-teal-600">About</a></li>
            <li><a href="#" className="hover:text-teal-600">FAQs</a></li>
            <li><a href="#" className="hover:text-teal-600">Contact</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
