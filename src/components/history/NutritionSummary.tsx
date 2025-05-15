
import React from 'react';

interface NutritionSummaryProps {
  calories: number;
  dailyGoal?: number;
  date: string;
  nutrients: {
    carbs: number;
    protein: number;
    fat: number;
  };
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({
  calories,
  dailyGoal = 2000,
  date,
  nutrients
}) => {
  const progress = (calories / dailyGoal) * 100;
  
  return (
    <div className="rounded-3xl bg-nutri-card p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-3xl font-bold flex items-center">
            <span className="text-nutri-accent mr-2">🔥</span>
            {calories.toLocaleString()}
            <span className="text-base text-nutri-muted ml-1">kcal</span>
          </h2>
          <p className="text-nutri-muted text-sm">You're on track for today!</p>
        </div>
        <div className="bg-zinc-800 px-3 py-1 rounded-md text-xs text-nutri-muted">
          <span>📅 {date}</span>
        </div>
      </div>
      
      <div className="mt-8 space-y-1">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-nutri-muted">0</span>
          <span className="text-nutri-accent font-bold">{calories.toLocaleString()}kcal</span>
          <span className="text-nutri-muted">{dailyGoal.toLocaleString()}</span>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-500 to-nutri-accent rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mt-8 flex bg-zinc-900 rounded-2xl p-3">
        <div className="flex-1 flex flex-col items-center">
          <span className="text-2xl font-bold">{nutrients.carbs}g</span>
          <span className="text-xs text-nutri-muted">Carbs</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-2xl font-bold">{nutrients.protein}g</span>
          <span className="text-xs text-nutri-muted">Protein</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-2xl font-bold">{nutrients.fat}g</span>
          <span className="text-xs text-nutri-muted">Fat</span>
        </div>
      </div>
    </div>
  );
};

export default NutritionSummary;
