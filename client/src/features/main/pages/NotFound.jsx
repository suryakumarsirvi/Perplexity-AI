import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#171615] text-white">
      <h1 className="text-6xl font-serif mb-4">404</h1>
      <p className="text-neutral-400 mb-8 text-sm">This page could not be found.</p>
      <button 
        onClick={() => navigate('/')}
        className="px-4 py-2 border border-neutral-700 text-sm hover:bg-neutral-800 transition-colors rounded"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
