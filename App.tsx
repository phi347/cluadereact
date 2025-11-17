
import React, { useState, useCallback } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center transition-colors duration-500">
      <div className=" text-center transform  transition-transform duration-300">
        
        
        
        <div className>
          <p 
            className="text-7xl sm:text-8xl font-mono font-extrabold "
            
          >
            {count}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleIncrement}
            className="w-full flex-1 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            aria-label="Increment count"
          >
            Increment
          </button>
          <button
            onClick={handleReset}
            className="w-full flex-1 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            aria-label="Reset count"
          >
            Reset
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;
