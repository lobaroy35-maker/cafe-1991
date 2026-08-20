'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr) {
        setCursorText(cursorAttr);
        setIsHovered(true);
      } else if (target.closest('a, button, input, select, textarea')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!mounted || isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-sans"
      animate={{
        x: mousePosition.x - (isHovered ? (cursorText ? 44 : 20) : 10),
        y: mousePosition.y - (isHovered ? (cursorText ? 44 : 20) : 10),
        scale: isHovered ? (cursorText ? 1.2 : 1.5) : 1,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 350,
        mass: 0.5,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-300 ${
          cursorText
            ? 'w-20 h-20 bg-charcoal/90 text-milk text-[10px] font-medium tracking-widest text-center px-2 shadow-2xl backdrop-blur-sm'
            : isHovered
            ? 'w-10 h-10 border border-terracotta bg-peach/20 backdrop-blur-xs'
            : 'w-5 h-5 bg-terracotta/40 border border-terracotta/60'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </motion.div>
  );
}
