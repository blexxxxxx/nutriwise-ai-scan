
import React from 'react';

interface NutritionCardProps {
  name: string;
  category?: string;
  amount?: string;
  calories?: number;
  nutrients?: {
    protein: number;
    carbs: number;
    fat: number;
  };
  isAnalyzing?: boolean;
}

const NutritionCard: React.FC<NutritionCardProps> = ({
  name,
  category = "Cibo",
  amount = "100g",
  calories = 0,
  nutrients = { protein: 0, carbs: 0, fat: 0 },
  isAnalyzing = false
}) => {
  return (
    <div className={`rounded-3xl p-5 flex flex-col ${isAnalyzing ? 'bg-zinc-900/50 animate-pulse-subtle' : 'bg-nutri-card'}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-medium">
            {category}
          </span>
          {amount && (
            <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-medium">
              {amount}
            </span>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-1">{name}</h2>
      
      {isAnalyzing ? (
        <p className="text-sm text-nutri-muted">Analisi del contenuto nutrizionale in corso...</p>
      ) : (
        <>
          <div className="text-nutri-muted text-sm mb-5">
            {calories ? `${calories} kcal` : 'Analisi in corso...'}
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-zinc-800 rounded-xl p-3 flex flex-col items-center">
              <span className="bg-zinc-700 p-1.5 rounded-md mb-2">🍗</span>
              <span className="font-bold">{nutrients.protein}g</span>
              <span className="text-xs text-nutri-muted">Proteine</span>
            </div>
            
            <div className="bg-nutri-accent rounded-xl p-3 flex flex-col items-center">
              <span className="bg-white/20 p-1.5 rounded-md mb-2">🍚</span>
              <span className="font-bold">{nutrients.carbs}g</span>
              <span className="text-xs text-nutri-muted">Carboidrati</span>
            </div>
            
            <div className="bg-nutri-blue rounded-xl p-3 flex flex-col items-center">
              <span className="bg-white/20 p-1.5 rounded-md mb-2">🥑</span>
              <span className="font-bold">{nutrients.fat}g</span>
              <span className="text-xs text-nutri-muted">Grassi</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NutritionCard;
