import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Aperture, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Image data - assuming images are in public/Product Pictures/
const productImages = [
  { id: 1, src: '/Product Pictures/1 (1).png', alt: 'Coffee packaging mockup by Econic Media – dramatic side lighting with shadow details' },
  { id: 2, src: '/Product Pictures/1 (2).png', alt: 'Cosmetic bottle product photography by Econic Media – clean white background with soft reflections' },
  { id: 3, src: '/Product Pictures/1 (3).png', alt: 'Supplement packaging visualization by Econic Media – studio lighting with product feature highlight' },
  { id: 4, src: '/Product Pictures/1 (4).png', alt: 'Skincare product packaging design by Econic Media – lifestyle arrangement with botanical elements' },
  { id: 5, src: '/Product Pictures/1 (5).png', alt: 'Premium perfume bottle photography by Econic Media – luxury product display with gradient background' },
  { id: 6, src: '/Product Pictures/1 (6).png', alt: 'Health supplement jar design by Econic Media – professional product visualization on dark background' },
  { id: 7, src: '/Product Pictures/1 (7).png', alt: 'Organic tea packaging mockup by Econic Media – natural styling with ingredient accent' },
  { id: 8, src: '/Product Pictures/1 (8).png', alt: 'Wellness product photography by Econic Media – minimalist composition with brand message focus' },
  { id: 9, src: '/Product Pictures/1 (9).png', alt: 'Vitamin bottle packaging design by Econic Media – e-commerce ready product visual with detail shot' },
  { id: 10, src: '/Product Pictures/1 (10).png', alt: 'CBD oil product visualization by Econic Media – transparent bottle display showing liquid quality' },
  { id: 11, src: '/Product Pictures/1 (11).png', alt: 'Protein powder packaging photography by Econic Media – fitness product with dynamic angle shot' },
  { id: 12, src: '/Product Pictures/1 (12).png', alt: 'Beauty serum bottle design by Econic Media – premium product visualization with droplet accent' },
  { id: 13, src: '/Product Pictures/1 (13).png', alt: 'Herbal supplement packaging mockup by Econic Media – natural health product visual with ingredients' },
  { id: 14, src: '/Product Pictures/1 (14).png', alt: 'Facial cream jar photography by Econic Media – beauty product with texture highlight' },
  { id: 15, src: '/Product Pictures/1 (15).png', alt: 'Nutrition bar packaging design by Econic Media – snack product with flavor visual emphasis' },
  { id: 16, src: '/Product Pictures/1 (16).png', alt: 'Essential oil bottle visualization by Econic Media – aromatherapy product with natural backdrop' },
  { id: 17, src: '/Product Pictures/1 (17).png', alt: 'Collagen supplement packaging photography by Econic Media – beauty nutrition product with elegant styling' },
  { id: 18, src: '/Product Pictures/1 (18).png', alt: 'Plant-based powder container design by Econic Media – vegan product visual with ingredient scattering' },
  { id: 19, src: '/Product Pictures/1 (19).png', alt: 'Hair care bottle mockup by Econic Media – salon quality product visualization with gradient background' },
  { id: 20, src: '/Product Pictures/1 (20).png', alt: 'Vitamin gummy package photography by Econic Media – supplement product with playful arrangement' },
  { id: 21, src: '/Product Pictures/1 (21).png', alt: 'Sports nutrition container design by Econic Media – fitness product visual with dynamic lighting' },
  { id: 22, src: '/Product Pictures/1 (22).png', alt: 'Organic skincare set visualization by Econic Media – beauty product collection with botanical styling' },
  { id: 23, src: '/Product Pictures/1 (23).png', alt: 'Health drink bottle mockup by Econic Media – beverage product with condensation detail' },
  { id: 24, src: '/Product Pictures/1 (24).png', alt: 'Natural supplement packaging photography by Econic Media – wellness product with ingredient feature' },
];

// Define how many images to show in each row based on screen size
const imagesPerRow = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
};

// Calculate how many images to show initially (2 rows)
const initialImagesToShow = imagesPerRow.xl * 2; // 8 images (2 rows of 4 on desktop)

