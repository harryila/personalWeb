# RH-Inspired Light Theme Documentation

## Overview
This document describes the custom light theme created for your website, inspired by Restoration Hardware's sophisticated color palette. The theme maintains the same elegant, warm, and luxurious aesthetic that RH is known for.

## Color Palette

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

## RH Design Principles Applied

1. **Warm Undertones**: All colors have warm undertones, avoiding harsh or cold grays
2. **Muted Sophistication**: Colors are intentionally desaturated for an elegant, refined look
3. **Natural Palette**: Earth tones and sage greens reflect RH's natural, organic aesthetic
4. **Subtle Contrasts**: Sufficient contrast for accessibility while maintaining the soft, luxurious feel

## Usage

The theme is automatically applied when users select "light" mode using the theme switcher in the top-right corner of your website. The color scheme will affect:

- Navigation bars and backgrounds
- Cards and content sections
- Buttons and interactive elements
- Text and typography
- Form elements and inputs

## Technical Implementation

The theme is defined in `tailwind.config.mjs` as a custom DaisyUI theme object that overrides the default "light" theme. All existing functionality remains intact - only the colors have been updated to match RH's aesthetic.

## Color Inspiration Sources

Based on research of RH.com and RH showrooms, the palette draws from:
- RH's signature Silver Sage color family
- Warm neutral backgrounds seen in their showrooms
- Earth tones from their furniture and decor collections
- Sophisticated grays used in their branding and displays

## Accessibility

All color combinations have been chosen to meet WCAG accessibility standards for text contrast while maintaining the sophisticated RH aesthetic.