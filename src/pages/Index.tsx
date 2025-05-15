
import React, { useState } from 'react';
import Camera from '@/components/scan/Camera';
import NutritionCard from '@/components/scan/NutritionCard';
import AddMealButton from '@/components/scan/AddMealButton';
import { useToast } from '@/hooks/use-toast';

// Simulate food recognition results
const mockFoodRecognition = (imageUrl: string): Promise<{
  name: string;
  category: string;
  amount: string;
  calories: number;
  nutrients: {
    protein: number;
    carbs: number;
    fat: number;
  };
}> => {
  // In a real app, this would call an AI service API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Mandarin Orange",
        category: "Fruit",
        amount: "250g",
        calories: 187,
        nutrients: {
          protein: 5,
          carbs: 51,
          fat: 1,
        },
      });
    }, 2000);
  });
};

const Index = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [analyzedFood, setAnalyzedFood] = useState<any | null>(null);

  const handleImageSelected = async (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setAnalyzing(true);
    
    try {
      const result = await mockFoodRecognition(imageUrl);
      setAnalyzedFood(result);
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "Could not analyze the food image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const handleAddMeal = () => {
    if (!analyzedFood) return;

    // In a real app, this would save the meal to the user's history
    toast({
      title: "Meal added",
      description: `Added ${analyzedFood.name} to your daily log`,
    });

    // Reset the form
    setSelectedImage(null);
    setAnalyzedFood(null);
  };

  return (
    <div className="pb-6">
      <h1 className="text-2xl font-bold mb-6">NutriScan AI</h1>
      <Camera onImageSelected={handleImageSelected} />
      
      {(analyzing || analyzedFood) && (
        <NutritionCard 
          name={analyzing ? "Analyzing Food..." : analyzedFood.name}
          category={analyzing ? undefined : analyzedFood.category}
          amount={analyzing ? undefined : analyzedFood.amount}
          calories={analyzing ? undefined : analyzedFood.calories}
          nutrients={analyzing ? undefined : analyzedFood.nutrients}
          isAnalyzing={analyzing}
        />
      )}
      
      {analyzedFood && (
        <AddMealButton 
          onClick={handleAddMeal} 
          isDisabled={false} 
        />
      )}
    </div>
  );
};

export default Index;