const ImageViewer = ({ 
  image, 
  onClose, 
  onNext, 
  onPrev, 
  currentIndex, 
  totalImages 
}: { 
  image: { id: number; src: string; alt: string }; 
  onClose: () => void; 
  onNext: () => void; 
  onPrev: () => void; 
  currentIndex: number;
  totalImages: number;
}) => {
  // Add keyboard navigation for the viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrev, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
      <div 
        className="bg-gray-900/95 border border-gray-800 rounded-xl shadow-xl max-w-2xl w-full p-4 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-gray-400">{image.alt}</p>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close image preview"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="relative">
          <motion.img 
            key={image.id}
            src={image.src} 
            alt={image.alt} 
            className="w-full h-auto object-contain rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-3 gap-1">
          <p className="text-sm text-gray-400">
            {currentIndex + 1} of {totalImages}
          </p>
        </div>
      </div>
    </div>
  );
};

const GallerySection: React.FC = () => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  // Determine which images to display
  const visibleImages = showAll ? productImages : productImages.slice(0, initialImagesToShow);

  // Get the selected image object and index
  const selectedImageIndex = selectedImageId !== null 
    ? productImages.findIndex(img => img.id === selectedImageId)
    : -1;
    
  const selectedImage = selectedImageIndex !== -1 
    ? productImages[selectedImageIndex]
    : null;

  // Navigate to next or previous image
  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImageIndex === -1) return;
    
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (selectedImageIndex + 1) % productImages.length;
    } else {
      newIndex = (selectedImageIndex - 1 + productImages.length) % productImages.length;
    }
    
    setSelectedImageId(productImages[newIndex].id);
  };

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      {/* Decorative Camera Icon (Top Right) - Gallery Context */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 text-neon-cyan/20 transform translate-x-1/3 -translate-y-1/3 rotate-6 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: 10 }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Camera size={160} />
      </motion.div>

      {/* Decorative Aperture Icon (Bottom Left) - Gallery Context */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 text-neon-purple/20 transform -translate-x-1/3 translate-y-1/3 -rotate-6 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
        whileInView={{ opacity: 0.5, scale: 1, rotate: -10 }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <Aperture size={160} />
      </motion.div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto mb-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-wider leading-tight">
              <span className="text-gradient">Our Visual Craftsmanship</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-center text-foreground/80 mb-5 max-w-lg mx-auto tracking-wide text-lg leading-relaxed">
              Explore product visuals created to elevate brand identity and boost conversions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="text-center text-foreground/70 mb-12 max-w-prose mx-auto leading-relaxed tracking-wider text-base">
              Our passion lies in transforming ordinary product shots into captivating visual stories that resonate with your audience. Each image in this gallery is a testament to our commitment to detail, lighting, and composition, designed to make your products stand out and drive engagement.
            </p>
          </ScrollReveal>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
          transition={{ 
            duration: 0.6, 
            type: "spring", 
            stiffness: 100, 
            damping: 15 
          }}
          id="gallery-grid"
        >
          <AnimatePresence>
            {visibleImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: Math.min(index * 0.05, 0.5),
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  onClick={() => setSelectedImageId(item.id)}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/20"
                  whileHover={{ 
                    boxShadow: "0 8px 32px rgba(0, 230, 255, 0.15)" 
                  }}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {productImages.length > initialImagesToShow && (
          <motion.div 
            className="flex justify-center mt-12 mb-4"
            layout
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/70 hover:bg-gray-700/90 text-white rounded-full border border-gray-700 shadow-lg shadow-black/30 transition-all duration-300 group hover:border-neon-cyan hover:shadow-neon-cyan/20"
            >
              <span className="font-medium">{showAll ? 'Show Less' : 'Show More'}</span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 group-hover:text-neon-cyan transition-colors" />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>
      
      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ImageViewer 
              image={selectedImage}
              onClose={() => setSelectedImageId(null)}
              onNext={() => navigateImage('next')}
              onPrev={() => navigateImage('prev')}
              currentIndex={selectedImageIndex}
              totalImages={productImages.length}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
