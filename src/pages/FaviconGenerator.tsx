import React, { useState, useEffect } from 'react';
import { Favicon3D, FaviconGenerator } from '../components/Favicon3D';

const FaviconGeneratorPage: React.FC = () => {
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
  };

  const handleFaviconGenerated = (dataUrl: string) => {
    setFaviconUrl(dataUrl);
    setIsGenerating(false);
  };

  const handleDownload = () => {
    if (faviconUrl) {
      const link = document.createElement('a');
      link.href = faviconUrl;
      link.download = 'roqus-analytics-favicon.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleGenerateIco = async () => {
    if (faviconUrl) {
      try {
        // Čia galima būtų pridėti logiką, kuri konvertuotų PNG į ICO formatą
        // Tačiau tai reikalauja papildomų bibliotekų, todėl šiuo metu tiesiog atsisiunčiame PNG
        alert('ICO formato generavimui reikalinga papildoma serverio pusės logika. Šiuo metu atsisiųskite PNG formatą ir konvertuokite jį naudodami internetines priemones.');
      } catch (error) {
        console.error('Failed to generate ICO:', error);
      }
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Roqus Analytics 3D Favicon Generator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="aspect-square w-full max-w-md mx-auto border border-gray-200 rounded-lg overflow-hidden">
            <Favicon3D />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-all disabled:opacity-50"
            >
              {isGenerating ? 'Generating...' : 'Generate Favicon'}
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Generated Favicon</h2>
          {faviconUrl ? (
            <div className="flex flex-col items-center">
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <img 
                  src={faviconUrl} 
                  alt="Generated Favicon" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-all"
                >
                  Download PNG
                </button>
                <button
                  onClick={handleGenerateIco}
                  className="px-6 py-3 border border-indigo-500 text-indigo-500 rounded-xl font-medium hover:bg-indigo-50 transition-all"
                >
                  Generate ICO
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <p>No favicon generated yet</p>
              <p className="text-sm mt-2">Click "Generate Favicon" to create one</p>
            </div>
          )}
        </div>
      </div>

      {isGenerating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Generating Favicon</h3>
            <p className="mb-4">Please wait while we generate your favicon...</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full animate-pulse w-full"></div>
            </div>
            <FaviconGenerator onGenerate={handleFaviconGenerated} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FaviconGeneratorPage;