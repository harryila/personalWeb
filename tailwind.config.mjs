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
            // RH Blues Palette
            {
                "rh-blues-light": {
                    "primary": "#7A9CA8",           // Shore/Dusk blue
                    "primary-content": "#FFFFFF",
                    "secondary": "#9BA5B0",         // Atmosphere blue
                    "secondary-content": "#FFFFFF",
                    "accent": "#A8B8C5",           // Soft blue-gray
                    "accent-content": "#FFFFFF",
                    "neutral": "#6B757F",          // Cool gray
                    "neutral-content": "#FFFFFF",
                    "base-100": "#F8F9FA",         // Cool white
                    "base-200": "#F0F4F6",         // Light blue-gray
                    "base-300": "#E6EAED",         // Medium blue-gray
                    "base-content": "#2C3E50",     // Deep blue-gray
                    "info": "#7A9CA8",
                    "info-content": "#FFFFFF",
                    "success": "#7A9CA8",
                    "success-content": "#FFFFFF",
                    "warning": "#B8A088",
                    "warning-content": "#FFFFFF",
                    "error": "#A67C6C",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "rh-blues-dark": {
                    "primary": "#8AACB8",           // Brighter shore blue
                    "primary-content": "#1A1A1A",
                    "secondary": "#AAB5C0",         // Brighter atmosphere blue
                    "secondary-content": "#1A1A1A",
                    "accent": "#B8C5D2",           // Lighter blue-gray
                    "accent-content": "#1A1A1A",
                    "neutral": "#3A4450",          // Dark cool gray
                    "neutral-content": "#E8F0F4",
                    "base-100": "#1A1F25",         // Deep blue-charcoal
                    "base-200": "#242A32",         // Dark blue-gray
                    "base-300": "#2E3440",         // Medium blue-gray
                    "base-content": "#E8F0F4",     // Cool off-white
                    "info": "#8AACB8",
                    "info-content": "#1A1A1A",
                    "success": "#8AACB8",
                    "success-content": "#1A1A1A",
                    "warning": "#C8B098",
                    "warning-content": "#1A1A1A",
                    "error": "#B68C7C",
                    "error-content": "#1A1A1A",
                },
            },
            // RH Earthy Palette
            {
                "rh-earthy-light": {
                    "primary": "#8B6F47",           // Chocolate brown
                    "primary-content": "#FFFFFF",
                    "secondary": "#A0855B",         // Warm tan
                    "secondary-content": "#FFFFFF",
                    "accent": "#9B8B7A",           // Stone gray
                    "accent-content": "#FFFFFF",
                    "neutral": "#6B5B4F",          // Warm brown-gray
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FAF8F4",         // Warm cream
                    "base-200": "#F5F0E8",         // Light brown
                    "base-300": "#EDE4D3",         // Medium brown
                    "base-content": "#2A1F1A",     // Deep brown
                    "info": "#8B7355",
                    "info-content": "#FFFFFF",
                    "success": "#8B6F47",
                    "success-content": "#FFFFFF",
                    "warning": "#D4B896",
                    "warning-content": "#2A1F1A",
                    "error": "#A67C6C",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "rh-earthy-dark": {
                    "primary": "#A08057",           // Brighter chocolate
                    "primary-content": "#1A1A1A",
                    "secondary": "#B8956B",         // Brighter tan
                    "secondary-content": "#1A1A1A",
                    "accent": "#AB9B8A",           // Lighter stone
                    "accent-content": "#1A1A1A",
                    "neutral": "#4A3A2F",          // Dark warm gray
                    "neutral-content": "#F0E8DC",
                    "base-100": "#1F1A15",         // Deep brown-black
                    "base-200": "#2A2318",         // Dark brown
                    "base-300": "#352D20",         // Medium brown
                    "base-content": "#F0E8DC",     // Warm cream text
                    "info": "#9B8365",
                    "info-content": "#1A1A1A",
                    "success": "#A08057",
                    "success-content": "#1A1A1A",
                    "warning": "#E4C8A6",
                    "warning-content": "#1A1A1A",
                    "error": "#B68C7C",
                    "error-content": "#1A1A1A",
                },
            },
            // RH Greens Palette
            {
                "rh-greens-light": {
                    "primary": "#7A8B6F",           // Bay Laurel green
                    "primary-content": "#FFFFFF",
                    "secondary": "#8FA68F",         // Sage green
                    "secondary-content": "#FFFFFF",
                    "accent": "#9BA095",           // Spanish moss
                    "accent-content": "#FFFFFF",
                    "neutral": "#6B7060",          // Muted green-gray
                    "neutral-content": "#FFFFFF",
                    "base-100": "#F8FAF6",         // Light green-white
                    "base-200": "#F0F5EF",         // Soft green
                    "base-300": "#E6F0E4",         // Medium green
                    "base-content": "#2A2F25",     // Deep green-gray
                    "info": "#7A8B78",
                    "info-content": "#FFFFFF",
                    "success": "#7A8B6F",
                    "success-content": "#FFFFFF",
                    "warning": "#B8A088",
                    "warning-content": "#FFFFFF",
                    "error": "#A67C6C",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "rh-greens-dark": {
                    "primary": "#8A9B7F",           // Brighter bay laurel
                    "primary-content": "#1A1A1A",
                    "secondary": "#9FB29F",         // Brighter sage
                    "secondary-content": "#1A1A1A",
                    "accent": "#ABB0A5",           // Lighter spanish moss
                    "accent-content": "#1A1A1A",
                    "neutral": "#404A35",          // Dark green-gray
                    "neutral-content": "#E8F0E4",
                    "base-100": "#181D15",         // Deep green-black
                    "base-200": "#222818",         // Dark green
                    "base-300": "#2D321C",         // Medium green
                    "base-content": "#E8F0E4",     // Light green text
                    "info": "#8A9B88",
                    "info-content": "#1A1A1A",
                    "success": "#8A9B7F",
                    "success-content": "#1A1A1A",
                    "warning": "#C8B098",
                    "warning-content": "#1A1A1A",
                    "error": "#B68C7C",
                    "error-content": "#1A1A1A",
                },
            },
            // RH Neutrals Palette
            {
                "rh-neutrals-light": {
                    "primary": "#8B8680",           // Fog/Pumice
                    "primary-content": "#FFFFFF",
                    "secondary": "#9B9088",         // Gravel
                    "secondary-content": "#FFFFFF",
                    "accent": "#A0958C",           // Stone
                    "accent-content": "#FFFFFF",
                    "neutral": "#6B655F",          // Warm neutral
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FAFAF9",         // The Right White
                    "base-200": "#F5F3F0",         // Mediterranean White
                    "base-300": "#EFEBE6",         // Cloud White
                    "base-content": "#2C2A28",     // Deep neutral
                    "info": "#8B8580",
                    "info-content": "#FFFFFF",
                    "success": "#8B8680",
                    "success-content": "#FFFFFF",
                    "warning": "#C8B8A0",
                    "warning-content": "#2C2A28",
                    "error": "#A67C6C",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "rh-neutrals-dark": {
                    "primary": "#9B9690",           // Brighter fog
                    "primary-content": "#1A1A1A",
                    "secondary": "#ABA098",         // Brighter gravel
                    "secondary-content": "#1A1A1A",
                    "accent": "#B0A59C",           // Lighter stone
                    "accent-content": "#1A1A1A",
                    "neutral": "#45403C",          // Dark neutral
                    "neutral-content": "#F0EDE8",
                    "base-100": "#1A1A19",         // Deep neutral
                    "base-200": "#252320",         // Dark neutral
                    "base-300": "#302D28",         // Medium neutral
                    "base-content": "#F0EDE8",     // Light neutral text
                    "info": "#9B9590",
                    "info-content": "#1A1A1A",
                    "success": "#9B9690",
                    "success-content": "#1A1A1A",
                    "warning": "#D8C8B0",
                    "warning-content": "#1A1A1A",
                    "error": "#B68C7C",
                    "error-content": "#1A1A1A",
                },
            },
            // RH Warm Palette
            {
                "rh-warm-light": {
                    "primary": "#C8A882",           // Butter/Saffron
                    "primary-content": "#2A1F1A",
                    "secondary": "#B8956B",         // Warm gold
                    "secondary-content": "#FFFFFF",
                    "accent": "#D4B896",           // Buttercream
                    "accent-content": "#2A1F1A",
                    "neutral": "#8B7355",          // Warm brown
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FEFCF8",         // Warm cream
                    "base-200": "#FBF5ED",         // Light gold
                    "base-300": "#F5EDE1",         // Medium gold
                    "base-content": "#2A1F1A",     // Deep brown
                    "info": "#B8A088",
                    "info-content": "#FFFFFF",
                    "success": "#C8A882",
                    "success-content": "#2A1F1A",
                    "warning": "#D4B896",
                    "warning-content": "#2A1F1A",
                    "error": "#A67C6C",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "rh-warm-dark": {
                    "primary": "#D8B892",           // Brighter butter
                    "primary-content": "#1A1A1A",
                    "secondary": "#C8A57B",         // Brighter gold
                    "secondary-content": "#1A1A1A",
                    "accent": "#E4C8A6",           // Lighter buttercream
                    "accent-content": "#1A1A1A",
                    "neutral": "#5A4A35",          // Dark warm brown
                    "neutral-content": "#F8F0E4",
                    "base-100": "#1F1A15",         // Deep warm brown
                    "base-200": "#2A2318",         // Dark gold
                    "base-300": "#352D20",         // Medium gold
                    "base-content": "#F8F0E4",     // Warm cream text
                    "info": "#C8B098",
                    "info-content": "#1A1A1A",
                    "success": "#D8B892",
                    "success-content": "#1A1A1A",
                    "warning": "#E4C8A6",
                    "warning-content": "#1A1A1A",
                    "error": "#B68C7C",
                    "error-content": "#1A1A1A",
                },
            },
            // Keep existing themes for compatibility
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
