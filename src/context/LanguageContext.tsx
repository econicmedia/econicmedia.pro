import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface Translations {
  [key: string]: string;
}

type TranslationsCollection = {
  [key in Language]: Translations;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations: TranslationsCollection = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.gallery': 'Gallery',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Elevate Your Digital Presence',
    'hero.subtitle': 'Modern web design and professional product photography for ambitious brands',
    'hero.cta': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    
    // Services Section
    'services.title': 'What We Do',
    'services.web.title': 'High-End Web Design & Branding',
    'services.web.description': 'Elevate your brand with stunning **web design**, strategic layouts, and immersive user experiences. We specialize in creating responsive websites that convert visitors into customers. Our services include **full product branding**, **packaging design**, **posters**, **advertisements**, and **social media posts** that capture attention and drive engagement.',
    'services.photo.title': 'Visual Product Photography',
    'services.photo.description': 'Get professional, high-converting **product images** for Amazon, e-commerce, and marketing. Our **product photography** service is entirely **visual-based**: simply **send us pictures of your products**, and we\'ll transform them into stunning visuals – **no physical shipping required**.',
    
    // Benefits Section
    'benefits.title': 'Why Choose Us',
    'benefits.1.title': 'Modern Design',
    'benefits.1.description': 'Clean, bold aesthetics that keep your brand ahead of trends',
    'benefits.2.title': 'Mobile Optimized',
    'benefits.2.description': 'Reach Every Customer on Any Device with a Seamless Experience',
    'benefits.3.title': 'Speed Focused',
    'benefits.3.description': 'Experience Blazing Fast Load Times for Happier Users',
    'benefits.4.title': 'Professional Photos',
    'benefits.4.description': 'Get Stunning Product Visuals that Boost Conversion Rates',
    'benefits.5.title': 'SEO Ready',
    'benefits.5.description': 'Rank Higher on Google and Attract More Organic Traffic',
    'benefits.6.title': '24/7 Support',
    'benefits.6.description': 'Get Expert Support and Guidance Whenever You Need It',
    
    // Expertise Section
    'expertise.title': 'Our Expertise',
    'expertise.branding.title': 'Branding & Identity Design',
    'expertise.branding.description': 'Logos, color palettes, typography systems & full brand packages',
    'expertise.social.title': 'Social Media Content Design',
    'expertise.social.description': 'Posts, stories, ad creatives, thumbnails, reels covers & more',
    'expertise.web.title': 'Website & App Visuals',
    'expertise.web.description': 'Landing page mockups, UI/UX graphics, hero visuals, case study sections',
    'expertise.3d.title': '3D Modeling & Visualization',
    'expertise.3d.description': 'Product renders, spatial designs, interactive prototypes & animations',
    'expertise.uiux.title': 'UI/UX Design Systems',
    'expertise.uiux.description': 'Component libraries, design tokens, responsive layouts & wireframes',
    'expertise.video.title': 'Video & Motion Graphics',
    'expertise.video.description': 'Intros, animated text, subtitles, transitions for reels & shorts',
    'expertise.visuals.title': 'AI-Enhanced Visual Storytelling',
    'expertise.visuals.description': 'Scene generation via AI, branded visuals for campaigns & social proof',
    
    // Gallery Section
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'Recent projects that showcase our expertise',
    
    // Pricing Section
    'pricing.title': 'Pricing Plans',
    'pricing.subtitle': 'Transparent pricing for your business needs',
    'pricing.monthly': 'Monthly',
    'pricing.annually': 'Annually',
    'pricing.basic.title': 'Basic',
    'pricing.basic.price.monthly': '$1,499',
    'pricing.basic.price.annually': '$14,990',
    'pricing.basic.description': 'Perfect for small businesses getting started',
    'pricing.basic.feature.1': 'Custom 5-page website',
    'pricing.basic.feature.2': '10 product photos',
    'pricing.basic.feature.3': 'Mobile responsive design',
    'pricing.basic.feature.4': 'Basic SEO setup',
    'pricing.basic.cta': 'Choose Plan',
    
    'pricing.pro.title': 'Professional',
    'pricing.pro.price.monthly': '$2,999',
    'pricing.pro.price.annually': '$29,990',
    'pricing.pro.description': 'Ideal for growing businesses',
    'pricing.pro.feature.1': 'Custom 10-page website',
    'pricing.pro.feature.2': '25 product photos',
    'pricing.pro.feature.3': 'Advanced SEO optimization',
    'pricing.pro.feature.4': 'Social media integration',
    'pricing.pro.feature.5': 'Analytics dashboard',
    'pricing.pro.cta': 'Choose Plan',
    
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.price.monthly': '$5,999',
    'pricing.enterprise.price.annually': '$59,990',
    'pricing.enterprise.description': 'For established brands with complex needs',
    'pricing.enterprise.feature.1': 'Custom 20+ page website',
    'pricing.enterprise.feature.2': '50+ product photos',
    'pricing.enterprise.feature.3': 'E-commerce integration',
    'pricing.enterprise.feature.4': 'Custom animations',
    'pricing.enterprise.feature.5': 'Priority support',
    'pricing.enterprise.feature.6': 'Regular content updates',
    'pricing.enterprise.cta': 'Contact Us',
    
    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.1.text': 'Econic Media transformed our online presence completely. Our conversion rates have increased by 40% since launching our new website.',
    'testimonials.1.author': 'Sarah Johnson',
    'testimonials.1.position': 'CEO, StyleTech',
    'testimonials.2.text': 'The product photography services exceeded our expectations. Our Amazon listings now convert at twice the rate they did before.',
    'testimonials.2.author': 'Michael Chen',
    'testimonials.2.position': 'Marketing Director, GadgetHub',
    'testimonials.3.text': 'Working with Econic was effortless. They understood our vision immediately and delivered a website that perfectly represents our brand.',
    'testimonials.3.author': 'Lisa Müller',
    'testimonials.3.position': 'Founder, Artisan Crafts',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s discuss your project',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Thanks! We\'ll be in touch soon.',
    
    // Footer
    'footer.company': '© 2025 Econic Media. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.benefits': 'Vorteile',
    'nav.gallery': 'Galerie',
    'nav.pricing': 'Preise',
    'nav.testimonials': 'Referenzen',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Verbessern Sie Ihre digitale Präsenz',
    'hero.subtitle': 'Modernes Webdesign und professionelle Produktfotografie für ambitionierte Marken',
    'hero.cta': 'Loslegen',
    'hero.cta.secondary': 'Mehr erfahren',
    
    // Services Section
    'services.title': 'Was wir tun',
    'services.web.title': 'Hochwertiges Webdesign & Branding',
    'services.web.description': 'Verbessern Sie Ihre Marke mit beeindruckendem **Webdesign**, strategischen Layouts und immersiven Benutzererlebnissen. Wir sind spezialisiert auf die Erstellung responsiver Websites, die Besucher in Kunden verwandeln. Unsere Leistungen umfassen **vollständiges Produktbranding**, **Verpackungsdesign**, **Poster**, **Werbeanzeigen** und **Social-Media-Beiträge**, die Aufmerksamkeit erregen und Engagement fördern.',
    'services.photo.title': 'Visuelle Produktfotografie',
    'services.photo.description': 'Erhalten Sie professionelle, hochkonvertierende **Produktbilder** für Amazon, E-Commerce und Marketing. Unser Service für **Produktfotografie** ist vollständig **visuell-basiert**: Senden Sie uns einfach **Bilder Ihrer Produkte**, und wir verwandeln diese in beeindruckende Visuals – **kein physischer Versand erforderlich**.',
    
    // Benefits Section
    'benefits.title': 'Was wir auf den Tisch bringen',
    'benefits.1.title': 'Modernes Design',
    'benefits.1.description': 'Klare, mutige Ästhetik, die Ihre Marke den Trends voraus hält',
    'benefits.2.title': 'Mobile Optimiert',
    'benefits.2.description': 'Erreichen Sie jeden Kunden auf jedem Gerät mit nahtloser Erfahrung',
    'benefits.3.title': 'Geschwindigkeitsfokussiert',
    'benefits.3.description': 'Erleben Sie blitzschnelle Ladezeiten für zufriedenere Benutzer',
    'benefits.4.title': 'Professionelle Fotos',
    'benefits.4.description': 'Erhalten Sie beeindruckende Produktbilder, die Konversionsraten steigern',
    'benefits.5.title': 'SEO-Bereit',
    'benefits.5.description': 'Ranken Sie höher bei Google und ziehen Sie mehr organischen Traffic an',
    'benefits.6.title': '24/7 Support',
    'benefits.6.description': 'Erhalten Sie Experten-Support und Anleitung, wann immer Sie ihn brauchen',

    // Expertise Section
    'expertise.title': 'Unsere Expertise',
    'expertise.branding.title': 'Branding & Identitätsdesign',
    'expertise.branding.description': 'Logos, Farbpaletten, Typografiesysteme & komplette Markenpakete',
    'expertise.social.title': 'Social Media Content Design',
    'expertise.social.description': 'Posts, Stories, Werbekreationen, Thumbnails, Reels-Cover & mehr',
    'expertise.web.title': 'Website & App Visuals',
    'expertise.web.description': 'Landing-Page-Mockups, UI/UX-Grafiken, Hero-Visuals, Fallstudienbereiche',
    'expertise.3d.title': '3D-Modellierung & Visualisierung',
    'expertise.3d.description': 'Produktdarstellungen, Raumdesigns, interaktive Prototypen & Animationen',
    'expertise.uiux.title': 'UI/UX-Designsysteme',
    'expertise.uiux.description': 'Komponentenbibliotheken, Design-Tokens, responsive Layouts & Wireframes',
    'expertise.video.title': 'Video & Motion Graphics',
    'expertise.video.description': 'Intros, animierte Texte, Untertitel, Übergänge für Reels & Shorts',
    'expertise.visuals.title': 'KI-erweiterte visuelle Geschichtenerzählung',
    'expertise.visuals.description': 'Szenengenerierung via KI, Markenbilder für Kampagnen & soziale Beweise',
    
    // Gallery Section
    'gallery.title': 'Unsere Arbeit',
    'gallery.subtitle': 'Aktuelle Projekte, die unsere Expertise zeigen',
    
    // Pricing Section
    'pricing.title': 'Preispläne',
    'pricing.subtitle': 'Transparente Preise für Ihre Geschäftsanforderungen',
    'pricing.monthly': 'Monatlich',
    'pricing.annually': 'Jährlich',
    'pricing.basic.title': 'Basic',
    'pricing.basic.price.monthly': '1.499 €',
    'pricing.basic.price.annually': '14.990 €',
    'pricing.basic.description': 'Perfekt für kleine Unternehmen, die gerade starten',
    'pricing.basic.feature.1': 'Individuelle 5-Seiten-Website',
    'pricing.basic.feature.2': '10 Produktfotos',
    'pricing.basic.feature.3': 'Mobil-responsives Design',
    'pricing.basic.feature.4': 'Grundlegende SEO-Einrichtung',
    'pricing.basic.cta': 'Plan wählen',
    
    'pricing.pro.title': 'Professional',
    'pricing.pro.price.monthly': '2.999 €',
    'pricing.pro.price.annually': '29.990 €',
    'pricing.pro.description': 'Ideal für wachsende Unternehmen',
    'pricing.pro.feature.1': 'Individuelle 10-Seiten-Website',
    'pricing.pro.feature.2': '25 Produktfotos',
    'pricing.pro.feature.3': 'Erweiterte SEO-Optimierung',
    'pricing.pro.feature.4': 'Social Media Integration',
    'pricing.pro.feature.5': 'Analytics Dashboard',
    'pricing.pro.cta': 'Plan wählen',
    
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.price.monthly': '5.999 €',
    'pricing.enterprise.price.annually': '59.990 €',
    'pricing.enterprise.description': 'Für etablierte Marken mit komplexen Anforderungen',
    'pricing.enterprise.feature.1': 'Individuelle 20+ Seiten-Website',
    'pricing.enterprise.feature.2': '50+ Produktfotos',
    'pricing.enterprise.feature.3': 'E-Commerce Integration',
    'pricing.enterprise.feature.4': 'Benutzerdefinierte Animationen',
    'pricing.enterprise.feature.5': 'Prioritärer Support',
    'pricing.enterprise.feature.6': 'Regelmäßige Inhaltsaktualisierungen',
    'pricing.enterprise.cta': 'Kontaktieren Sie uns',
    
    // Testimonials Section
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.1.text': 'Econic Media hat unsere Online-Präsenz komplett transformiert. Unsere Konversionsraten sind seit dem Start unserer neuen Website um 40% gestiegen.',
    'testimonials.1.author': 'Sarah Johnson',
    'testimonials.1.position': 'CEO, StyleTech',
    'testimonials.2.text': 'Die Produktfotografie-Dienste haben unsere Erwartungen übertroffen. Unsere Amazon-Angebote konvertieren jetzt doppelt so gut wie zuvor.',
    'testimonials.2.author': 'Michael Chen',
    'testimonials.2.position': 'Marketing Direktor, GadgetHub',
    'testimonials.3.text': 'Die Zusammenarbeit mit Econic war mühelos. Sie haben unsere Vision sofort verstanden und eine Website geliefert, die unsere Marke perfekt repräsentiert.',
    'testimonials.3.author': 'Lisa Müller',
    'testimonials.3.position': 'Gründerin, Artisan Crafts',
    
    // Contact Section
    'contact.title': 'Kontakt aufnehmen',
    'contact.subtitle': 'Lassen Sie uns über Ihr Projekt sprechen',
    'contact.name': 'Vollständiger Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.message': 'Ihre Nachricht',
    'contact.submit': 'Nachricht senden',
    'contact.success': 'Danke! Wir werden uns bald bei Ihnen melden.',
    
    // Footer
    'footer.company': '© 2025 Econic Media. Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
