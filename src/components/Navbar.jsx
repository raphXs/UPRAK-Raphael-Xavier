import React from 'react';
import logo from '../assets/logo Petani.svg';
import homeIcon from '../assets/logo Home.svg';
import playIcon from '../assets/logo Play.svg';
import fileIcon from '../assets/logo Dokumen.svg';
import bookIcon from '../assets/logo Buku.svg';
import discordIcon from '../assets/logo Discord.svg';
import searchIcon from '../assets/logo Search.svg';
import moonIcon from '../assets/moon Icon.svg';


function Navbar() {
  return (
    <nav className="bg-teal-600 text-white p-3">
      <div className="flex items-center space-x-6 pl-8">
 <     img src={logo} alt="Logo Petani" className="h-8" />
       <ul className="flex space-x-6">
        
        
          <li>
            <a href="#hero" className=" inline-flex items-center space-x-2 font-bold hover:bg-teal-700 rounded-2xl py-2 px-3 gap-1">
              <img src={homeIcon} alt="Home Icon" className="h-5" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#content" className="inline-flex items-center space-x-2 font-bold hover:bg-teal-700 rounded-2xl py-2 px-3 gap-1">
              <img src={playIcon} alt="Kelas Icon" className="h-5" />
              <span>Kelas</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank" className="inline-flex items-center space-x-2 font-bold  hover:bg-teal-700 rounded-2xl py-2 px-3 gap-1">
              <img src={fileIcon} alt="Tutorial Icon" className="h-5" />
              <span>Tutorial</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank" className="inline-flex items-center space-x-2 font-bold  hover:bg-teal-700 rounded-2xl py-2 px-3 gap-1">
              <img src={bookIcon} alt="Buku Icon" className="h-5" />
              <span>Buku</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank" className="inline-flex items-center space-x-2 font-bold  hover:bg-teal-700 rounded-2xl py-2 px-3 gap-1">
              <img src={discordIcon} alt="Discord Icon" className="h-5" />
              <span>Discord</span>
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-5 pr-4 ml-130">
         <img src={searchIcon} alt="Logo Search" className="h-8" />
         <img src={moonIcon} alt="Moon Icon" className="h-8" />
         <a href="#" className="inline-flex items-center space-x-2 font-bold hover:bg-teal-700 bg-teal-500 rounded-xl py-2 px-1 gap-1">
            
           <span>Join Newsletter</span>
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;

