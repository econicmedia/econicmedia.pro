import React from 'react';

interface LogoProps {
  containerClassName?: string; // Class for the cropping container
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({
  containerClassName = "h-8 w-8", // Default size for the icon container (e.g., square)
  alt = "Econic Media Icon"     // Alt text now refers to the icon part
}) => {
  return (
    <div
      className={`${containerClassName} overflow-hidden relative`}
      style={{ display: 'inline-block' }} // Helps the div behave like an inline image for layout
    >
      <img
        src="/logo.png"
        alt={alt}
        className="block h-full w-auto" // Image scales to fill container's height, width adjusts
                                        // 'block' can help remove extra space under the image
        style={{
          objectFit: 'cover',    // Will try to fill the dimensions, may crop if aspect ratio mismatches container
          objectPosition: 'left center' // Assumes the icon is on the left side of the image
        }}
      />
    </div>
  );
};

export default Logo;
