
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Aplikasi To-Do List',
    description: 'Aplikasi manajemen tugas sederhana untuk membantu mengatur produktivitas harian dengan fitur tambah, hapus, dan simpan data lokal.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=600&h=400',
    link: '#'
  },
  {
    id: '2',
    title: 'Sistem Informasi Penggajian',
    description: 'Platform manajemen HR untuk mengelola data karyawan, perhitungan gaji otomatis, laporan slip gaji, dan manajemen departemen.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=400',
    link: '#'
  },
  {
    id: '3',
    title: 'Landing Page Kedai Kopi',
    description: 'Halaman statis responsif untuk mempromosikan menu dan layanan sebuah kedai kopi lokal dengan desain estetis.',
    tech: ['HTML', 'CSS', 'Flexbox'],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=400',
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold gradient-text">Proyek Saya</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Berikut adalah beberapa contoh proyek pengembangan web yang saya kerjakan sebagai bagian dari pembelajaran saya di Universitas Komputama.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.id} className="glass group rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-indigo-100 transition-all border border-indigo-50/50 flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{p.title}</h3>
              <p className="text-slate-600 text-sm flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100/50">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} className="pt-4 text-indigo-600 hover:text-indigo-800 font-bold text-sm inline-flex items-center gap-2 transition-colors">
                Lihat Proyek 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
