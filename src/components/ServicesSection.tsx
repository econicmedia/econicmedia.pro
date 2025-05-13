import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ExpertiseCard from './ExpertiseCard'; // Import the new card
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Code, PenTool, Palette, Video, TrendingUp, Smartphone } from 'lucide-react'; // Import icons
import IconWrapper from './ui/IconWrapper';

// Define Expertise Items Data
const expertiseData = [
  {
    id: 'web-dev',
    icon: Code,
    titleKey: 'services.webDev.title', // For i18n
    descriptionKey: 'services.webDev.description', // For i18n
    defaultTitle: 'Web Development',
    defaultDescription: 'Crafting responsive, high-performance websites with modern technologies for a seamless user experience.',
  },
  {
    id: 'ui-ux',
    icon: PenTool,
    titleKey: 'services.uiUx.title',
    descriptionKey: 'services.uiUx.description',
    defaultTitle: 'UI/UX Design',
    defaultDescription: 'Designing intuitive and engaging user interfaces that enhance usability and drive conversion.',
  },
  {
    id: 'photo',
    icon: Camera,
    titleKey: 'services.photography.title',
    descriptionKey: 'services.photography.description',
    defaultTitle: 'Product Photography',
    defaultDescription: 'Capturing stunning, high-quality images that showcase your products and elevate your brand.',
  },
  {
    id: 'branding',
    icon: Palette,
    titleKey: 'services.branding.title',
    descriptionKey: 'services.branding.description',
    defaultTitle: 'Branding & Identity',
    defaultDescription: 'Developing unique brand identities that resonate with your target audience and build recognition.',
  },
  {
    id: 'video',
    icon: Video,
    titleKey: 'services.video.title',
    descriptionKey: 'services.video.description',
    defaultTitle: 'Video Production',
    defaultDescription: 'Creating compelling video content, from promotional shorts to product showcases, that tells your story.',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    titleKey: 'services.marketing.title',
    descriptionKey: 'services.marketing.description',
    defaultTitle: 'Digital Marketing',
    defaultDescription: 'Implementing data-driven marketing strategies to boost your online presence and achieve growth.',
  },
  // Example for a 7th item if a 3-2-2 layout is strictly needed later.
  // {
  //   id: 'mobile-app',
  //   icon: Smartphone,
  //   titleKey: 'services.mobileApp.title',
  //   descriptionKey: 'services.mobileApp.description',
  //   defaultTitle: 'Mobile App Development',
  //   defaultDescription: 'Building custom mobile applications for iOS and Android to extend your reach and engagement.',
  // },
];

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax and animation for the section itself (can be kept or adjusted)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']); // Reduced parallax intensity
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]); // Subtle scale for section

  return (
    <motion.section 
      id="services" 
      className="relative py-20 md:py-28 px-4 overflow-hidden" // Adjusted padding
      ref={sectionRef}
      style={{ scale: sectionScale }}
    >
      {/* Decorative Background Icons (updated with IconWrapper) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 md:w-48 md:h-48 transform translate-x-1/4 -translate-y-1/4 rotate-12"
          animate={{ rotate: [12, 25, 12], scale: [1, 1.1, 1]}}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        >
          <IconWrapper icon={Code} size="100%" position="decoration" className="text-neon-cyan/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-40 h-40 md:w-48 md:h-48 transform -translate-x-1/4 translate-y-1/4 -rotate-12"
          animate={{ rotate: [-12, -25, -12], scale: [1, 1.1, 1]}}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        >
          <IconWrapper icon={Camera} size="100%" position="decoration" className="text-neon-purple/30" />
        </motion.div>
      </motion.div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-20" // Adjusted margin
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-gradient flex items-center justify-center gap-3">
            <IconWrapper icon={TrendingUp} size={32} position="section-header" className="text-neon-cyan" />
            {t('expertise.title') /* Using existing key for "Our Expertise" */}
          </h2>
          <p className="text-md md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {/* For subtitle, provide a default if 'services.newSubtitle' is not in translations */}
            {t('services.newSubtitle') === 'services.newSubtitle' 
              ? 'We transform ideas into stunning digital experiences through cutting-edge web design, captivating product photography, and more.' 
              : t('services.newSubtitle')}
          </p>
        </motion.div>
        
        {/* New Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseData.map((item, index) => {
            const translatedTitle = t(item.titleKey);
            const title = translatedTitle === item.titleKey ? item.defaultTitle : translatedTitle;
            
            const translatedDescription = t(item.descriptionKey);
            const description = translatedDescription === item.descriptionKey ? item.defaultDescription : translatedDescription;

            return (
              <ExpertiseCard 
                key={item.id}
                icon={item.icon}
                title={title}
                description={description}
                delay={index}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
