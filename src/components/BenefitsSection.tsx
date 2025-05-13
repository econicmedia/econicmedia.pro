import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { Check, Smartphone, Zap, Image, Search, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Palette, Share2, Monitor, Rotate3d, Layout, Film, Camera } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      title: "Branding & Identity Design",
      description: "Create a distinctive brand identity that resonates with your audience. Our comprehensive branding solutions include logo design, color palettes, typography, and brand guidelines to ensure consistency across all platforms.",
      icon: <Palette size={36} className="text-neon-blue" />,
    },
    {
      title: "Social Media Ad Creatives",
      description: "Scroll-stopping social media visuals that drive engagement and conversions. We craft platform-optimized ad creatives for Facebook, Instagram, and TikTok that align with your brand voice and campaign objectives.",
      icon: <Share2 size={36} className="text-neon-pink" />,
    },
    {
      title: "Custom Website Design",
      description: "Stunning, conversion-focused websites that transform visitors into customers. Our web design combines beautiful aesthetics with strategic user experience to create sites that not only look amazing but perform exceptionally well.",
      icon: <Monitor size={36} className="text-neon-green" />,
    },
    {
      title: "3D Product Visualization",
      description: "Photorealistic 3D product renders that showcase your products from any angle. Eliminate photography limitations with virtual product visualization that can be created before physical production.",
      icon: <Rotate3d size={36} className="text-neon-yellow" />,
    },
    {
      title: "UI/UX Design for E-commerce",
      description: "Intuitive e-commerce interfaces that enhance user experience and boost sales. We design landing page visuals and customer journeys that reduce friction and guide visitors through your conversion funnel.",
      icon: <Layout size={36} className="text-neon-purple" />,
    },
    {
      title: "Product Video Production",
      description: "Dynamic product videos that showcase features and benefits in motion. From unboxing experiences to feature highlights, our video content helps potential customers visualize your product in action.",
      icon: <Film size={36} className="text-neon-red" />,
    },
    {
      title: "Product Photography Without Shipping",
      description: "Studio-quality product imagery without shipping anything to us. Send your high-resolution photos, and we'll transform them into professional marketing visuals with perfect lighting, shadows, and compositions.",
      icon: <Camera size={36} className="text-neon-cyan" />,
    },
  ];

  return (
    <section id="expertise" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Reduced number of background shapes for better performance */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-neon-blue opacity-10 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-neon-pink opacity-10 rounded-full filter blur-3xl z-0"></div>

      {/* Decorative Palette Icon (Top Right) - Expertise Context */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 text-neon-cyan/20 transform translate-x-1/3 -translate-y-1/3 rotate-12 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: 15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Palette size={160} />
      </motion.div>

      {/* Decorative Monitor Icon (Bottom Left) - Expertise Context */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 text-neon-purple/20 transform -translate-x-1/3 translate-y-1/3 -rotate-12 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: -15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Monitor size={160} />
      </motion.div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-blue mb-12"
          >
            {t('expertise.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: Math.min(0.05 * index, 0.3) }}
                className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-neon-blue transition-all duration-300 ease-in-out group cursor-pointer relative overflow-hidden hover:shadow-lg"
              >
                {/* Removed duplicate decorative icon in the corner */}

                <div className="flex items-center justify-center mb-6">
                   {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 leading-relaxed">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
