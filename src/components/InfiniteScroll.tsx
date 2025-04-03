'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface InfiniteScrollProps {
  children: React.ReactNode;
  speed?: number; // pixels per second
  direction?: 'left' | 'right';
}

export default function InfiniteScroll({ 
  children, 
  speed = 20, 
  direction = 'left' 
}: InfiniteScrollProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 400; // Adjust this value to control scroll distance
    const newPosition = direction === 'left' 
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount;
    
    scrollRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative group">
      {/* Left scroll button */}
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 dark:bg-slate-800/80 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5 text-slate-900 dark:text-white" />
      </button>

      {/* Right scroll button */}
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 dark:bg-slate-800/80 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 text-slate-900 dark:text-white" />
      </button>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />

      {/* Scrollable content */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6 md:gap-8 pb-4 min-w-max">
          {children}
        </div>
      </div>
    </div>
  );
}