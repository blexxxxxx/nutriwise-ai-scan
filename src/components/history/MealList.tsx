
import React from 'react';

export interface Meal {
  id: string;
  name: string;
  time: string;
  calories: number;
  nutrients: {
    carbs: number;
    protein: number;
    fat: number;
  };
  imageUrl?: string;
}

interface MealListProps {
  meals: Meal[];
}

const MealList: React.FC<MealListProps> = ({ meals }) => {
  if (meals.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-nutri-muted">No meals recorded yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Today's Meals</h3>
      
      {meals.map((meal) => (
        <div key={meal.id} className="flex gap-3 p-3 rounded-xl bg-nutri-card border border-zinc-800">
          {meal.imageUrl && (
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img src={meal.imageUrl} alt={meal.name} className="w-full h-full object-cover" />
            </div>
          )}
          
          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-medium">{meal.name}</h4>
              <span className="text-nutri-muted text-sm">{meal.time}</span>
            </div>
            <p className="text-sm text-nutri-accent font-semibold">{meal.calories} kcal</p>
            
            <div className="flex gap-3 mt-2 text-xs">
              <span className="text-nutri-muted">P: {meal.nutrients.protein}g</span>
              <span className="text-nutri-muted">C: {meal.nutrients.carbs}g</span>
              <span className="text-nutri-muted">F: {meal.nutrients.fat}g</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealList;
