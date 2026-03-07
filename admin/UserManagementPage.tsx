
import React from 'react';

const UserManagementPage: React.FC = () => {
  const stats = [
    { label: 'Total Users', value: '1,240', change: '+ 5.2%', icon: 'group', color: 'bg-red-500' },
    { label: 'Pending Complaints', value: '18', sub: 'Action needed', icon: 'report_problem', color: 'bg-orange-500', alert: true },
    { label: 'New User Registrations', value: '+8', sub: 'Today', icon: 'person_add', color: 'bg-green-500' },
    { label: 'New Services Created', value: '+15', sub: 'Today', icon: 'playlist_add', color: 'bg-blue-500' },
  ];

  const recentReports = [
    { type: 'LATE ARRIVAL', time: '2 hrs ago', text: '"Worker arrived 3 hours late without any prior notice and was rude when asked."', against: 'Abebe Kebede' },
    { type: 'PRICING DISPUTE', time: '5 hrs ago', text: '"Charged 50% more than the agreed quote after the job was completed."', against: 'Dawit Alemu' },
    { type: 'POOR QUALITY', time: '1 day ago', text: '"The paint started peeling off the next day. Very unprofessional work."', against: 'Yonas Bekele' },
  ];

  const users = [
    { name: 'Abebe Kebede', email: 'abebe.k@example.com', role: 'Worker (Plumber)', status: 'Active', joined: 'Oct 24, 2023', reports: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe' },
    { name: 'Sarah Tadesse', email: 'sarah.t@example.com', role: 'Client', status: 'Active', joined: 'Nov 02, 2023', reports: null, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { name: 'Dawit Alemu', email: 'dawit.alemu@example.com', role: 'Worker (Electrician)', status: 'Suspended', joined: 'Sep 15, 2023', reports: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dawit' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-[#120e1b]">User Management</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${i === 0 || i === 1 ? 'border-red-500' : 'border-gray-50'} relative overflow-hidden`}>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#120e1b]">{stat.value}</span>
                  {stat.change && (
                    <span className="text-[10px] font-black text-green-500 flex items-center">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      {stat.change}
                    </span>
                  )}
                </div>
                {stat.sub && (
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${stat.alert ? 'text-red-500' : 'text-gray-400'}`}>
                    {stat.alert && '❗ '} {stat.sub}
                  </p>
                )}
              </div>
              <div className={`size-10 rounded-xl ${stat.color} bg-opacity-10 flex items-center justify-center text-current`}>
                <span className={`material-symbols-outlined ${stat.color.replace('bg-', 'text-')}`}>{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent User Reports */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-red-500">warning</span>
            <h3 className="text-lg font-black text-[#120e1b]">Recent User Reports</h3>
          </div>
          <button className="text-xs font-bold text-red-500 hover:underline uppercase tracking-widest">View All Reports</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {recentReports.map((report, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{report.type}</span>
                <span className="text-[10px] font-bold text-gray-400">{report.time}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed italic">{report.text}</p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Against:</span>
                  <span className="text-[10px] font-black text-[#120e1b]">{report.against}</span>
                </div>
                <button className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:underline">Review</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters Area */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input 
            type="text" 
            placeholder="Search by name, email, or role..." 
            className="w-full h-11 pl-10 pr-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-1 focus:ring-red-500" 
          />
        </div>
        <button className="h-11 px-6 rounded-xl border border-gray-100 flex items-center gap-2 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
          <span className="material-symbols-outlined">filter_list</span>
          Filter
        </button>
        <button className="h-11 px-6 bg-[#120e1b] text-white rounded-xl flex items-center gap-2 text-sm font-bold hover:bg-black transition-all">
          <span className="material-symbols-outlined">person_search</span>
          Search User
        </button>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">User</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Role</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Joined Date</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Reports</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} className="size-10 rounded-full bg-gray-100" alt="" />
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-[#120e1b]">{user.name}</span>
                      <span className="text-[10px] font-bold text-gray-400">{user.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    user.role.includes('Worker') 
                      ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                      : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs font-bold text-gray-500">
                  {user.joined}
                </td>
                <td className="px-6 py-4">
                  {user.reports ? (
                    <span className="size-6 rounded-full bg-red-100 text-red-600 text-[10px] font-black flex items-center justify-center">
                      {user.reports}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-300 font-bold">-</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className={`h-9 px-4 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                      user.status === 'Active' 
                        ? 'bg-[#120e1b] text-white hover:bg-black' 
                        : 'border-2 border-green-500 text-green-500 hover:bg-green-50'
                    }`}>
                      {user.status === 'Active' ? 'Suspend' : 'Activate'}
                    </button>
                    <button className="size-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button className="size-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs font-bold text-gray-400">Showing <span className="text-[#120e1b]">1-3</span> of <span className="text-[#120e1b]">1,240</span> results</p>
          <div className="flex items-center gap-1">
            <button className="h-9 px-3 rounded-lg text-xs font-bold text-gray-400 hover:text-red-500 disabled:opacity-50">Previous</button>
            <button className="size-9 rounded-lg bg-red-500 text-white text-xs font-black">1</button>
            <button className="size-9 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-100 transition-colors">2</button>
            <span className="px-2 text-gray-300">...</span>
            <button className="size-9 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-100 transition-colors">10</button>
            <button className="h-9 px-3 rounded-lg text-xs font-bold text-gray-500 hover:text-red-500">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
