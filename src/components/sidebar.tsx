"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import { AlignLeft, ChevronsLeft, Plus, Compass, Search, Users, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const DynamicThemeToggler = dynamic(() => import('@/lib/theme/get-theme-button').then(mod => mod.getThemeToggler()), {
  ssr: false,
});

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`${isOpen ? 'w-64 border-r' : 'w-0'} h-full bg-white dark:bg-neutral-900 transition-all duration-500 ease-in-out overflow-hidden border-gray-200 dark:border-neutral-800`}
    >
      {isOpen ? (
        <div className="h-full flex flex-col">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Link className="text-xl font-bold text-black dark:text-white p-2" href={"/"}>aifriendhub</Link>
              <div className="flex items-center space-x-2">
                <DynamicThemeToggler />
                <Button
                  onClick={toggleSidebar}
                  variant="ghost"
                  size="icon"
                  className="p-0 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <ChevronsLeft className='w-4 h-4'/>
                </Button>
              </div>
            </div>
            
            <Link
              href="/new"
              className="w-full py-2 px-4 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white rounded-full text-center mb-4 flex items-center justify-center text-sm hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" /> Create
            </Link>
            
            <button className="w-full py-2 px-4 text-left mb-4 flex items-center text-sm text-black dark:text-white">
              <Compass className="w-4 h-4 mr-2" />
              Discover
            </button>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Characters"
                className="w-full py-2 px-4 pl-10 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white rounded-full text-sm"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <h2 className="text-xs font-semibold text-gray-500 mb-2">Today</h2>
            <div className="space-y-2">
              {['Character Assistant', 'Android apps', 'AI critic', 'DecisionHelper', 'Peni Parker', 'School Bully', 'Nicki Minaj', 'Dry Texter'].map((char, index) => (
                <div key={index} className="flex items-center space-x-2 py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <span className="text-sm text-black dark:text-white">{char}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[9px] text-center text-gray-500">
                Privacy Policy • Terms of Service
              </p>
            </div>
            <button className="w-full py-3 px-4 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white rounded-full text-center text-sm hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors mb-4">
              Try Pro+
            </button>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  b
                </div>
                <span className="text-sm text-black dark:text-white">bobcoi03</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      ) : null}
      {!isOpen && (
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="absolute z-50 top-4 left-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <AlignLeft className='w-6 h-6'/>
        </Button>
      )}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(155, 155, 155, 0.5);
          border-radius: 20px;
          border: transparent;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
        }
      `}</style>
    </div>
  );
};

export default SideBar;