
import React, { useState } from 'react';
import { ProfileData } from '../types';

interface ImageStudioProps {
  profile: ProfileData;
  onUpdateProfile: (newUrl: string) => void;
}

const ImageStudio: React.FC<ImageStudioProps> = ({ profile, onUpdateProfile }) => {
  const [preview, setPreview] = useState(profile.imageUrl);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onUpdateProfile(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="glass rounded-3xl p-8 lg:p-12 overflow-hidden relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold gradient-text">Sesuaikan Profil</h2>
          <p className="text-slate-600 leading-relaxed">
            Perbarui foto profil Anda untuk memberikan kesan pertama yang profesional. Pilih foto terbaik Anda dari galeri perangkat.
          </p>
          
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-700">
              Pilih Foto Profil Baru
            </label>
            <div className="relative">
              <input 
                type="file" 
                id="profile-upload"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label 
                htmlFor="profile-upload"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl font-bold transition-all cursor-pointer shadow-lg shadow-indigo-100 text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Unggah Foto
              </label>
            </div>
            <p className="text-xs text-slate-400 font-medium italic">Format yang didukung: JPG, PNG, WebP.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur opacity-40"></div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-50">
              <img 
                src={preview} 
                alt="Profile Preview" 
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-xl text-sm font-bold text-indigo-600 border border-indigo-50 shadow-lg">
              Pratinjau Foto
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageStudio;
