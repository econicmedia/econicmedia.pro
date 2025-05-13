import React, { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver, generateSrcSet } from '@/lib/image-optimization';
import './optimized-image.css';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = '',
  priority = false,
  loading = 'lazy',
  onLoad,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(containerRef);
  
  // Set proper loading attribute based on priority
  const loadingAttr = priority ? 'eager' : loading;
  
  // Generate fetchpriority attribute for LCP images
  const fetchPriority = priority ? 'high' : 'auto';

  // Set decoding attribute based on priority
  const decodingAttr = priority ? 'sync' : 'async';

  useEffect(() => {
    if (priority && imageRef.current) {
      // If image is prioritized, preload it
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
        onLoad?.();
      };
    }
  }, [priority, src, onLoad]);

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Set CSS attributes through element attributes instead of inline styles
  // This will be handled by our CSS in custom-properties.css
  const widthAttr = width ? `${width}px` : null;
  const heightAttr = height ? `${height}px` : null;
  
  // Determine object-fit class based on the prop
  const objectFitClass = `object-fit-${objectFit}`;

  return (
    <div 
      ref={containerRef}
      className={`optimized-image-container ${containerClassName}`}
      data-width={widthAttr}
      data-height={heightAttr}
    >
      {isVisible || priority ? (
        <>
          {/* Low quality placeholder styling */}
          {!isLoaded && (
            <div className="optimized-image-placeholder" />
          )}
          <img
            ref={imageRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loadingAttr}
            decoding={decodingAttr}
            className={`optimized-image ${isLoaded ? 'optimized-image--loaded' : 'optimized-image--loading'} ${objectFitClass} ${className}`}
            onLoad={handleImageLoad}
            // We'll use a data attribute for fetch priority to avoid browser compatibility issues
            data-fetchpriority={fetchPriority}
            srcSet={generateSrcSet(src)}
          />
        </>
      ) : (
        // Empty placeholder when not visible and not priority
        <div className="optimized-image--empty-placeholder" />
      )}
    </div>
  );
}
