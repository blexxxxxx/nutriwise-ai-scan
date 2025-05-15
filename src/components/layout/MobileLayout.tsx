
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MobileLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-nutri-background text-nutri-text max-w-md mx-auto relative">
      <main className="flex-1 p-4 pb-20 overflow-y-auto">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
};

export default MobileLayout;
