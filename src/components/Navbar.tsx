import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };
  
  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#websites', label: 'Websites' },
    { href: '#benefits', label: t('nav.benefits') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#contact', label: t('nav.contact') },
  ];
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-background/70 backdrop-blur-lg border-b border-white/10' : 'py-4'}`}>
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-9 w-auto" /> {/* Adjusted for aspect ratio, text span removed */}
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-neon after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage} 
              className="text-sm text-foreground/80 hover:text-foreground px-3 py-1 rounded-md border border-white/10 glass-card transition-all"
            >
              {language === 'en' ? 'DE' : 'EN'}
            </button>
            
            <Button size="sm" className="bg-gradient-neon hover:opacity-90 transition-opacity cta-pulse-hover">
              <BookOpen className="mr-2 h-4 w-4" />
              {t('hero.cta')}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className={`w-6 flex flex-col gap-1 transition-all ${mobileMenuOpen ? 'rotate-90' : ''}`}>
            <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="text-base text-foreground/80 hover:text-foreground transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage} 
              className="text-sm text-foreground/80 hover:text-foreground px-3 py-1 rounded-md border border-white/10 glass-card transition-all"
            >
              {language === 'en' ? 'DE' : 'EN'}
            </button>
            
            <Button size="sm" className="bg-gradient-neon hover:opacity-90 transition-opacity cta-pulse-hover">
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
