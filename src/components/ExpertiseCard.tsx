import React from 'react';
import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';
import IconWrapper from './ui/IconWrapper';

interface ExpertiseCardProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
  delay?: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative p-6 bg-black/10 hover:bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 
                 shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300 
                 hover:scale-105 hover:-translate-y-1 group"
      style={{
        // For a more pronounced glass effect, ensure parent has a contrasting background or image
        // The rgba background provides a fallback if backdrop-filter is not fully supported or for layering
        backgroundColor: 'rgba(25, 28, 36, 0.3)', // Dark translucent base, adjust as needed
      }}
    >
      {/* Optional: Inner border/glow effect */}
      <div className="absolute inset-0 rounded-xl border border-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-5 flex justify-center">
          <div className="p-3 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full shadow-inner-soft group-hover:shadow-neon-cyan/40 transition-shadow duration-300">
            <IconWrapper 
              icon={icon} 
              size={40} 
              position="card" 
              className="group-hover:text-white transition-colors duration-300" 
            />
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center text-white group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-foreground/70 text-center flex-grow leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;
