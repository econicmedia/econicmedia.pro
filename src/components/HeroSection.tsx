import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';
import { Code, Camera } from 'lucide-react'; // Import contextual icons
import { OptimizedImage } from '@/components/ui/optimized-image';
import { preloadCriticalImages } from '@/lib/image-optimization';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Preload hero image to improve LCP
  useEffect(() => {
    preloadCriticalImages(["/lovable-uploads/70026725-9e78-48a3-8dd2-c8b817a3fba4.png"]);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/10 to-transparent"></div>
      
      {/* Decorative Code Icon (Top Right) - Hero Context */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 text-neon-cyan/20 transform translate-x-1/3 -translate-y-1/3 rotate-12 opacity-50"
        initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, rotate: 12, scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Code size={192} />
      </motion.div>
      
      {/* Decorative Camera Icon (Bottom Left) - Hero Context */}
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 text-neon-purple/20 transform -translate-x-1/3 translate-y-1/3 -rotate-12 opacity-50"
        initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, rotate: -12, scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Camera size={192} />
      </motion.div>
      
      {/* Gradient orb decorations */}
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left column: Text content */}
        <div className="z-10">
          <ScrollReveal delay={300}>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 glass-card text-sm font-medium">
              Econic Media
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">{t('hero.title')}</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={700}>
            <p className="text-lg text-foreground/80 mb-8 max-w-md">
              {t('hero.subtitle')}
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={900}>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-neon hover:opacity-90 transition-opacity cta-pulse-hover">
                {t('hero.cta')}
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/10 hover:bg-white/5 transition-colors cta-pulse-hover"
              >
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Visual connector line */}
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-neon-cyan to-transparent md:block hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        ></motion.div>

        {/* Right column: Hero Image with effects */}
        <div className="relative w-full">
          <ScrollReveal delay={300} direction="right">
            <div className="hero-image-container relative">
              {/* Animated gradient spotlight */}
              <div className="absolute inset-0 z-0 hero-spotlight"></div>
              
              {/* Neon glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-neon opacity-30 blur-lg z-0"></div>
              
              {/* The image - Optimized for LCP */}
              <AspectRatio ratio={16/12} className="relative z-10 overflow-hidden rounded-2xl">
                <OptimizedImage 
                  src="/lovable-uploads/70026725-9e78-48a3-8dd2-c8b817a3fba4.png" 
                  alt="Web Design and Product Photography" 
                  className="hero-image" 
                  priority={true}
                  objectFit="cover"
                />
              </AspectRatio>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
