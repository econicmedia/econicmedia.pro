import React, { useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import GallerySection from '@/components/GallerySection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  useScrollReveal();
  
  // Update the page title and meta tags
  useEffect(() => {
    // Set basic meta data
    document.title = 'Econic Media | Product Photography & Branding Design Agency';
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Transform your products with studio-quality photography without shipping and professional branding design. Boost conversions with our e-commerce visual solutions.');
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://econicmedia.pro');
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'Econic Media | Product Photography & Branding Design Agency' },
      { property: 'og:description', content: 'Transform your products with studio-quality photography without shipping and professional branding design. Boost conversions with our e-commerce visual solutions.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://econicmedia.pro' },
      { property: 'og:image', content: 'https://econicmedia.pro/lovable-uploads/f71aca91-6b27-4100-a40e-883ce27ec690.png' }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
    
    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Econic Media | Product Photography & Branding Design Agency' },
      { name: 'twitter:description', content: 'Transform your products with studio-quality photography without shipping and professional branding design. Boost conversions with our e-commerce visual solutions.' },
      { name: 'twitter:image', content: 'https://econicmedia.pro/lovable-uploads/f71aca91-6b27-4100-a40e-883ce27ec690.png' }
    ];
    
    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', tag.name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', tag.content);
    });
    
  }, []);
  
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <HeroSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <BenefitsSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <GallerySection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <PortfolioSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <PricingSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <TestimonialsSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <ContactSection />
        </motion.section>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
