
import React, { useRef, useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const images = [
  '/lovable-uploads/e720f737-f584-43e0-ad28-8b4e37cc8e80.png',
  '/lovable-uploads/b4b41df0-9f7f-40a7-b40d-4f7a66a0e2e6.png',
  '/lovable-uploads/bdc5d4b8-5fbe-438d-8572-18ca557016c1.png',
  '/lovable-uploads/2696d7cb-9e33-4741-97fe-5f2447a38e69.png',
  '/lovable-uploads/5a5e2254-5a72-4a0c-a4eb-36bab717f204.png',
  '/lovable-uploads/f71aca91-6b27-4100-a40e-883ce27ec690.png',
];

const PhotoCard: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Scroll-linked animation
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  
  // Auto-advance carousel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  // Pause autoplay when hovering
  useEffect(() => {
    if (isHovering) {
      setAutoplay(false);
    } else {
      setAutoplay(true);
    }
  }, [isHovering]);
  
  // Handle 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    setMousePosition({ x, y });
  };
  
  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  const navigateCarousel = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };
  
  return (
    <motion.div 
      ref={cardRef}
      className="glass-card relative overflow-hidden p-6 md:p-8 rounded-2xl transition-all duration-500 group h-full flex flex-col"
      style={{ 
        opacity, 
        scale,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onMouseEnter={() => setIsHovering(true)}
      onMouseOver={() => setIsHovering(true)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Light bloom effect following mouse */}
      <div 
        className="absolute pointer-events-none w-[40%] h-[40%] bg-gradient-radial from-neon-purple/15 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
        style={{ 
          left: `${mousePosition.x - 100}px`,
          top: `${mousePosition.y - 100}px`,
          transform: 'translateZ(30px)'
        }}
      />
      
      {/* Background glow effects */}
      <div className="absolute -inset-0.5 bg-gradient-neon opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-700 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 z-0"></div>
      
      <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(40px)' }}>
        {/* Icon and title */}
        <motion.div 
          className="flex items-center mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            <Camera size={24} className="text-background" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Product Photography</h3>
            <div className="h-1 w-12 bg-gradient-neon rounded-full mt-1"></div>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-foreground/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Capturing stunning product images that highlight details and create an emotional connection with your audience.
        </motion.p>
        
        {/* Image carousel */}
        <motion.div 
          ref={carouselRef}
          className="mt-auto relative overflow-hidden rounded-lg aspect-video"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10 pointer-events-none"></div>
          
          {/* Images */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentImageIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div 
                className="w-full h-full bg-cover bg-center shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
              >
                {/* Light reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Image counter */}
          <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs z-20 flex items-center">
            <Images size={14} className="mr-2 text-neon-cyan" />
            <span>{currentImageIndex + 1}/{images.length}</span>
          </div>
          
          {/* Navigation arrows - only shown on hover */}
          <div className={`absolute inset-y-0 left-0 flex items-center z-20 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
            <motion.button 
              onClick={() => navigateCarousel('prev')}
              className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white rounded-r-full p-2 ml-2 transform transition hover:scale-110"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
          </div>
          
          <div className={`absolute inset-y-0 right-0 flex items-center z-20 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
            <motion.button 
              onClick={() => navigateCarousel('next')}
              className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white rounded-l-full p-2 mr-2 transform transition hover:scale-110"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
          
          {/* Indicators */}
          <div className="absolute bottom-3 right-3 flex space-x-1.5 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className="group"
              >
                <motion.div 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex 
                      ? 'bg-neon-cyan w-6' 
                      : 'bg-white/50 group-hover:bg-white/80'
                  }`}
                  initial={false}
                  animate={{
                    width: idx === currentImageIndex ? '1.5rem' : '0.375rem',
                    backgroundColor: idx === currentImageIndex ? '#00FFFF' : 'rgba(255,255,255,0.5)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PhotoCard;
