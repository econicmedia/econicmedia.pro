# Logo Update Instructions

This document provides instructions on how to update the Econic Media logo throughout the website.

## What Has Been Done

1. The `Logo` component (`src/components/Logo.tsx`) has been updated to use separate image files for the icon and text parts of the logo.
2. The `Navbar` and `Footer` components have been updated to use the new `Logo` component with the proper parameters.

## Files Required

You need to save the following image files in the `/public` directory:

1. `e-icon.png` - The "E" logo in a blue/purple gradient square with rounded corners 
2. `econic-text.png` - The "Econic Media" text in outline style
3. `logo.png` (optional) - The complete logo with both icon and text if you want to use it elsewhere

## How to Create These Files

### Option 1: Extract from Original Logo

1. Open the provided logo image in an image editing program (Photoshop, GIMP, etc.)
2. Separate the E icon and the text portions
3. Save them as transparent PNG files with the names specified above
4. Place them in the `/public` directory

### Option 2: Use the Test Logo Generator

We've created a simple tool to generate placeholder versions:

1. Open `/public/create-test-logos.html` in your web browser
2. Click the "Generate Test Logos" button
3. Download each image file
4. Place them in the `/public` directory

## Verification

After placing the image files in the `/public` directory:

1. Run the site locally with `npm run dev`
2. Check that the logo appears correctly in:
   - The navigation bar at the top of the site
   - The footer at the bottom of the site
3. Test responsive behavior to ensure the logo works on mobile devices

## Notes

- The icon and text can be positioned or sized independently
- The component supports showing only the icon on mobile by using the `showText` prop
- All files need to have transparent backgrounds
- Make any styling adjustments in the `Logo.tsx` file if needed

If you encounter any issues with the logo display, review the `Logo.tsx` component implementation and the CSS styling. 