
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import { RequestStatus, ReportStatus, ServiceRequest, Report } from '../types';

interface DashboardPageProps {
  onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isReportDetailModalOpen, setIsReportDetailModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const handleServiceClick = () => {
    navigate('/request-service');
  };

  const requests: ServiceRequest[] = [
    {
      id: '1',
      title: 'Kitchen Sink Leak',
      category: 'Plumbing',
      description: 'Water is leaking under the sink cabinet, causing damage to the wood.',
      status: RequestStatus.IN_PROGRESS,
      date: 'Oct 12, 2023',
      workerName: 'Dawit M.',
      workerRole: 'Plumber',
      workerAvatar: 'https://images.unsplash.com/photo-1540560712858-450f34b3f150?q=80&w=100&h=100&auto=format&fit=crop',
      location: 'Hawassa, Piassa',
      level: 'Medium'
    }
  ];

  const myReports: Report[] = [
    {
      id: 'RPT-101',
      workerName: 'Dawit M.',
      dateSubmitted: 'Oct 14, 2023',
      status: ReportStatus.UNDER_REVIEW,
      category: 'Overcharging',
      issue: 'Disagreement on final price',
      clientDescription: 'The worker asked for 500 ETB more than the initial quote despite no extra work being done.',
      adminResolution: 'Pending investigation. We are contacting the worker for clarification.'
    },
    {
      id: 'RPT-102',
      workerName: 'Samuel T.',
      dateSubmitted: 'Oct 05, 2023',
      status: ReportStatus.RESOLVED,
      category: 'Late Arrival',
      issue: 'Worker arrived 4 hours late',
      clientDescription: 'Scheduled for 9 AM, arrived at 1 PM without notice.',
      adminResolution: 'Worker has been issued a formal warning. A credit has been added to your account.'
    }
  ];

