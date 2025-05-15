
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Camera, LineChart, Heart } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: "/", icon: <Camera size={24} />, label: "Scan" },
    { to: "/history", icon: <LineChart size={24} />, label: "History" },
    { to: "/profile", icon: <Heart size={24} />, label: "Profile" }
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-nutri-card rounded-t-3xl border-t border-zinc-800 shadow-lg">
      <div className="flex justify-around items-center p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                isActive 
                ? "text-nutri-accent" 
                : "text-nutri-muted hover:text-nutri-text"
              }`
            }
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
