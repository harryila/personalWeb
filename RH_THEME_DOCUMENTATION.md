# RH-Inspired Theme Documentation

## Overview
This document describes the custom light and dark themes created for your website, inspired by Restoration Hardware's sophisticated color palette. Both themes maintain the same elegant, warm, and luxurious aesthetic that RH is known for, adapted for their respective contexts.

## Light Theme Color Palette

### Primary Colors
- **Primary (`#8FA68F`)**: Sage green - RH's signature muted green tone
- **Secondary (`#A0855B`)**: Warm tan/gold - Rich earth tone
- **Accent (`#9BA5B0`)**: Soft blue-gray - Sophisticated neutral accent

### Background Colors
- **Base-100 (`#FAF9F6`)**: Primary background - Warm white (main page background)
- **Base-200 (`#F5F3F0`)**: Secondary background - Cream (cards, sections)
- **Base-300 (`#E8E4DF`)**: Tertiary background - Light beige (hover states, dividers)

### Text Colors
- **Base-content (`#2C2C2C`)**: Main text color - Deep charcoal for excellent readability
- **Neutral (`#6B675F`)**: Medium warm gray for secondary text

### Semantic Colors
- **Info (`#7A9CA8`)**: Muted blue for informational elements
- **Success (`#8FA68F`)**: Sage green (matches primary) for success states
- **Warning (`#D4B896`)**: Warm beige for warning states
- **Error (`#A67C6C`)**: Muted terracotta for error states

## Dark Theme Color Palette

### Primary Colors
- **Primary (`#9FB29F`)**: Brighter sage green - Adapted for dark backgrounds while maintaining RH aesthetic
- **Secondary (`#B8956B`)**: Brighter warm tan/gold - Enhanced earth tone for dark mode
- **Accent (`#A8B5C0`)**: Lighter soft blue-gray - Sophisticated accent adapted for dark backgrounds

### Background Colors
- **Base-100 (`#1A1A1A`)**: Primary background - Deep charcoal with warm undertones
- **Base-200 (`#252520`)**: Secondary background - Warm dark gray (cards, sections)
- **Base-300 (`#2F2F2A`)**: Tertiary background - Medium warm gray (hover states, dividers)

### Text Colors
- **Base-content (`#E8E4DF`)**: Main text color - Warm off-white for excellent readability
- **Neutral (`#4A453F`)**: Darker warm gray for secondary elements

### Semantic Colors
- **Info (`#8AACB8`)**: Brighter muted blue for dark backgrounds
- **Success (`#9FB29F`)**: Brighter sage green (matches primary) for success states
- **Warning (`#E4C8A6`)**: Brighter warm beige for dark backgrounds
- **Error (`#B68C7C`)**: Brighter muted terracotta for dark backgrounds

## RH Design Principles Applied

1. **Warm Undertones**: All colors have warm undertones, avoiding harsh or cold grays in both themes
2. **Muted Sophistication**: Colors are intentionally desaturated for an elegant, refined look
3. **Natural Palette**: Earth tones and sage greens reflect RH's natural, organic aesthetic
4. **Subtle Contrasts**: Sufficient contrast for accessibility while maintaining the soft, luxurious feel
5. **Consistent Aesthetic**: Both themes maintain the same sophisticated RH feel across light and dark modes

## Usage

The themes are automatically applied based on user selection:
- **Light Mode**: Uses the RH-inspired warm, cream backgrounds with sage green accents
- **Dark Mode**: Uses sophisticated dark backgrounds with RH-inspired accent colors
- **Theme Switching**: The toggle in the top-right corner switches between both RH-inspired themes

The color schemes affect:
- Navigation bars and backgrounds
- Cards and content sections
- Buttons and interactive elements
- Text and typography
- Form elements and inputs

## Technical Implementation

Both themes are defined in `tailwind.config.mjs` as custom DaisyUI theme objects that override the default "light" and "dark" themes. All existing functionality remains intact - only the colors have been updated to match RH's aesthetic.

## Dark Theme Adaptations

The dark theme maintains RH's color palette while ensuring:
- **Enhanced Brightness**: Colors are slightly brightened to work well against dark backgrounds
- **Warm Dark Backgrounds**: Dark grays with warm undertones instead of cold blacks
- **Consistent Branding**: Same color relationships as the light theme
- **Excellent Readability**: High contrast ratios for accessibility

## Color Inspiration Sources

Based on research of RH.com and RH showrooms, both palettes draw from:
- RH's signature Silver Sage color family
- Warm neutral backgrounds seen in their showrooms
- Earth tones from their furniture and decor collections
- Sophisticated grays used in their branding and displays
- Luxurious dark finishes and textures in RH's evening/dramatic room settings

## Accessibility

All color combinations in both themes have been chosen to meet WCAG accessibility standards for text contrast while maintaining the sophisticated RH aesthetic. The dark theme provides enhanced readability in low-light conditions while preserving the luxurious feel.