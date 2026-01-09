
import React from 'react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 py-12">
      <div className="flex-1 space-y-8 text-center md:text-left">
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
          Halo, Saya <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="text-2xl font-semibold text-indigo-600/80">
          {profile.role}
        </p>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          {profile.bio}
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-100 text-white">
            Lihat Karya Saya
          </a>
          <a href="#about" className="glass px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-all text-slate-700">
            Tentang Saya
          </a>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img 
            src={profile.imageUrl} 
            alt={profile.name} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
