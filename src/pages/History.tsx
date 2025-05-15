
import React from 'react';
import NutritionSummary from '@/components/history/NutritionSummary';
import MealList, { Meal } from '@/components/history/MealList';

const History = () => {
  // Mock data for demonstration
  const nutritionSummary = {
    calories: 1745,
    dailyGoal: 2000,
    date: "January 2024",
    nutrients: {
      carbs: 125,
      protein: 15,
      fat: 5
    }
  };

  const mockMeals: Meal[] = [
    {
      id: "1",
      name: "Mandarin Orange",
      time: "9:30 AM",
      calories: 187,
      imageUrl: "/lovable-uploads/df61b24e-e42d-4faf-90a9-30b05ecf55c3.png",
      nutrients: {
        carbs: 51,
        protein: 5,
        fat: 1
      }
    },
    {
      id: "2",
      name: "Chicken Salad",
      time: "12:45 PM",
      calories: 320,
      nutrients: {
        carbs: 10,
        protein: 38,
        fat: 18
      }
    },
    {
      id: "3",
      name: "Yogurt with Berries",
      time: "4:15 PM",
      calories: 210,
      nutrients: {
        carbs: 27,
        protein: 8,
        fat: 9
      }
    }
  ];

  return (
    <div className="pb-6">
      <h1 className="text-2xl font-bold mb-6">Nutrition History</h1>
      
      <NutritionSummary 
        calories={nutritionSummary.calories}
        dailyGoal={nutritionSummary.dailyGoal}
        date={nutritionSummary.date}
        nutrients={nutritionSummary.nutrients}
      />
      
      <MealList meals={mockMeals} />
    </div>
  );
};

export default History;
