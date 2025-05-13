import React from 'react';
import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconWrapperProps {
  icon: React.ElementType<LucideProps>;
  size?: number | string;
  className?: string;
  strokeWidth?: number;
  position?: 'section-header' | 'card' | 'decoration';
}

/**
 * IconWrapper component for consistent icon styling across the application
 * 
 * - Enforces consistent opacity, size, and styling
 * - Provides different preset styles based on the icon's position/usage
 * - Maintains the website's dark/neon aesthetic
 */
const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  size = 24,
  className = '',
  strokeWidth = 2,
  position = 'card'
}) => {
  let positionClasses = '';
  
  // Set styling based on icon position/usage
  switch (position) {
    case 'section-header':
      positionClasses = 'text-white opacity-90 drop-shadow-md';
      break;
    case 'card':
      positionClasses = 'text-white opacity-90';
      break;
    case 'decoration':
      positionClasses = 'text-white/70';
      break;
    default:
      positionClasses = 'text-white opacity-90';
  }

  return (
    <Icon 
      size={size} 
      strokeWidth={strokeWidth}
      className={cn(positionClasses, className)}
    />
  );
};

export default IconWrapper; 