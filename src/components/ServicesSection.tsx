import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import WebDesignCard from './WebDesignCard';
import PhotoCard from './PhotoCard';
import { useParallax } from '@/hooks/useParallax';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Code } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { x, y } = useParallax({ intensity: 0.02 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);

  return (
    <motion.section 
      id="services" 
      className="relative py-24 md:py-36 px-4 md:px-8 overflow-hidden" 
      ref={sectionRef}
      style={{ scale }}
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: backgroundY }}
      >
        {/* Decorative Web Design Icon (Top Right) - Services Context */}
        <motion.div
          className="absolute top-0 right-0 w-48 h-48 text-neon-cyan/20 transform translate-x-1/3 -translate-y-1/3 rotate-12 opacity-50"
          animate={{ 
            rotate: [12, 20, 12],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code size={192} />
        </motion.div>

        {/* Decorative Product Photography Icon (Bottom Left) - Services Context */}
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 text-neon-purple/20 transform -translate-x-1/3 translate-y-1/3 -rotate-12 opacity-50"
          animate={{ 
            rotate: [-12, -20, -12],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <Camera size={192} />
        </motion.div>
      </motion.div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div 
              key={i} 
              className="border-l border-white/10 h-full"
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div 
              key={i} 
              className="border-t border-white/10 w-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('services.title')}</span>
          </h2>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We transform ideas into stunning digital experiences through cutting-edge web design
            and captivating product photography.
          </motion.p>
        </motion.div>
        
        {/* Add visual connector between cards */}
        <div className="relative">
          <motion.div
            className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-neon-purple to-transparent transform -translate-x-1/2 md:block hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          ></motion.div>
          <div 
            className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 relative z-10"
            style={{
              transform: `translate3d(${x}px, ${y}px, 0px)`
            }}
          >
            <div className="h-full">
              <WebDesignCard />
            </div>
            
            <div className="h-full">
              <PhotoCard />
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-8 left-1/4 w-32 h-32 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-16 right-1/3 w-40 h-40 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
