
import { useEffect, useState } from 'react';

interface ParallaxOptions {
  intensity?: number;
  reversed?: boolean;
}

export const useParallax = ({ intensity = 0.1, reversed = false }: ParallaxOptions = {}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * intensity;
      const y = (window.innerHeight / 2 - e.clientY) * intensity;
      
      setPosition({ 
        x: reversed ? -x : x, 
        y: reversed ? -y : y 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, reversed]);
  
  return position;
};
