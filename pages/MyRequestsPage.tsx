
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RequestStatus } from '../types';

const MyRequestsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Active' | 'History'>('Active');

  const requests = [
    { id: 1, title: 'Kitchen Sink Leak', category: 'Plumbing', status: RequestStatus.IN_PROGRESS, date: 'Oct 12, 2023', worker: 'Dawit M.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dawit', cost: '800 ETB' },
    { id: 2, title: 'Socket Installation', category: 'Electrical', status: RequestStatus.SEARCHING, date: 'Oct 15, 2023', worker: null, cost: 'Pending Quotes' },
    { id: 3, title: 'Living Room Paint', category: 'Painting', status: RequestStatus.PENDING, date: 'Oct 16, 2023', worker: 'Tewodros B.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tewodros', cost: '2,500 ETB' },
    { id: 4, title: 'Bed Assembly', category: 'Carpentry', status: RequestStatus.COMPLETED, date: 'Oct 10, 2023', worker: 'Samuel T.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel', cost: '1,200 ETB' }
  ];

  const filteredRequests = activeTab === 'Active' 
    ? requests.filter(r => r.status !== RequestStatus.COMPLETED)
    : requests.filter(r => r.status === RequestStatus.COMPLETED);

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-background-dark font-sans flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 px-4 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-6">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="size-9 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined font-bold">handyman</span>
            </div>
            <h2 className="text-base font-black tracking-tight dark:text-white">FixIt Hawassa</h2>
          </Link>
          <nav className="flex items-center gap-8">
            <Link to="/dashboard" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">Home</Link>
            <Link to="/my-requests" className="text-sm font-bold text-primary">My Requests</Link>
            <Link to="/messages" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">Messages</Link>
            <div className="size-10 rounded-full bg-gray-100 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-[1000px] mx-auto w-full px-4 py-10">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-black text-[#120e1b] dark:text-white mb-2">My Requests</h1>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Manage and track your service calls</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl w-fit">
            <button 
              onClick={() => setActiveTab('Active')}
              className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${activeTab === 'Active' ? 'bg-white dark:bg-surface-dark text-primary shadow-sm' : 'text-gray-500 hover:text-primary'}`}
            >
              Active Requests
            </button>
            <button 
              onClick={() => setActiveTab('History')}
              className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${activeTab === 'History' ? 'bg-white dark:bg-surface-dark text-primary shadow-sm' : 'text-gray-500 hover:text-primary'}`}
            >
              Order History
            </button>
          </div>

          {/* List */}
          <div className="flex flex-col gap-4">
            {filteredRequests.map(req => (
              <div key={req.id} className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:shadow-md transition-shadow">
                <div className="flex items-center gap-5 flex-1">
                  <div className={`size-14 rounded-2xl flex items-center justify-center ${
                    req.category === 'Plumbing' ? 'bg-blue-50 text-blue-600' :
                    req.category === 'Electrical' ? 'bg-amber-50 text-amber-600' :
                    req.category === 'Painting' ? 'bg-purple-50 text-purple-600' : 'bg-green-50 text-green-600'
                  } dark:bg-opacity-10`}>
                    <span className="material-symbols-outlined text-3xl">
                      {req.category === 'Plumbing' ? 'plumbing' :
                       req.category === 'Electrical' ? 'electric_bolt' :
                       req.category === 'Painting' ? 'format_paint' : 'carpenter'}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-black text-[#120e1b] dark:text-white">{req.title}</h4>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        req.status === RequestStatus.IN_PROGRESS ? 'bg-blue-100 text-blue-700' :
                        req.status === RequestStatus.SEARCHING ? 'bg-amber-100 text-amber-700' :
                        req.status === RequestStatus.PENDING ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                      }`}>{req.status}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {req.date}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">payments</span> {req.cost}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-50 dark:border-gray-800">
                  {req.worker ? (
                    <div className="flex items-center gap-3 mr-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Assigned Pro</p>
                        <p className="text-sm font-black text-[#120e1b] dark:text-white">{req.worker}</p>
                      </div>
                      <img src={req.avatar!} className="size-10 rounded-full border-2 border-white dark:border-gray-700 shadow-sm" alt="" />
                    </div>
                  ) : (
                    <div className="mr-8">
                      <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] animate-pulse">info</span>
                        Searching for pros
                      </p>
                    </div>
                  )}
                  <button className="flex-1 md:flex-none h-11 px-6 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all">
                    Track Order
                  </button>
                  <button className="size-11 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
            ))}
            {filteredRequests.length === 0 && (
              <div className="py-20 flex flex-col items-center gap-4 text-center">
                <div className="size-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                  <span className="material-symbols-outlined text-5xl">history</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#120e1b] dark:text-white">No requests found</h3>
                  <p className="text-sm text-gray-500">You haven't made any requests in this category yet.</p>
                </div>
                <Link to="/dashboard" className="mt-4 px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20">Book a Service</Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyRequestsPage;
