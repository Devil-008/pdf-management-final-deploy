import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import ToolPage from './ToolPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-white shadow-sm relative">
          <nav className="container mx-auto px-6 py-4">
            <div className="relative group">
              <a href="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                <svg className="w-7 h-7 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                </svg>
                PDF Tools
                <svg className="w-4 h-4 ml-2 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
              
              {/* Hover Dropdown with Feature Names */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    Available PDF Tools
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="/merge" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-xs font-bold">M</span>
                      </div>
                      <span className="text-sm text-gray-700">Merge PDF</span>
                    </a>
                    <a href="/split" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-green-600 text-xs font-bold">S</span>
                      </div>
                      <span className="text-sm text-gray-700">Split PDF</span>
                    </a>
                    <a href="/compress" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-yellow-600 text-xs font-bold">C</span>
                      </div>
                      <span className="text-sm text-gray-700">Compress</span>
                    </a>
                    <a href="/word-to-pdf" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-xs font-bold">W</span>
                      </div>
                      <span className="text-sm text-gray-700">Word to PDF</span>
                    </a>
                    <a href="/pdf-to-word" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-red-600 text-xs font-bold">P</span>
                      </div>
                      <span className="text-sm text-gray-700">PDF to Word</span>
                    </a>
                    <a href="/rotate" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-indigo-600 text-xs font-bold">R</span>
                      </div>
                      <span className="text-sm text-gray-700">Rotate PDF</span>
                    </a>
                    <a href="/unlock" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-orange-600 text-xs font-bold">U</span>
                      </div>
                      <span className="text-sm text-gray-700">Unlock PDF</span>
                    </a>
                    <a href="/protect" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-pink-600 text-xs font-bold">P</span>
                      </div>
                      <span className="text-sm text-gray-700">Protect PDF</span>
                    </a>
                    <a href="/watermark" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-teal-600 text-xs font-bold">W</span>
                      </div>
                      <span className="text-sm text-gray-700">Watermark</span>
                    </a>
                    <a href="/jpg-to-pdf" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-emerald-600 text-xs font-bold">J</span>
                      </div>
                      <span className="text-sm text-gray-700">JPG to PDF</span>
                    </a>
                    <a href="/pdf-to-jpg" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-cyan-600 text-xs font-bold">P</span>
                      </div>
                      <span className="text-sm text-gray-700">PDF to JPG</span>
                    </a>
                    <a href="/sign" className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-violet-600 text-xs font-bold">S</span>
                      </div>
                      <span className="text-sm text-gray-700">Sign PDF</span>
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center">Click any tool to get started</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:toolName" element={<ToolPage />} />
        </Routes>

        <footer className="bg-white mt-auto py-4">
          <div className="container mx-auto px-6 text-center text-gray-600">
            <p className="mb-2">&copy; 2025 PDF Tools. All Rights Reserved.</p>
            <p>Developed with ❤️ by <a href="https://github.com/Devil-008" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 hover:underline">Himanshu</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
