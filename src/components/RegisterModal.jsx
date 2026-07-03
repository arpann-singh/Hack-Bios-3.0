import React, { useState, useEffect } from 'react';

const RegisterModal = ({ isOpen, onClose, onRegisterClick }) => {
  const [hackathonData, setHackathonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to bypass potential CORS issues for UI testing
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace this with your actual API endpoint or use a proxy
        const response = await fetch('https://api.devfolio.co/api/hackathons/hackbios3');
        const data = await response.json();
        setHackathonData(data);
      } catch (error) {
        console.error("API Fetch failed, using fallback UI:", error);
        // Set fallback data so the button still appears
        setHackathonData({ name: "HACKBIOS 3.0" });
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) fetchData();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#050a05] border border-[#00ff41] p-8 max-w-md w-full relative shadow-[0_0_30px_rgba(0,255,65,0.2)]">

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-[#00ff41] font-mono hover:text-white">
          [X]
        </button>

        <h2 className="text-2xl font-mono text-[#00ff41] mb-6 uppercase tracking-widest">
          {loading ? "INITIALIZING..." : "INITIATE_UPLINK"}
        </h2>

        {/* Register Button Area */}
        <div className="flex justify-center my-8">
          {loading ? (
            <div className="text-[#00e5ff] font-mono animate-pulse">CONNECTING TO DEVFOLIO...</div>
          ) : (
            <button
              onClick={onRegisterClick}
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/assets/devfolio-btn.png"
                alt="Apply with Devfolio"
                className="h-12 w-auto"
              />
            </button>
          )}
        </div>

        <div className="text-gray-500 font-mono text-xs text-center">
          SYSTEM STATUS: {hackathonData ? "READY" : "OFFLINE"}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;