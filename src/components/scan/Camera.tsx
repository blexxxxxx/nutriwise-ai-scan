
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface CameraProps {
  onImageSelected: (image: string) => void;
}

const Camera = ({ onImageSelected }: CameraProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      setPreviewImage(dataUrl);
      onImageSelected(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-black/50 flex items-center justify-center border border-zinc-800 mb-6">
      {previewImage ? (
        <img 
          src={previewImage} 
          alt="Food preview" 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-center p-8">
          <div className="w-20 h-20 rounded-full bg-nutri-card flex items-center justify-center mx-auto mb-4 border border-zinc-700">
            <Camera size={36} className="text-nutri-muted" />
          </div>
          <p className="text-nutri-muted">Upload or take a photo of your food</p>
        </div>
      )}
      
      <label 
        htmlFor="cameraInput" 
        className="absolute bottom-4 right-4 w-14 h-14 bg-nutri-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer"
      >
        <Plus size={28} className="text-white" />
      </label>
      
      <input 
        id="cameraInput" 
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default Camera;
