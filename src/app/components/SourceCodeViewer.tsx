'use client';

import { useState } from 'react';
import { FiCode, FiX } from 'react-icons/fi';

export default function SourceCodeViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [sourceCode, setSourceCode] = useState('');

  const handleViewSource = async () => {
    try {
      const response = await fetch(window.location.href);
      const html = await response.text();
      setSourceCode(html);
      setIsOpen(true);
    } catch (error) {
      console.error('Error fetching source code:', error);
    }
  };

  return (
    <>
      <button
        onClick={handleViewSource}
        className="ml-2 text-gray-700 hover:text-black text-2xl"
        title="View Source Code"
      >
        <FiCode />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Source Code</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                {sourceCode}
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 