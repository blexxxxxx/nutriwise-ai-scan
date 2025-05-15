
import React, { useState } from 'react';
import Camera from '@/components/scan/Camera';
import NutritionCard from '@/components/scan/NutritionCard';
import AddMealButton from '@/components/scan/AddMealButton';
import { useToast } from '@/hooks/use-toast';

// Simulazione del riconoscimento alimentare
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
  // In un'app reale, chiamerebbe un'API di servizio AI
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Arancia Mandarino",
        category: "Frutta",
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
      toast({
        title: "Analisi completata",
        description: `Abbiamo identificato ${result.name}`,
      });
    } catch (error) {
      toast({
        title: "Analisi fallita",
        description: "Impossibile analizzare l'immagine del cibo. Riprova.",
        variant: "destructive",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const handleAddMeal = () => {
    if (!analyzedFood) return;

    // In un'app reale, salverebbe il pasto nella cronologia dell'utente
    toast({
      title: "Pasto aggiunto",
      description: `${analyzedFood.name} aggiunto al tuo registro giornaliero`,
    });

    // Reset del form
    setSelectedImage(null);
    setAnalyzedFood(null);
  };

  return (
    <div className="pb-6">
      <h1 className="text-2xl font-bold mb-6">NutriScan AI</h1>
      <Camera onImageSelected={handleImageSelected} />
      
      {(analyzing || analyzedFood) && (
        <NutritionCard 
          name={analyzing ? "Analisi del cibo in corso..." : analyzedFood.name}
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
