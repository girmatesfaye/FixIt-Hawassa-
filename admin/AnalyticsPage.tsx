
import React from 'react';

const AnalyticsPage: React.FC = () => {
  const stats = [
    { label: 'Total Clients', value: '2,450', trend: '+12.5%', icon: 'group', color: 'bg-blue-600', border: 'border-blue-600' },
    { label: 'Total Workers', value: '580', trend: '+5.2%', icon: 'construction', color: 'bg-red-500', border: 'border-red-500' },
    { label: 'New Users (This Week)', value: '125', trend: '+8.1%', icon: 'person_add', color: 'bg-indigo-500', border: 'border-gray-100' },
    { label: 'Total Service Requests Created', value: '8,932', trend: '+24%', icon: 'check_box', color: 'bg-amber-500', border: 'border-gray-100' },
  ];

  const trendData = [
    { day: 'Mon', value: 40, overflow: 10 },
    { day: 'Tue', value: 65, overflow: 15 },
    { day: 'Wed', value: 55, overflow: 0 },
    { day: 'Thu', value: 80, overflow: 20 },
    { day: 'Fri', value: 95, overflow: 10 },
    { day: 'Sat', value: 60, overflow: 25 },
    { day: 'Sun', value: 35, overflow: 15 },
  ];

  const growthData = [
    { month: 'Jan', clients: 45, workers: 30 },
    { month: 'Feb', clients: 55, workers: 40 },
    { month: 'Mar', clients: 52, workers: 40 },
    { month: 'Apr', clients: 65, workers: 45 },
    { month: 'May', clients: 85, workers: 55 },
    { month: 'Jun', clients: 100, workers: 80 },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-[#120e1b]">Analytics Overview</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button className="h-10 px-4 bg-white border border-gray-100 rounded-lg text-sm font-bold text-gray-600 flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              Last 30 Days
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${stat.border} relative overflow-hidden group hover:shadow-md transition-shadow`}>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className={`size-10 rounded-xl ${stat.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                  <span className={`material-symbols-outlined ${stat.color.replace('bg-', 'text-')}`}>{stat.icon}</span>
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#120e1b]">{stat.value}</span>
                  <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px] font-bold">trending_up</span>
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Requests Trend */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-lg font-black text-[#120e1b]">Service Requests Trend</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Last 7 Days</p>
            </div>
            <button className="size-8 flex items-center justify-center text-gray-400 hover:text-red-500">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>

          <div className="relative h-64 flex items-end justify-between px-2">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
              {[1, 2, 3, 4].map((_, i) => <div key={i} className="w-full border-t border-black"></div>)}
            </div>
            
            {trendData.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 w-full">
                <div className="relative flex flex-col items-center w-8 sm:w-12 h-48 group">
                  {/* Overflow Bar */}
                  {item.overflow > 0 && (
                    <div 
                      style={{ height: `${item.overflow}%` }}
                      className="w-full bg-[#2635af]/20 rounded-t-sm mb-[2px]"
                    ></div>
                  )}
                  {/* Main Bar */}
                  <div 
                    style={{ height: `${item.value}%` }} 
                    className="w-full bg-[#2635af] rounded-t-sm transition-all group-hover:bg-[#1e2a8a]"
                  ></div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -top-8 bg-[#120e1b] text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.value + item.overflow}
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-lg font-black text-[#120e1b]">User Growth</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">New Registrations Over Time</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-red-500"></div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Workers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#2635af]"></div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Clients</span>
              </div>
            </div>
          </div>

          <div className="relative h-64 flex items-end justify-between px-2">
             {/* Grid lines */}
             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
              {[1, 2, 3, 4].map((_, i) => <div key={i} className="w-full border-t border-black"></div>)}
            </div>

            {growthData.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 w-full">
                <div className="flex items-end gap-1.5 h-48 group">
                  <div 
                    style={{ height: `${item.clients}%` }} 
                    className="w-3 sm:w-5 bg-[#2635af] rounded-t-sm transition-all hover:brightness-110"
                  ></div>
                  <div 
                    style={{ height: `${item.workers}%` }} 
                    className="w-3 sm:w-5 bg-red-500 rounded-t-sm transition-all hover:brightness-110"
                  ></div>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
