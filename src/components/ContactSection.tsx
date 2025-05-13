import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { Mail, Send, MessageSquare, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Do I need to ship products for photography?",
      answer: "No, there's no need to ship your products to us. Our innovative process allows you to simply send high-resolution photos of your products, and we'll transform them into professional studio-quality images with perfect lighting, shadows, and compositions. This saves you time, shipping costs, and potential product damage risks."
    },
    {
      question: "What file formats do I get with my design package?",
      answer: "We provide all deliverables in multiple formats to ensure maximum versatility. For images, you'll receive high-resolution JPG/PNG files optimized for web and print, along with editable PSD/AI source files where applicable. For web design, you'll get complete website files, responsive layouts, and all graphical assets in appropriate formats. We can accommodate specific format requests to meet your particular needs."
    },
    {
      question: "Can you design for my social media brand?",
      answer: "Absolutely! We specialize in creating cohesive social media visual branding across all platforms. Our social media design packages include custom graphics, post templates, story templates, profile elements, and ad creatives specifically optimized for each platform's requirements (Instagram, Facebook, TikTok, LinkedIn, etc.). We ensure your brand maintains consistent visual identity while maximizing engagement on each platform."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <ScrollReveal>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="text-gradient">Frequently Asked Questions</span>
        </h3>
      </ScrollReveal>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <div 
              className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all bg-background/40 backdrop-blur-sm"
            >
              <button
                className="flex items-center justify-between w-full p-5 text-left font-medium text-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? 
                  <Minus className="h-5 w-5 text-neon-cyan" /> : 
                  <Plus className="h-5 w-5 text-neon-cyan" />
                }
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-foreground/80">
                  {item.answer}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Decorative Mail Icon (Top Right) - Contact Context */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 text-neon-cyan/20 transform translate-x-1/3 -translate-y-1/3 rotate-12 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: 15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Mail size={160} />
      </motion.div>

      {/* Decorative Send Icon (Bottom Left) - Contact Context */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 text-neon-purple/20 transform -translate-x-1/3 translate-y-1/3 -rotate-12 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: -15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Send size={160} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-center text-foreground/80 mb-16 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </ScrollReveal>
        
        {/* CTA Buttons */}
        <div className="max-w-lg mx-auto">
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Button */}
              <a 
                href="mailto:wtf@econicmedia.pro" 
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-neon-cyan rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 hover:scale-105 text-center"
              >
                <Mail className="h-6 w-6" />
                <span className="text-lg">Drop us an email</span>
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/491723773552" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 text-center"
              >
                <MessageSquare className="h-6 w-6" />
                <span className="text-lg">Talk to us on WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
        
        {/* FAQ Section */}
        <FAQ />
      </div>
    </section>
  );
};

export default ContactSection;
