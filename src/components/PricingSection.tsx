import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp } from 'lucide-react';

// Add CSS for fade transition effect
const fadeTransition = {
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  animationFillMode: 'forwards',
};

const fadeIn = {
  opacity: 1,
};

// Define different gradients for each card
const cardGradients = [
  {
    background: "linear-gradient(135deg, rgba(20, 184, 116, 0.2) 0%, rgba(18, 140, 126, 0.3) 100%)",
    glow: "0 0 20px rgba(52, 211, 153, 0.3)",
    buttonGradient: "bg-gradient-to-r from-green-400 to-emerald-500",
    tagGradient: "bg-gradient-to-r from-green-400 to-emerald-500",
    checkColor: "text-green-400",
    borderHover: "hover:border-green-300/50"
  },
  {
    background: "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(99, 102, 241, 0.3) 100%)",
    glow: "0 0 20px rgba(124, 58, 237, 0.3)",
    buttonGradient: "bg-gradient-to-r from-violet-500 to-indigo-500",
    tagGradient: "bg-gradient-to-r from-violet-500 to-indigo-500",
    checkColor: "text-violet-400",
    borderHover: "hover:border-violet-300/50"
  },
  {
    background: "linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(56, 189, 248, 0.3) 100%)",
    glow: "0 0 20px rgba(14, 165, 233, 0.3)",
    buttonGradient: "bg-gradient-to-r from-sky-500 to-blue-500",
    tagGradient: "bg-gradient-to-r from-sky-500 to-blue-500",
    checkColor: "text-sky-400",
    borderHover: "hover:border-sky-300/50"
  }
];

const PricingSection: React.FC = () => {
  const { t } = useLanguage();
  const [isDesignOnly, setIsDesignOnly] = useState(false);
  
  const websitePlans = [
    {
      name: "Monthly Website Plan",
      tag: "Starter",
      description: "Includes 20 product images and matching Facebook & Instagram marketing posters monthly. Ideal for lean businesses with ongoing design needs and low upfront costs.",
      price: "$200/month",
      features: [
        "20 product images monthly",
        "Matching Facebook & Instagram marketing posters monthly",
        "Low upfront costs",
        "Ongoing design needs coverage"
      ],
      cta: "Choose Plan",
      popular: false,
      bestDeal: false,
    },
    {
      name: "Yearly Website Plan",
      tag: "Popular",
      description: "Includes 50 product images and Facebook & Instagram marketing posters every month. Best value for long-term businesses looking to save big annually.",
      price: "$1,499/year",
      features: [
        "50 product images monthly",
        "Facebook & Instagram marketing posters monthly",
        "Best value annually",
        "Significant annual savings"
      ],
      cta: "Choose Plan",
      popular: true,
      bestDeal: false,
    },
    {
      name: "One-Time Website Plan",
      tag: "Best Deal",
      description: "Includes a custom-built site plus 50 product images and social media posters delivered monthly for 12 months. No recurring charges — full service in one payment.",
      price: "$2,500 (one-time)",
      features: [
        "Custom-built website",
        "50 product images monthly for 12 months",
        "Social media posters monthly for 12 months",
        "No recurring charges",
        "Full service in one payment"
      ],
      cta: "Contact Us",
      popular: false,
      bestDeal: true,
    },
  ];

  const designOnlyPlans = [
    {
      name: "Design Starter",
      tag: "",
      description: "Ideal for quick promotions or small campaigns.",
      price: "$99",
      features: [
        "20 product images",
        "Facebook & Instagram posters"
      ],
      cta: "Choose Plan",
      popular: false,
      bestDeal: false,
    },
    {
      name: "Design Pro",
      tag: "Popular",
      description: "Great for ongoing e-commerce or brand promotion.",
      price: "$149",
      features: [
        "50 product images",
        "Social content",
        "Great for ongoing campaigns"
      ],
      cta: "Choose Plan",
      popular: true,
      bestDeal: false,
    },
    {
      name: "Design Max",
      tag: "Best Deal",
      description: "High-volume, high-impact design bundle for brands that want to scale fast.",
      price: "$250",
      features: [
        "100 product images",
        "Complete social media bundle",
        "High-volume design bundle",
        "Ideal for scaling fast"
      ],
      cta: "Choose Plan",
      popular: false,
      bestDeal: true,
    },
  ];
  
  const plansToDisplay = isDesignOnly ? designOnlyPlans : websitePlans;

  // Create a toggle handler to ensure state updates properly
  const handleToggleChange = (checked: boolean) => {
    setIsDesignOnly(checked);
  };

  // Create custom styling for the switch container
  const switchContainerClass = "flex items-center justify-center py-2 px-4 rounded-full bg-background/10 backdrop-blur-sm";
  
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Decorative Bar Chart Icon (Top Right) - Pricing Context */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 text-neon-purple/20 transform translate-x-1/3 -translate-y-1/3 rotate-12 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: 15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <BarChart2 size={160} />
      </motion.div>

      {/* Decorative Trending Up Icon (Bottom Left) - Pricing Context */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 text-neon-cyan/20 transform -translate-x-1/3 translate-y-1/3 -rotate-12 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: -15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <TrendingUp size={160} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">{t('pricing.title')}</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-center text-foreground/80 mb-10 max-w-xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          {/* Enhanced styling for the switch container */}
          <div className={switchContainerClass + " mx-auto max-w-xs mb-12"}>
            <span 
              className={cn(
                "text-sm px-4 py-2 transition-all duration-300", 
                !isDesignOnly ? "text-foreground font-medium" : "text-foreground/60"
              )}
            >
              Websites
            </span>
            <Switch
              checked={isDesignOnly}
              onCheckedChange={handleToggleChange}
              className={cn(
                "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600/30",
                "transition-all duration-300"
              )}
            />
            <span 
              className={cn(
                "text-sm px-4 py-2 transition-all duration-300", 
                isDesignOnly ? "text-foreground font-medium" : "text-foreground/60"
              )}
            >
              Design Only
            </span>
          </div>
        </ScrollReveal>
        
        {/* Add key prop to force re-render and style for fade transition */}
        <div 
          key={isDesignOnly ? 'design' : 'websites'} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            ...fadeTransition,
            ...fadeIn,
          }}
        >
          {plansToDisplay.map((plan, index) => {
            // Get gradient for this card based on index
            const gradient = cardGradients[index];
            
            return (
              <ScrollReveal key={index} delay={index * 200}>
                <div 
                  className={`glass-card border rounded-2xl p-8 relative 
                    ${plan.popular || plan.bestDeal ? 'border-white/30 scale-[1.02] hover:scale-[1.05]' : 'border-white/10 hover:scale-[1.01]'}
                    ${gradient.borderHover} transition-all duration-300 h-full flex flex-col`}
                  style={{
                    background: gradient.background,
                    boxShadow: plan.popular || plan.bestDeal ? gradient.glow : "none"
                  }}
                >
                  {(plan.popular || plan.bestDeal) && (
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${gradient.tagGradient} text-background text-xs font-medium px-3 py-1 rounded-full`}>
                      {plan.tag}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/70 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold">
                      {plan.price}
                    </div>
                    <div className="text-sm text-foreground/70">
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className={`h-5 w-5 ${gradient.checkColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular || plan.bestDeal
                        ? `${gradient.buttonGradient} hover:opacity-90 text-background` 
                        : 'border-white/10 glass-card ' + gradient.borderHover
                    } animated-button transition-all duration-300 hover:scale-[1.02]`}
                    variant={plan.popular || plan.bestDeal ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
