
import React from 'react';

const Profile = () => {
  return (
    <div className="pb-6">
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
      
      <div className="bg-nutri-card rounded-3xl p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-nutri-accent flex items-center justify-center text-2xl font-bold">
            NS
          </div>
          <div>
            <h2 className="text-xl font-bold">User</h2>
            <p className="text-nutri-muted">Joined January 2024</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-zinc-800 rounded-xl">
            <span>Daily Calorie Goal</span>
            <span className="font-bold">2,000 kcal</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-zinc-800 rounded-xl">
            <span>Nutrition Goals</span>
            <span className="text-nutri-muted">Balanced</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-zinc-800 rounded-xl">
            <span>Activity Level</span>
            <span className="text-nutri-muted">Moderate</span>
          </div>
        </div>
      </div>
      
      <div className="bg-nutri-card rounded-3xl p-6">
        <h3 className="font-bold mb-4">App Settings</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Dark Mode</span>
            <div className="w-12 h-6 bg-nutri-accent rounded-full relative">
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span>Notifications</span>
            <div className="w-12 h-6 bg-zinc-700 rounded-full relative">
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span>Data Sync</span>
            <div className="w-12 h-6 bg-nutri-accent rounded-full relative">
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
