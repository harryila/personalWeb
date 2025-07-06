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
            "dark",
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
