import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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
  { id: 'aurora-dental-clinic', title: 'Aurora Dental Clinic', category: '', imageUrl: '/Websites/aurora-dental-clinic.png', liveUrl: 'https://www.auroradentalclinic.co.uk/', description: 'Award-winning private dental clinics in Wiltshire offering top-tier care.' },
  { id: 'securitas-security', title: 'Securitas Global Security', category: '', imageUrl: '/Websites/securitas-security.png', liveUrl: 'https://www.securitas.com/', description: 'Integrated guarding services backed by world-class technology.' },
  { id: 'clive-law-office', title: 'Clive Law Office', category: '', imageUrl: '/Websites/clive-law-office.png', liveUrl: 'https://www.clivelawoffice.com/', description: 'Over 50 years of trusted criminal defense experience.' },
  { id: 'introl-security', title: 'Introl Security', category: '', imageUrl: '/Websites/introl-security.png', liveUrl: 'https://www.introlsecurity.com/', description: 'Dependable protection through reliable and modern security services.' },
  { id: 'licensed-electrician', title: 'Licensed Electrician Services', category: '', imageUrl: '/Websites/licensed-electrician.png', liveUrl: 'https://www.licensedelectrician.com/', description: 'Fully licensed and insured electrical contractors.' },
  { id: 'hogan-lovells-germany', title: 'Hogan Lovells – Germany', category: '', imageUrl: '/Websites/hogan-lovells-germany.png', liveUrl: 'https://www.hoganlovells.com/en/locations/germany', description: 'Legal and financial insight across German and international markets.' },
  { id: 'cleanwhale-berlin', title: 'CleanWhale Berlin', category: '', imageUrl: '/Websites/cleanwhale-berlin.png', liveUrl: 'https://cleanwhale.de/', description: 'Smart booking and transparent pricing for premium home cleaning.' },
  { id: 'superlist-productivity', title: 'Superlist Productivity Platform', category: '', imageUrl: '/Websites/superlist-productivity.png', liveUrl: 'https://www.superlist.com/', description: 'A powerful workspace for notes, tasks, and project planning.' },
  { id: 'linear-dev-tools', title: 'Linear – Dev Management Tools', category: '', imageUrl: '/Websites/linear-dev-tools.png', liveUrl: 'https://linear.app/', description: 'Streamlined product planning for agile software teams.' },
  { id: 'pitch-presentation', title: 'Pitch – Presentation Software', category: '', imageUrl: '/Websites/pitch-presentation.png', liveUrl: 'https://pitch.com/', description: 'Beautiful, collaborative presentations made fast and simple.' },
];

interface PortfolioCardProps {
  item: PortfolioItemType;
  delay: number;
  onImageClick: (imageUrl: string) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, delay, onImageClick }) => {
  return (
    <ScrollReveal delay={delay * 100} direction="down">
      <div className="group relative overflow-hidden rounded-xl border border-white/10 glass-card-soft hover:shadow-neon-glow transition-all duration-300 h-full flex flex-col">
        <DialogTrigger asChild>
          <div 
            className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer"
            onClick={() => onImageClick(item.imageUrl)}
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
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
      <section id="websites" className="section-padding">
        <div className="container max-w-7xl mx-auto">
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
          <img src={selectedImage} alt="Selected portfolio item screenshot fullscreen" className="max-w-full max-h-full object-contain rounded-lg" />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default PortfolioSection;
