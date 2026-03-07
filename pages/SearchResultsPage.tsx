
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [distance, setDistance] = useState(5);

  const workers = [
    {
      id: 1,
      name: 'Abebe Kebede',
      location: 'Hawassa, Piassa',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1540560712858-450f34b3f150?q=80&w=300&h=300&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Tigist Bekele',
      location: 'Hawassa, Tabor',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Dawit Alemu',
      location: 'Hawassa, Millennium',
      rating: 4.5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop',
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-background-dark font-sans flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-surface-dark/90 border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
          <Link to="/dashboard" className="flex items-center gap-3 shrink-0">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined font-black">handyman</span>
            </div>
            <h2 className="text-base font-black tracking-tight dark:text-white hidden sm:block">FixIt Hawassa</h2>
          </Link>

          <div className="flex-grow max-w-xl">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">search</span>
              <input 
                type="text" 
                defaultValue="Plumbing in Piassa"
                className="w-full h-12 pl-12 pr-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl ring-1 ring-gray-100 dark:ring-gray-700 focus:ring-2 focus:ring-primary dark:text-white font-medium shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button onClick={() => navigate('/request-service')} className="hidden sm:flex px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">New Request</button>
            <div className="size-10 rounded-full border-2 border-white dark:border-gray-800 shadow-sm overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop" alt="User" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex max-w-[1440px] mx-auto w-full p-6 gap-8">
        {/* Sidebar Filters - Preserved functionality */}
        <aside className="w-72 shrink-0 hidden lg:flex flex-col gap-10">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-[#120e1b] dark:text-white">Filters</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Reset</button>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Sort By</label>
                <div className="grid grid-cols-1 gap-2">
                  {['Recommended', 'Top Rated', 'Near Me'].map(opt => (
                    <button key={opt} className={`h-11 px-4 text-left rounded-xl text-xs font-bold transition-all ${opt === 'Recommended' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 dark:text-white hover:border-primary'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Max Distance</label>
                  <span className="text-xs font-black text-primary">{distance}km</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={distance} 
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-10">
          <div className="space-y-1">
            <h1 className="text-4xl font-black text-[#120e1b] dark:text-white tracking-tight">Hand-picked Pros</h1>
            <p className="text-sm font-medium text-gray-500">Verified professionals available for physical work near you.</p>
          </div>

          {/* Simplified Workers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {workers.map(worker => (
              <div 
                key={worker.id} 
                className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="relative">
                    <img 
                      src={worker.avatar} 
                      className="size-24 rounded-3xl object-cover shadow-md border-4 border-white dark:border-gray-700" 
                      alt={worker.name} 
                    />
                    <div className="absolute -bottom-1 -right-1 size-7 bg-green-500 text-white rounded-lg flex items-center justify-center border-2 border-white dark:border-surface-dark shadow-sm">
                      <span className="material-symbols-outlined text-[14px] font-black">verified</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-[#120e1b] dark:text-white truncate">{worker.name}</h3>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-gray-400">
                      <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                      {worker.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-4 py-2 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30">
                    <span className="material-symbols-outlined text-amber-400 text-lg fill-current">star</span>
                    <span className="text-base font-black text-[#120e1b] dark:text-white">{worker.rating}</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate(`/worker/${worker.id}`)}
                  className="w-full h-14 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  View Profile
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                </button>
              </div>
            ))}
          </div>

          {/* Simplified Load More */}
          <div className="flex flex-col items-center gap-4 py-12">
            <button className="px-10 py-4 border-2 border-gray-100 dark:border-gray-800 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-400 hover:text-primary hover:border-primary transition-all">
              Load More
            </button>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing {workers.length} of 152 verified pros</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchResultsPage;
