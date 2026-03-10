import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [distance, setDistance] = useState(5);

  const [isLoading, setIsLoading] = useState(false);

  // MOCK DATA - Replace with API call
  const workers = [
    {
      id: 1,
      name: "Abebe Kebede",
      location: "Hawassa, Piassa",
      rating: 4.8,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Tigist Bekele",
      location: "Hawassa, Tabor",
      rating: 4.9,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Dawit Alemu",
      location: "Hawassa, Millennium",
      rating: 4.5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Tigist Bekele",
      location: "Hawassa, Tabor",
      rating: 4.9,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Dawit Alemu",
      location: "Hawassa, Millennium",
      rating: 4.5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Dawit Alemu",
      location: "Hawassa, Millennium",
      rating: 4.5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Dawit Alemu",
      location: "Hawassa, Millennium",
      rating: 4.5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Dawit Alemu",
      location: "Hawassa, Millennium",
      rating: 4.5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-background-dark font-sans flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-surface-dark/90 border-b border-gray-200 dark:border-gray-800 px-6 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
          <Link to="/dashboard" className="flex items-center gap-2 shrink-0">
            <div className="size-9 bg-primary rounded-lg flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined font-semibold text-xl">
                handyman
              </span>
            </div>
            <h2 className="text-base font-bold tracking-tight dark:text-white hidden sm:block">
              FixIt Hawassa
            </h2>
          </Link>

          <div className="flex-grow max-w-xl">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary text-[20px]">
                search
              </span>
              <input
                type="text"
                defaultValue="Plumbing in Piassa"
                className="w-full h-10 pl-10 pr-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white text-sm transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => navigate("/request-service")}
              className="hidden sm:flex px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-sm hover:bg-primary-dark transition-all"
            >
              New Request
            </button>
            <div className="size-9 rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex max-w-[1440px] mx-auto w-full p-6 gap-8">
        {/* Sidebar Filters */}
        <aside className="w-64 shrink-0 hidden lg:flex flex-col gap-8">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold tracking-tight text-[#120e1b] dark:text-white">
                Filters
              </h2>
              <button className="text-xs font-medium text-primary hover:underline">
                Reset
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Sort By
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {["Recommended", "Top Rated", "Near Me"].map((opt) => (
                    <button
                      key={opt}
                      className={`h-9 px-3 text-left rounded-lg text-sm font-medium transition-all ${opt === "Recommended" ? "bg-primary text-white shadow-sm" : "bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Max Distance
                  </label>
                  <span className="text-sm font-medium text-primary">
                    {distance}km
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-[#120e1b] dark:text-white tracking-tight">
              Hand-picked Pros
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Verified professionals available for physical work near you.
            </p>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 dark:border-gray-700 border-t-primary dark:border-t-primary"></div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Loading verified pros...</p>
            </div>
          ) : (
            <>
              {/* Simplified Workers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-4 hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="relative">
                    <img
                      src={worker.avatar}
                      className="size-20 rounded-2xl object-cover shadow-sm border-2 border-white dark:border-gray-700"
                      alt={worker.name}
                    />
                    <div className="absolute -bottom-1 -right-1 size-6 bg-green-500 text-white rounded-full flex items-center justify-center border-2 border-white dark:border-surface-dark shadow-sm">
                      <span className="material-symbols-outlined text-[12px] font-bold">
                        verified
                      </span>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-base font-semibold text-[#120e1b] dark:text-white truncate">
                      {worker.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-primary text-[14px]">
                        location_on
                      </span>
                      {worker.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-900/30">
                    <span className="material-symbols-outlined text-amber-400 text-sm fill-current">
                      star
                    </span>
                    <span className="text-sm font-medium text-[#120e1b] dark:text-white">
                      {worker.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-center w-full">
                  <button
                    onClick={() => navigate(`/worker/${worker.id}`)}
                    className="w-full h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Simplified Load More */}
          <div className="flex flex-col items-center gap-3 py-8">
            <button className="px-6 py-2.5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary shadow-sm transition-all md:w-auto w-full">
              Load More
            </button>
              <p className="text-xs text-gray-400">
                Showing {workers.length} of 152 verified pros
              </p>
            </div>
          </>
          )}
        </main>
      </div>
    </div>
  );
};

export default SearchResultsPage;