  const topPros = [
    { id: 101, name: 'Abebe K.', role: 'Master Electrician', rating: 4.9, reviews: 142, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop', location: 'Piassa' },
    { id: 102, name: 'Tigist B.', role: 'Plumbing Expert', rating: 4.8, reviews: 89, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop', location: 'Tabor' },
    { id: 103, name: 'Dawit A.', role: 'General Repair', rating: 4.7, reviews: 56, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop', location: 'Millennium' },
  ];

  const openReportDetail = (report: Report) => {
    setSelectedReport(report);
    setIsReportDetailModalOpen(true);
  };

  return (
    <div className="bg-[#f8fafd] dark:bg-background-dark text-[#120e1b] dark:text-white font-sans min-h-screen">
      <div className="flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-background-dark/90 px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined font-black">handyman</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base font-black leading-none dark:text-white">FixIt Hawassa</h1>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">Client Portal</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/worker-hub')} className="hidden md:flex items-center gap-2 h-10 px-5 rounded-full bg-green-500 hover:bg-green-600 text-white transition-all text-[11px] font-black uppercase tracking-widest shadow-lg shadow-green-500/20">
                <span className="material-symbols-outlined text-[18px]">engineering</span>
                Switch to Worker
              </button>
              <button className="relative size-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-800">
                <span className="material-symbols-outlined text-gray-400">notifications</span>
                <span className="absolute top-2.5 right-2.5 size-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              <button onClick={onLogout} className="size-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-800">
                <span className="material-symbols-outlined text-gray-400">logout</span>
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-12">
            
            {/* Hero / Greeting */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-white dark:bg-surface-dark p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
               
               <div className="relative z-10 flex items-start gap-6">
                 {/* Profile Edit Trigger Icon */}
                 <button 
                   onClick={() => setIsProfileModalOpen(true)}
                   className="group relative size-16 shrink-0 rounded-3xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-inner"
                   aria-label="Edit Profile"
                 >
                   <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">account_circle</span>
                   <div className="absolute -bottom-1 -right-1 size-6 bg-white dark:bg-surface-dark rounded-xl flex items-center justify-center border-2 border-primary/20 shadow-sm">
                     <span className="material-symbols-outlined text-primary text-[14px] font-bold">edit</span>
                   </div>
                 </button>

                 <div className="space-y-1">
                   <h2 className="text-4xl font-black tracking-tight text-[#120e1b] dark:text-white">Hi, Abebe! 👋</h2>
                   <p className="text-lg text-gray-500 font-medium">Ready to fix something in <span className="text-primary font-bold">Tabor</span> today?</p>
                 </div>
               </div>

               <div className="relative z-10 w-full md:w-96">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                  <input 
                    className="w-full h-14 pl-12 pr-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-primary dark:text-white font-medium" 
                    placeholder="Search for plumbers, painters..." 
                    type="text"
                  />
               </div>
            </div>

            {/* Service Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black dark:text-white">Services Categories</h3>
                <Link to="/search-results" className="text-xs font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: 'Plumbing', icon: 'plumbing', color: 'bg-blue-50 text-blue-500' },
                  { name: 'Electrical', icon: 'bolt', color: 'bg-amber-50 text-amber-500' },
                  { name: 'Carpentry', icon: 'carpenter', color: 'bg-orange-50 text-orange-500' },
                  { name: 'Painting', icon: 'format_paint', color: 'bg-purple-50 text-purple-500' },
                  { name: 'Cleaning', icon: 'cleaning_services', color: 'bg-green-50 text-green-500' },
                  { name: 'Masonry', icon: 'foundation', color: 'bg-slate-50 text-slate-500' },
                ].map((svc) => (
                  <button 
                    key={svc.name} 
                    onClick={handleServiceClick}
                    className="group flex flex-col items-center gap-4 p-6 rounded-3xl bg-white dark:bg-surface-dark border border-gray-50 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`size-14 rounded-2xl ${svc.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-3xl">{svc.icon}</span>
                    </div>
                    <span className="text-sm font-black dark:text-white">{svc.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black dark:text-white">Top Rated Near You</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Based on your location in Hawassa</p>
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {topPros.map(pro => (
                  <div key={pro.id} className="min-w-[280px] bg-white dark:bg-surface-dark p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4 group cursor-pointer hover:border-primary transition-all">
                    <img src={pro.avatar} className="size-16 rounded-2xl object-cover shadow-md" alt="" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-black text-[#120e1b] dark:text-white truncate">{pro.name}</h4>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{pro.role}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-amber-400 text-xs fill-current">star</span>
                          <span className="text-[11px] font-black">{pro.rating}</span>
                        </div>
                        <span className="text-[11px] font-bold text-gray-400">({pro.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Reports Section (Replacing Live Request Status) */}
            <div className="space-y-6">
              <h3 className="text-xl font-black dark:text-white">My Report Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myReports.map(report => (
                  <div key={report.id} className="bg-white dark:bg-surface-dark p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="space-y-1">
                          <h4 className="text-lg font-black dark:text-white">{report.category}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Against: {report.workerName}</span>
                            <span className="text-[10px] font-bold text-gray-400">• {report.dateSubmitted}</span>
                          </div>
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          report.status === ReportStatus.RESOLVED ? 'bg-green-500 text-white' : 'bg-amber-500 text-white animate-pulse'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6">
                        {report.clientDescription}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => openReportDetail(report)}
                      className="w-full h-12 bg-gray-50 dark:bg-gray-800 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all border border-gray-100 dark:border-gray-700"
                    >
                      View Report Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Report Detail Modal */}
      <Modal 
        isOpen={isReportDetailModalOpen} 
        onClose={() => setIsReportDetailModalOpen(false)} 
        title="Report Details"
      >
        {selectedReport && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Report ID: {selectedReport.id}</span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                   selectedReport.status === ReportStatus.RESOLVED ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {selectedReport.status}
                </span>
              </div>
              <h4 className="text-xl font-black dark:text-white">{selectedReport.category}</h4>
              <p className="text-xs font-bold text-primary uppercase">Against {selectedReport.workerName}</p>
            </div>

            <div className="space-y-4">
               <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">My Description</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">
                    "{selectedReport.clientDescription}"
                  </p>
               </div>

               <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Admin Resolution</p>
                  <p className="text-sm font-bold dark:text-white leading-relaxed">
                    {selectedReport.adminResolution}
                  </p>
               </div>
            </div>

            <button 
              onClick={() => setIsReportDetailModalOpen(false)}
              className="w-full h-14 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20 transition-all active:scale-95"
            >
              Close Details
            </button>
          </div>
        )}
      </Modal>

      {/* Profile Edit Modal */}
      <Modal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} title="Client Profile">
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
            <input 
              className="w-full h-12 px-4 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 dark:bg-gray-800 focus:ring-2 focus:ring-primary dark:text-white font-bold" 
              type="text" 
              defaultValue="Abebe Kebede"
              placeholder="Your full name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Current Location</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">location_on</span>
              <input 
                className="w-full h-12 pl-10 pr-4 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 dark:bg-gray-800 focus:ring-2 focus:ring-primary dark:text-white font-bold" 
                type="text" 
                defaultValue="Hawassa, Tabor"
                placeholder="Neighborhood / Area"
              />
            </div>
          </div>
          <button 
            onClick={() => setIsProfileModalOpen(false)}
            className="w-full h-14 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20 mt-4 active:scale-95 transition-all"
          >
            Update Profile
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DashboardPage;
