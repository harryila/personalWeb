/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    // Primary colors - RH signature sage/eucalyptus tones
                    "primary": "#8FA68F",           // Sage green
                    "primary-content": "#FFFFFF",   // White text on primary
                    
                    // Secondary colors - warm earth tones
                    "secondary": "#A0855B",         // Warm tan/gold
                    "secondary-content": "#FFFFFF", // White text on secondary
                    
                    // Accent colors - muted blue-gray
                    "accent": "#9BA5B0",           // Soft blue-gray
                    "accent-content": "#FFFFFF",   // White text on accent
                    
                    // Neutral colors - sophisticated grays
                    "neutral": "#6B675F",          // Medium warm gray
                    "neutral-content": "#FFFFFF",  // White text on neutral
                    
                    // Base colors - warm off-whites and creams
                    "base-100": "#FAF9F6",         // Primary background - warm white
                    "base-200": "#F5F3F0",         // Secondary background - cream
                    "base-300": "#E8E4DF",         // Tertiary background - light beige
                    "base-content": "#2C2C2C",     // Main text color - deep charcoal
                    
                    // Semantic colors with RH aesthetic
                    "info": "#7A9CA8",             // Muted blue
                    "info-content": "#FFFFFF",     // White text on info
                    
                    "success": "#8FA68F",          // Sage green (same as primary)
                    "success-content": "#FFFFFF",  // White text on success
                    
                    "warning": "#D4B896",          // Warm beige
                    "warning-content": "#2C2C2C",  // Dark text on warning
                    
                    "error": "#A67C6C",           // Muted terracotta
                    "error-content": "#FFFFFF",   // White text on error
                },
            },
            {
                dark: {
                    // Primary colors - RH sage tones adapted for dark mode
                    "primary": "#9FB29F",           // Slightly brighter sage green for dark backgrounds
                    "primary-content": "#1A1A1A",   // Dark text on primary
                    
                    // Secondary colors - warm earth tones adapted for dark
                    "secondary": "#B8956B",         // Brighter warm tan/gold for dark backgrounds
                    "secondary-content": "#1A1A1A", // Dark text on secondary
                    
                    // Accent colors - muted blue-gray adapted for dark
                    "accent": "#A8B5C0",           // Lighter soft blue-gray for dark backgrounds
                    "accent-content": "#1A1A1A",   // Dark text on accent
                    
                    // Neutral colors - sophisticated warm grays for dark mode
                    "neutral": "#4A453F",          // Darker warm gray
                    "neutral-content": "#E8E4DF",  // Light text on neutral
                    
                    // Base colors - sophisticated dark backgrounds with warm undertones
                    "base-100": "#1A1A1A",         // Primary background - deep charcoal
                    "base-200": "#252520",         // Secondary background - warm dark gray
                    "base-300": "#2F2F2A",         // Tertiary background - medium warm gray
                    "base-content": "#E8E4DF",     // Main text color - warm off-white
                    
                    // Semantic colors with RH aesthetic adapted for dark
                    "info": "#8AACB8",             // Brighter muted blue for dark backgrounds
                    "info-content": "#1A1A1A",     // Dark text on info
                    
                    "success": "#9FB29F",          // Brighter sage green (same as primary)
                    "success-content": "#1A1A1A",  // Dark text on success
                    
                    "warning": "#E4C8A6",          // Brighter warm beige for dark backgrounds
                    "warning-content": "#1A1A1A",  // Dark text on warning
                    
                    "error": "#B68C7C",           // Brighter muted terracotta for dark backgrounds
                    "error-content": "#1A1A1A",   // Dark text on error
                },
            },
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    },
    // darkMode: ['selector', '[data-theme="synthwave"]']
};
