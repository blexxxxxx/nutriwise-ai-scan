
import React from 'react';
import { Plus } from 'lucide-react';

interface AddMealButtonProps {
  onClick: () => void;
  isDisabled?: boolean;
}

const AddMealButton: React.FC<AddMealButtonProps> = ({ onClick, isDisabled = false }) => {
  return (
    <button 
      className={`w-full p-4 rounded-xl mt-4 flex items-center justify-center gap-2 ${
        isDisabled 
          ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
          : 'bg-nutri-accent text-white hover:bg-nutri-accent/90 active:bg-nutri-accent/80'
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      Add Meal
      <Plus size={20} />
    </button>
  );
};

export default AddMealButton;
