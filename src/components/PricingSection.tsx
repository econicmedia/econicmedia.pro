import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp } from 'lucide-react';
import IconWrapper from './ui/IconWrapper';

// Add CSS for fade transition effect
const fadeAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
        className="absolute top-0 right-0 w-40 h-40 transform translate-x-1/3 -translate-y-1/3 rotate-12"
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <IconWrapper icon={BarChart2} size={160} position="decoration" className="text-neon-purple/40" />
      </motion.div>

      {/* Decorative Trending Up Icon (Bottom Left) - Pricing Context */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 transform -translate-x-1/3 translate-y-1/3 -rotate-12"
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <IconWrapper icon={TrendingUp} size={160} position="decoration" className="text-neon-cyan/40" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
            <IconWrapper icon={BarChart2} size={32} position="section-header" className="text-neon-cyan" />
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
                "text-sm font-medium mr-2", 
                !isDesignOnly ? "text-white" : "text-foreground/70"
              )}
            >
              {t('pricing.websites')}
            </span>
            <Switch 
              checked={isDesignOnly}
              onCheckedChange={handleToggleChange}
              className="data-[state=checked]:bg-neon-cyan data-[state=unchecked]:bg-gray-700"
            />
            <span 
              className={cn(
                "text-sm font-medium ml-2", 
                isDesignOnly ? "text-white" : "text-foreground/70"
              )}
            >
              {t('pricing.designOnly')}
            </span>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plansToDisplay.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                animate="visible"
                variants={fadeAnimation}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "group flex flex-col p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10",
                  "transition-all duration-300 hover:shadow-lg relative",
                  plan.popular ? "md:scale-105" : "",
                  plan.bestDeal ? "md:scale-[1.08]" : "",
                  cardGradients[index].borderHover
                )}
                style={{ 
                  background: cardGradients[index].background,
                  boxShadow: plan.popular || plan.bestDeal ? cardGradients[index].glow : "none"
                }}
              >
                {/* Special tags for Popular and Best Deal */}
                {(plan.popular || plan.bestDeal) && (
                  <div
                    className={cn(
                      "absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/2",
                      "px-3 py-1 rounded-full text-xs font-bold text-white",
                      cardGradients[index].tagGradient
                    )}
                  >
                    {plan.popular ? "Popular" : "Best Deal"}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                
                {plan.tag && plan.tag !== "Popular" && plan.tag !== "Best Deal" && (
                  <div className="mb-3 text-sm font-medium inline-flex px-2 py-1 bg-white/10 rounded-md text-neon-cyan">
                    {plan.tag}
                  </div>
                )}
                
                <p className="text-foreground/70 mt-2 mb-4">{plan.description}</p>
                
                <div className="text-3xl font-bold mb-6 mt-auto text-white">{plan.price}</div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={cn("mr-2 mt-1", cardGradients[index].checkColor)}>
                        <IconWrapper icon={Check} size={16} className={cardGradients[index].checkColor} />
                      </span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={cn(
                    "mt-auto w-full font-medium text-white",
                    cardGradients[index].buttonGradient
                  )}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
