
import React, { useState } from 'react';
import { Plus, Camera as CameraIcon, RefreshCcw } from 'lucide-react';

interface CameraProps {
  onImageSelected: (image: string) => void;
}

const Camera = ({ onImageSelected }: CameraProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setError(null);

    // Verifica il tipo e la dimensione del file
    if (!file.type.startsWith('image/')) {
      setError('Per favore, seleziona un'immagine valida');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limite
      setError('L\'immagine è troppo grande. Massimo 10MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      setPreviewImage(dataUrl);
      onImageSelected(dataUrl);
    };
    reader.onerror = () => {
      setError('Si è verificato un errore durante la lettura dell\'immagine');
    };
    reader.readAsDataURL(file);
  };

  const resetImage = () => {
    setPreviewImage(null);
    setError(null);
  };

  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-black/50 flex items-center justify-center border border-zinc-800 mb-6">
      {previewImage ? (
        <>
          <img 
            src={previewImage} 
            alt="Anteprima cibo" 
            className="w-full h-full object-cover"
          />
          <button
            onClick={resetImage}
            className="absolute top-4 right-4 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            aria-label="Reimposta immagine"
          >
            <RefreshCcw size={18} className="text-white" />
          </button>
        </>
      ) : (
        <div className="text-center p-8">
          {error ? (
            <div className="text-red-500 mb-4">
              {error}
            </div>
          ) : (
            <>
              <div className="w-20 h-20 rounded-full bg-nutri-card flex items-center justify-center mx-auto mb-4 border border-zinc-700">
                <CameraIcon size={36} className="text-nutri-muted" />
              </div>
              <p className="text-nutri-muted">Carica o scatta una foto del tuo cibo</p>
            </>
          )}
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
