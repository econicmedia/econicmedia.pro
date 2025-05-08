import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Code, Monitor } from 'lucide-react';

interface PortfolioItemType {
  id: string;
  title: string;
  category: string;
  location?: string;
  imageUrl: string;
  liveUrl: string;
  description: string;
}

const portfolioItemsData: PortfolioItemType[] = [
  { id: 'aurora-dental-clinic', title: 'Aurora Dental Clinic', category: 'Healthcare Website', imageUrl: './Websites/aurora-dental-clinic.png', liveUrl: 'https://www.auroradentalclinic.co.uk/', description: 'Award-winning private dental clinics in Wiltshire offering top-tier cosmetic and restorative dental treatments with a patient-focused approach.' },
  { id: 'securitas-security', title: 'Securitas Global Security', category: 'Security Services Website', imageUrl: './Websites/securitas-security.png', liveUrl: 'https://www.securitas.com/', description: 'Integrated guarding services backed by world-class technology solutions providing comprehensive security for businesses and organizations worldwide.' },
  { id: 'clive-law-office', title: 'Clive Law Office', category: 'Legal Services Website', imageUrl: './Websites/clive-law-office.png', liveUrl: 'https://www.clivelawoffice.com/', description: 'Over 50 years of trusted criminal defense experience with specialized expertise in complex litigation and personalized legal representation.' },
  { id: 'introl-security', title: 'Introl Security', category: 'Security Solutions Website', imageUrl: './Websites/introl-security.png', liveUrl: 'https://www.introlsecurity.com/', description: 'Dependable protection through reliable and modern security services featuring advanced surveillance systems and professional security personnel.' },
  { id: 'licensed-electrician', title: 'Licensed Electrician Services', category: 'Trade Services Website', imageUrl: './Websites/licensed-electrician.png', liveUrl: 'https://www.licensedelectrician.com/', description: 'Fully licensed and insured electrical contractors providing residential and commercial electrical services with 24/7 emergency response capabilities.' },
  { id: 'hogan-lovells-germany', title: 'Hogan Lovells – Germany', category: 'International Law Firm Website', imageUrl: './Websites/hogan-lovells-germany.png', liveUrl: 'https://www.hoganlovells.com/en/locations/germany', description: 'Legal and financial insight across German and international markets offering specialized expertise in corporate, intellectual property, and regulatory law.' },
  { id: 'cleanwhale-berlin', title: 'CleanWhale Berlin', category: 'Home Services Website', imageUrl: './Websites/cleanwhale-berlin.png', liveUrl: 'https://cleanwhale.de/', description: 'Smart booking and transparent pricing for premium home cleaning services in Berlin with eco-friendly cleaning solutions and professional staff.' },
  { id: 'superlist-productivity', title: 'Superlist Productivity Platform', category: 'SaaS Product Website', imageUrl: './Websites/superlist-productivity.png', liveUrl: 'https://www.superlist.com/', description: 'A powerful workspace for notes, tasks, and project planning designed to enhance team collaboration and personal productivity across multiple platforms.' },
  { id: 'linear-dev-tools', title: 'Linear – Dev Management Tools', category: 'Developer Tools Website', imageUrl: './Websites/linear-dev-tools.png', liveUrl: 'https://linear.app/', description: 'Streamlined product planning for agile software teams with intuitive issue tracking, roadmaps, and workflow automation to accelerate development cycles.' },
  { id: 'pitch-presentation', title: 'Pitch – Presentation Software', category: 'Creative Software Website', imageUrl: './Websites/pitch-presentation.png', liveUrl: 'https://pitch.com/', description: 'Beautiful, collaborative presentations made fast and simple with real-time editing, custom templates, and seamless team collaboration features.' },
];

interface PortfolioCardProps {
  item: PortfolioItemType;
  delay: number;
  onImageClick: (imageUrl: string) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, delay, onImageClick }) => {
  return (
    <ScrollReveal delay={delay * 100} direction="down">
      <div className="group relative overflow-hidden rounded-xl border border-white/10 glass-card-soft hover:shadow-neon-glow transition-all duration-300 h-full flex flex-col hover:translate-y-[-4px] hover:border-neon-cyan">
        <DialogTrigger asChild>
          <div 
            className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer"
            onClick={() => onImageClick(item.imageUrl)}
          >
            <img 
              src={item.imageUrl} 
              alt={`${item.title} - Professional ${item.category} design by Econic Media featuring responsive layout and conversion-optimized user experience`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle gradient overlay for image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 group-hover:from-black/10 transition-all duration-300"></div>
          </div>
        </DialogTrigger>
        
        <div className="p-5 md:p-6 flex-grow flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">{item.title}</h3>
          <p className="text-xs md:text-sm text-neon-cyan mb-3">{item.category}{item.location ? ` - ${item.location}` : ''}</p>
          <p className="text-sm text-foreground/70 mb-4 flex-grow text-ellipsis overflow-hidden line-clamp-2">
            {item.description}
          </p>
          
          <Button 
            asChild 
            size="sm"
            className="mt-auto w-full bg-gradient-to-r from-neon-cyan/80 to-neon-purple/80 hover:from-neon-cyan hover:to-neon-purple text-background font-semibold transition-all duration-300 group-hover:shadow-md group-hover:shadow-neon-cyan/30 cta-pulse-hover"
          >
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live <ArrowUpRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  );
};

const PortfolioSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
      <section id="websites" className="section-padding relative overflow-hidden">
        {/* Decorative Code Icon (Top Right) - Portfolio Context */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 text-neon-purple/20 transform translate-x-1/3 -translate-y-1/3 rotate-12 opacity-50"
          initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
          whileInView={{ opacity: 0.5, scale: 1, rotate: 20 }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Code size={160} />
        </motion.div>

        {/* Decorative Monitor Icon (Bottom Left) - Portfolio Context */}
        <motion.div
          className="absolute bottom-0 left-0 w-40 h-40 text-neon-cyan/20 transform -translate-x-1/3 translate-y-1/3 -rotate-12 opacity-50"
          initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
          whileInView={{ opacity: 0.5, scale: 1, rotate: -20 }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Monitor size={160} />
        </motion.div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <ScrollReveal delay={200} direction="down">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              <span className="text-gradient">Websites We've Built</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={400} direction="down">
            <p className="text-lg md:text-xl text-foreground/80 mb-12 md:mb-16 max-w-3xl mx-auto text-center">
              From creative freelancers to corporate firms, explore some of our favorite projects crafted for performance and elegance.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItemsData.map((item, index) => (
              <PortfolioCard key={item.id} item={item} delay={index} onImageClick={setSelectedImage} />
            ))}
          </div>
        </div>
      </section>
      {selectedImage && (
        <DialogContent className="max-w-3xl max-h-[80vh] p-0 bg-transparent border-none flex items-center justify-center">
          <img src={selectedImage} alt="Detailed view of website design by Econic Media showing responsive layout and UI elements" className="max-w-full max-h-full object-contain rounded-lg" />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default PortfolioSection;
