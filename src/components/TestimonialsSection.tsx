import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: "Econic Media transformed our product photography without requiring us to ship anything. Their ability to create studio-quality visuals from our basic photos increased our conversion rate by 28% within the first month. Their attention to detail is exceptional.",
      author: "Sarah Johnson",
      position: "E-commerce Director, NutriBlend",
      rating: 5,
      service: "Product Photography"
    },
    {
      text: "We hired Econic Media for our social media ad creatives and website design. Their comprehensive approach to our brand's visual identity helped us achieve a 42% increase in engagement and a significant boost in qualified leads. Their landing page designs convert exceptionally well.",
      author: "Michael Chen",
      position: "Marketing Manager, TechSphere Solutions",
      rating: 5,
      service: "Social Media & Web Design"
    },
    {
      text: "Working with Econic Media on our branding and identity design was a game-changer for our startup. Their strategic approach to visual storytelling helped us stand out in a crowded market and attract investor interest. Our brand recognition metrics improved by 35% after the rebrand.",
      author: "Jessica Williams",
      position: "Founder, Bloom Wellness",
      rating: 5,
      service: "Branding & Identity"
    },
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Decorative Quote Icon (Top Right) - Testimonials Context */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 text-neon-cyan/20 transform translate-x-1/3 -translate-y-1/3 rotate-12 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: 15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Quote size={160} />
      </motion.div>

      {/* Decorative MessageSquare Icon (Bottom Left) - Testimonials Context */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 text-neon-purple/20 transform -translate-x-1/3 translate-y-1/3 -rotate-12 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: -15 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <MessageSquareQuote size={160} />
      </motion.div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Client Success Stories</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="glass-card rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all relative h-full hover:translate-y-[-4px] hover:border-neon-cyan hover:shadow-lg">
                <MessageSquareQuote className="absolute top-6 left-6 h-8 w-8 text-neon-purple/20" />

                <div className="flex mb-4 relative z-10">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-neon-cyan" fill="#00FFFF" />
                  ))}
                </div>

                <p className="text-foreground/90 mb-6 relative z-10">"{testimonial.text}"</p>

                <div className="mt-auto">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/70">{testimonial.position}</div>
                  <div className="text-xs text-neon-cyan mt-1">Service: {testimonial.service}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
