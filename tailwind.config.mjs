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
                    // SAGE DARK MODE - Deep forest with sage undertones
                    "primary": "#8FA68F",           // Signature sage green - distinctive
                    "primary-content": "#FFFFFF",   // White text on primary
                    
                    "secondary": "#7A9B7A",         // Forest sage secondary
                    "secondary-content": "#FFFFFF", // White text on secondary
                    
                    "accent": "#A0B8A0",           // Pale sage accent
                    "accent-content": "#1A1A1A",   // Dark text on accent
                    
                    "neutral": "#2D3B2D",          // Deep sage-tinted neutral
                    "neutral-content": "#E8F0E8",  // Light sage-tinted text
                    
                    // Unique sage dark backgrounds
                    "base-100": "#0F1B0F",         // Very deep sage-black (UNIQUE)
                    "base-200": "#1A2B1A",         // Dark sage-charcoal (UNIQUE)
                    "base-300": "#253525",         // Medium sage-gray (UNIQUE)
                    "base-content": "#E8F0E8",     // Sage-tinted light text (UNIQUE)
                    
                    "info": "#6B9B6B",
                    "info-content": "#FFFFFF",
                    "success": "#8FA68F",
                    "success-content": "#FFFFFF",
                    "warning": "#C8B896",
                    "warning-content": "#1A1A1A",
                    "error": "#B67C7C",
                    "error-content": "#FFFFFF",
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
                    // OCEANIC DARK MODE - Deep ocean with blue undertones
                    "primary": "#5A9CAA",           // Ocean blue - distinctive
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#4A8C9A",         // Deep sea blue
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#7AB5C5",           // Light ocean blue
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#1A2B35",          // Deep ocean neutral
                    "neutral-content": "#D0E8F0",  // Ocean-tinted light text
                    
                    // Unique oceanic dark backgrounds
                    "base-100": "#061218",         // Deep ocean black (UNIQUE)
                    "base-200": "#0F1F28",         // Dark ocean charcoal (UNIQUE)
                    "base-300": "#1A2F3A",         // Medium ocean gray (UNIQUE)
                    "base-content": "#D0E8F0",     // Ocean-tinted light text (UNIQUE)
                    
                    "info": "#5A9CAA",
                    "info-content": "#FFFFFF",
                    "success": "#4A9CAA",
                    "success-content": "#FFFFFF",
                    "warning": "#B8A588",
                    "warning-content": "#1A1A1A",
                    "error": "#AA6C6C",
                    "error-content": "#FFFFFF",
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
                    // DESERT CAVE DARK MODE - Deep earth with rich brown undertones
                    "primary": "#B8763C",           // Rich terracotta - distinctive
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#A8652C",         // Deep desert brown
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#C8956B",           // Warm sand accent
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#3B2418",          // Deep earth neutral
                    "neutral-content": "#F0D8C0",  // Warm sand-tinted text
                    
                    // Unique desert cave dark backgrounds
                    "base-100": "#1A0F06",         // Very deep earth-black (UNIQUE)
                    "base-200": "#2D1A0F",         // Dark earth-brown (UNIQUE)
                    "base-300": "#4A2F1A",         // Medium earth-brown (UNIQUE)
                    "base-content": "#F0D8C0",     // Warm sand-tinted text (UNIQUE)
                    
                    "info": "#B8763C",
                    "info-content": "#FFFFFF",
                    "success": "#A8652C",
                    "success-content": "#FFFFFF",
                    "warning": "#E6B366",
                    "warning-content": "#1A1A1A",
                    "error": "#CC5A5A",
                    "error-content": "#FFFFFF",
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
                    // DEEP FOREST DARK MODE - Rich forest with green undertones
                    "primary": "#5A8B5A",           // Deep forest green - distinctive
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#4A7B4A",         // Rich woodland green
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#7AA67A",           // Fresh forest accent
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#1A3B1A",          // Deep forest neutral
                    "neutral-content": "#D8F0D8",  // Forest-tinted light text
                    
                    // Unique deep forest dark backgrounds
                    "base-100": "#061806",         // Very deep forest-black (UNIQUE)
                    "base-200": "#0F2B0F",         // Dark forest-charcoal (UNIQUE)
                    "base-300": "#1A3F1A",         // Medium forest-gray (UNIQUE)
                    "base-content": "#D8F0D8",     // Forest-tinted light text (UNIQUE)
                    
                    "info": "#5A8B5A",
                    "info-content": "#FFFFFF",
                    "success": "#4A7B4A",
                    "success-content": "#FFFFFF",
                    "warning": "#B8A566",
                    "warning-content": "#1A1A1A",
                    "error": "#AA5C5C",
                    "error-content": "#FFFFFF",
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
                    // CARBON DARK MODE - Deep charcoal with cool undertones
                    "primary": "#8A8A8A",           // Pure carbon gray - distinctive
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#7A7A7A",         // Deep charcoal
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#A0A0A0",           // Light carbon accent
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#2A2A2A",          // Deep carbon neutral
                    "neutral-content": "#E8E8E8",  // Cool light text
                    
                    // Unique carbon dark backgrounds
                    "base-100": "#0A0A0A",         // Deep carbon-black (UNIQUE)
                    "base-200": "#151515",         // Dark carbon-charcoal (UNIQUE)
                    "base-300": "#2A2A2A",         // Medium carbon-gray (UNIQUE)
                    "base-content": "#E8E8E8",     // Pure light text (UNIQUE)
                    
                    "info": "#8A8A8A",
                    "info-content": "#FFFFFF",
                    "success": "#7A7A7A",
                    "success-content": "#FFFFFF",
                    "warning": "#C8B866",
                    "warning-content": "#1A1A1A",
                    "error": "#AA5A5A",
                    "error-content": "#FFFFFF",
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
                    // GOLDEN CAVE DARK MODE - Deep amber with rich golden undertones
                    "primary": "#E6A544",           // Rich golden amber - distinctive
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#D6953C",         // Deep golden bronze
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#F6C366",           // Bright golden accent
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#4A3818",          // Deep golden neutral
                    "neutral-content": "#F8E8C0",  // Golden-tinted light text
                    
                    // Unique golden cave dark backgrounds
                    "base-100": "#1A1206",         // Very deep golden-black (UNIQUE)
                    "base-200": "#2D2418",         // Dark golden-brown (UNIQUE)
                    "base-300": "#4A3F2A",         // Medium golden-brown (UNIQUE)
                    "base-content": "#F8E8C0",     // Golden-tinted light text (UNIQUE)
                    
                    "info": "#E6A544",
                    "info-content": "#1A1A1A",
                    "success": "#D6953C",
                    "success-content": "#1A1A1A",
                    "warning": "#F6C366",
                    "warning-content": "#1A1A1A",
                    "error": "#CC5A5A",
                    "error-content": "#FFFFFF",
                },
            },
            // === VIBRANT PALETTES - More saturated and eye-catching === //
            // Vibrant Sage Palette
            {
                "vibrant-sage-light": {
                    "primary": "#6B9B6B",           // Vibrant sage green
                    "primary-content": "#FFFFFF",
                    "secondary": "#CC8F44",         // Vibrant warm gold
                    "secondary-content": "#FFFFFF",
                    "accent": "#4A88A8",           // Vibrant blue-gray
                    "accent-content": "#FFFFFF",
                    "neutral": "#5A5650",          // Rich warm gray
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FEFDFB",         // Crisp warm white
                    "base-200": "#F8F5F0",         // Light cream
                    "base-300": "#F0EBE4",         // Warm beige
                    "base-content": "#1F1F1F",     // Sharp charcoal
                    "info": "#4A88A8",
                    "info-content": "#FFFFFF",
                    "success": "#6B9B6B",
                    "success-content": "#FFFFFF",
                    "warning": "#E6B366",
                    "warning-content": "#1F1F1F",
                    "error": "#C55A5A",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "vibrant-sage-dark": {
                    // ELECTRIC FOREST DARK MODE - Neon sage with electric undertones
                    "primary": "#6BB870",           // Electric sage green - distinctive
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#E6A544",         // Electric gold
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#4A9CD0",           // Electric blue
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#2D4A2D",          // Deep electric neutral
                    "neutral-content": "#D8F8D8",  // Electric sage-tinted text
                    
                    // Unique electric forest dark backgrounds
                    "base-100": "#091A09",         // Very deep electric forest-black (UNIQUE)
                    "base-200": "#143514",         // Dark electric forest (UNIQUE)
                    "base-300": "#1F4F1F",         // Medium electric forest (UNIQUE)
                    "base-content": "#D8F8D8",     // Electric sage-tinted text (UNIQUE)
                    
                    "info": "#4A9CD0",
                    "info-content": "#1A1A1A",
                    "success": "#6BB870",
                    "success-content": "#1A1A1A",
                    "warning": "#E6A544",
                    "warning-content": "#1A1A1A",
                    "error": "#E65A5A",
                    "error-content": "#FFFFFF",
                },
            },
            // Vibrant Blues Palette
            {
                "vibrant-blues-light": {
                    "primary": "#4A88CC",           // Vibrant ocean blue
                    "primary-content": "#FFFFFF",
                    "secondary": "#6AA4D0",         // Vibrant sky blue
                    "secondary-content": "#FFFFFF",
                    "accent": "#8BB8E0",           // Vibrant light blue
                    "accent-content": "#FFFFFF",
                    "neutral": "#4A5A6B",          // Rich cool gray
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FAFBFC",         // Cool crisp white
                    "base-200": "#F2F6FA",         // Light blue-white
                    "base-300": "#E8F0F6",         // Soft blue-gray
                    "base-content": "#1A2A3A",     // Deep blue-charcoal
                    "info": "#4A88CC",
                    "info-content": "#FFFFFF",
                    "success": "#4A88CC",
                    "success-content": "#FFFFFF",
                    "warning": "#E6B366",
                    "warning-content": "#1A2A3A",
                    "error": "#C55A5A",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "vibrant-blues-dark": {
                    // NEON OCEAN DARK MODE - Electric blue with cyberpunk undertones
                    "primary": "#00AAFF",           // Electric ocean blue - distinctive
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#0088CC",         // Deep neon blue
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#33BBFF",           // Bright electric blue
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#0A2A4A",          // Deep ocean neutral
                    "neutral-content": "#B8E8FF",  // Electric blue-tinted text
                    
                    // Unique neon ocean dark backgrounds
                    "base-100": "#051218",         // Very deep neon ocean-black (UNIQUE)
                    "base-200": "#0A2535",         // Dark neon ocean (UNIQUE)
                    "base-300": "#0F3F55",         // Medium neon ocean (UNIQUE)
                    "base-content": "#B8E8FF",     // Electric blue-tinted text (UNIQUE)
                    
                    "info": "#00AAFF",
                    "info-content": "#FFFFFF",
                    "success": "#0088CC",
                    "success-content": "#FFFFFF",
                    "warning": "#FFA544",
                    "warning-content": "#1A1A1A",
                    "error": "#FF5A5A",
                    "error-content": "#FFFFFF",
                },
            },
            // Vibrant Earthy Palette
            {
                "vibrant-earthy-light": {
                    "primary": "#B8763C",           // Vibrant terracotta
                    "primary-content": "#FFFFFF",
                    "secondary": "#CC8F44",         // Vibrant amber
                    "secondary-content": "#FFFFFF",
                    "accent": "#A67C60",           // Vibrant clay
                    "accent-content": "#FFFFFF",
                    "neutral": "#6B4A35",          // Rich earth brown
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FEFAF6",         // Warm cream
                    "base-200": "#FAF0E6",         // Light terracotta
                    "base-300": "#F0E0CC",         // Warm tan
                    "base-content": "#2A1A0F",     // Deep earth brown
                    "info": "#B8763C",
                    "info-content": "#FFFFFF",
                    "success": "#B8763C",
                    "success-content": "#FFFFFF",
                    "warning": "#E6B366",
                    "warning-content": "#2A1A0F",
                    "error": "#C55A5A",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "vibrant-earthy-dark": {
                    // MOLTEN LAVA DARK MODE - Fiery earth with glowing undertones
                    "primary": "#FF6B35",           // Molten orange - distinctive
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#FF8844",         // Glowing amber
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#FFAA55",           // Bright flame accent
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#4A1808",          // Deep molten neutral
                    "neutral-content": "#FFD8B8",  // Molten-tinted light text
                    
                    // Unique molten lava dark backgrounds
                    "base-100": "#1A0806",         // Very deep molten-black (UNIQUE)
                    "base-200": "#351810",         // Dark molten earth (UNIQUE)
                    "base-300": "#4A2518",         // Medium molten earth (UNIQUE)
                    "base-content": "#FFD8B8",     // Molten-tinted light text (UNIQUE)
                    
                    "info": "#FF6B35",
                    "info-content": "#FFFFFF",
                    "success": "#FF8844",
                    "success-content": "#FFFFFF",
                    "warning": "#FFAA55",
                    "warning-content": "#1A1A1A",
                    "error": "#FF4444",
                    "error-content": "#FFFFFF",
                },
            },
            // Vibrant Greens Palette
            {
                "vibrant-greens-light": {
                    "primary": "#4A9B5A",           // Vibrant forest green
                    "primary-content": "#FFFFFF",
                    "secondary": "#6BB870",         // Vibrant leaf green
                    "secondary-content": "#FFFFFF",
                    "accent": "#7FC588",           // Vibrant mint
                    "accent-content": "#FFFFFF",
                    "neutral": "#4A6050",          // Rich green-gray
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FBFEFA",         // Fresh green-white
                    "base-200": "#F2F8F2",         // Light green
                    "base-300": "#E6F2E6",         // Soft green
                    "base-content": "#1A2A1F",     // Deep forest
                    "info": "#4A9B5A",
                    "info-content": "#FFFFFF",
                    "success": "#4A9B5A",
                    "success-content": "#FFFFFF",
                    "warning": "#E6B366",
                    "warning-content": "#1A2A1F",
                    "error": "#C55A5A",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "vibrant-greens-dark": {
                    // NEON JUNGLE DARK MODE - Electric green with bioluminescent undertones
                    "primary": "#00FF88",           // Neon jungle green - distinctive
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#44FF99",         // Electric leaf green
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#66FFAA",           // Bright neon mint
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#0A4A20",          // Deep jungle neutral
                    "neutral-content": "#B8FFD8",  // Neon green-tinted text
                    
                    // Unique neon jungle dark backgrounds
                    "base-100": "#051A0A",         // Very deep jungle-black (UNIQUE)
                    "base-200": "#0F3518",         // Dark neon jungle (UNIQUE)
                    "base-300": "#1A4F28",         // Medium neon jungle (UNIQUE)
                    "base-content": "#B8FFD8",     // Neon green-tinted text (UNIQUE)
                    
                    "info": "#00FF88",
                    "info-content": "#1A1A1A",
                    "success": "#44FF99",
                    "success-content": "#1A1A1A",
                    "warning": "#FFAA44",
                    "warning-content": "#1A1A1A",
                    "error": "#FF5555",
                    "error-content": "#FFFFFF",
                },
            },
            // Vibrant Neutrals Palette
            {
                "vibrant-neutrals-light": {
                    "primary": "#7A7A7A",           // Vibrant charcoal
                    "primary-content": "#FFFFFF",
                    "secondary": "#9A9090",         // Vibrant warm gray
                    "secondary-content": "#FFFFFF",
                    "accent": "#B0A8A0",           // Vibrant stone
                    "accent-content": "#FFFFFF",
                    "neutral": "#5A5550",          // Rich neutral
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FDFDFC",         // Pure white
                    "base-200": "#F8F6F4",         // Light neutral
                    "base-300": "#F0ECE8",         // Soft neutral
                    "base-content": "#1A1A1A",     // Sharp black
                    "info": "#7A7A7A",
                    "info-content": "#FFFFFF",
                    "success": "#7A7A7A",
                    "success-content": "#FFFFFF",
                    "warning": "#E6B366",
                    "warning-content": "#1A1A1A",
                    "error": "#C55A5A",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "vibrant-neutrals-dark": {
                    // SILVER VOID DARK MODE - Metallic silver with chrome undertones
                    "primary": "#CCCCCC",           // Bright silver - distinctive
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#BBBBBB",         // Chrome silver
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#DDDDDD",           // Light silver accent
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#404040",          // Deep void neutral
                    "neutral-content": "#E8E8E8",  // Bright silver-tinted text
                    
                    // Unique silver void dark backgrounds
                    "base-100": "#000000",         // Pure void-black (UNIQUE)
                    "base-200": "#181818",         // Dark void-charcoal (UNIQUE)
                    "base-300": "#333333",         // Medium void-gray (UNIQUE)
                    "base-content": "#E8E8E8",     // Bright silver-tinted text (UNIQUE)
                    
                    "info": "#CCCCCC",
                    "info-content": "#1A1A1A",
                    "success": "#BBBBBB",
                    "success-content": "#1A1A1A",
                    "warning": "#FFCC44",
                    "warning-content": "#1A1A1A",
                    "error": "#FF6666",
                    "error-content": "#FFFFFF",
                },
            },
            // Vibrant Warm Palette
            {
                "vibrant-warm-light": {
                    "primary": "#E6A544",           // Vibrant golden yellow
                    "primary-content": "#1A1A1A",
                    "secondary": "#CC8833",         // Vibrant amber
                    "secondary-content": "#FFFFFF",
                    "accent": "#F6C366",           // Vibrant buttercream
                    "accent-content": "#1A1A1A",
                    "neutral": "#8B6A35",          // Rich warm brown
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FFFEF9",         // Warm ivory
                    "base-200": "#FDF8ED",         // Light gold
                    "base-300": "#F8F0E1",         // Warm cream
                    "base-content": "#2A1F0F",     // Deep warm brown
                    "info": "#E6A544",
                    "info-content": "#1A1A1A",
                    "success": "#E6A544",
                    "success-content": "#1A1A1A",
                    "warning": "#F6C366",
                    "warning-content": "#1A1A1A",
                    "error": "#C55A5A",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "vibrant-warm-dark": {
                    // ELECTRIC SUN DARK MODE - Brilliant yellow with electric undertones
                    "primary": "#FFDD00",           // Electric sun yellow - distinctive
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#FFCC22",         // Bright electric gold
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#FFEE44",           // Brilliant sun accent
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#4A3A00",          // Deep sun neutral
                    "neutral-content": "#FFF8B8",  // Electric sun-tinted text
                    
                    // Unique electric sun dark backgrounds
                    "base-100": "#1A1500",         // Very deep sun-black (UNIQUE)
                    "base-200": "#352A00",         // Dark electric sun (UNIQUE)
                    "base-300": "#4A3F08",         // Medium electric sun (UNIQUE)
                    "base-content": "#FFF8B8",     // Electric sun-tinted text (UNIQUE)
                    
                    "info": "#FFDD00",
                    "info-content": "#1A1A1A",
                    "success": "#FFCC22",
                    "success-content": "#1A1A1A",
                    "warning": "#FFEE44",
                    "warning-content": "#1A1A1A",
                    "error": "#FF5577",
                    "error-content": "#FFFFFF",
                },
            },
            // === CREATIVE PALETTES - Unique designs with full creative freedom === //
            // Cyberpunk Palette
            {
                "cyberpunk-light": {
                    // NEON CITY LIGHT MODE - Bright neon with cyberpunk edge
                    "primary": "#FF00FF",           // Electric magenta
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#00FFFF",         // Electric cyan
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#FFFF00",           // Electric yellow
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#6A5ACD",          // Purple neutral
                    "neutral-content": "#FFFFFF",
                    
                    "base-100": "#F8F8FF",         // Ghost white
                    "base-200": "#F0F0F8",         // Very light purple
                    "base-300": "#E8E8F0",         // Light purple-gray
                    "base-content": "#1A0A1A",     // Deep purple-black
                    
                    "info": "#00FFFF",
                    "info-content": "#1A1A1A",
                    "success": "#00FF00",
                    "success-content": "#1A1A1A",
                    "warning": "#FFFF00",
                    "warning-content": "#1A1A1A",
                    "error": "#FF0080",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "cyberpunk-dark": {
                    // NEON UNDERGROUND DARK MODE - Deep cyber with neon highlights
                    "primary": "#FF44FF",           // Bright neon magenta
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#44FFFF",         // Bright neon cyan
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#FFFF44",           // Bright neon yellow
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#4A2A4A",          // Deep cyber neutral
                    "neutral-content": "#F8D8F8",  // Neon purple-tinted text
                    
                    // Unique cyberpunk dark backgrounds
                    "base-100": "#0A0012",         // Deep cyber-black (UNIQUE)
                    "base-200": "#150025",         // Dark neon purple (UNIQUE)
                    "base-300": "#2A0A3A",         // Medium cyber purple (UNIQUE)
                    "base-content": "#F8D8F8",     // Neon purple-tinted text (UNIQUE)
                    
                    "info": "#44FFFF",
                    "info-content": "#1A1A1A",
                    "success": "#44FF44",
                    "success-content": "#1A1A1A",
                    "warning": "#FFFF44",
                    "warning-content": "#1A1A1A",
                    "error": "#FF4488",
                    "error-content": "#FFFFFF",
                },
            },
            // Sunset Palette
            {
                "sunset-light": {
                    // GOLDEN HOUR LIGHT MODE - Warm sunset with golden tones
                    "primary": "#FF7A4A",           // Sunset coral
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#FFB366",         // Golden orange
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#FF9999",           // Soft pink
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#8B6B47",          // Warm brown
                    "neutral-content": "#FFFFFF",
                    
                    "base-100": "#FFF8F0",         // Warm cream white
                    "base-200": "#FFE8D0",         // Light peach
                    "base-300": "#FFD8B0",         // Soft orange
                    "base-content": "#2A1A0A",     // Deep warm brown
                    
                    "info": "#FF7A4A",
                    "info-content": "#FFFFFF",
                    "success": "#66B366",
                    "success-content": "#FFFFFF",
                    "warning": "#FFB366",
                    "warning-content": "#1A1A1A",
                    "error": "#CC5555",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "sunset-dark": {
                    // TWILIGHT DARK MODE - Deep sunset with purple undertones
                    "primary": "#FF6A3A",           // Deep sunset orange
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#CC5599",         // Twilight purple
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#FF8888",           // Warm sunset pink
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#4A1A3A",          // Deep twilight neutral
                    "neutral-content": "#FFD8E8",  // Sunset-tinted text
                    
                    // Unique sunset dark backgrounds
                    "base-100": "#1A0512",         // Deep sunset-black (UNIQUE)
                    "base-200": "#2A1025",         // Dark sunset purple (UNIQUE)
                    "base-300": "#4A2040",         // Medium sunset purple (UNIQUE)
                    "base-content": "#FFD8E8",     // Sunset-tinted text (UNIQUE)
                    
                    "info": "#FF6A3A",
                    "info-content": "#FFFFFF",
                    "success": "#66AA66",
                    "success-content": "#FFFFFF",
                    "warning": "#FFAA44",
                    "warning-content": "#1A1A1A",
                    "error": "#FF5577",
                    "error-content": "#FFFFFF",
                },
            },
            // Mint Chocolate Palette
            {
                "mint-chocolate-light": {
                    // FRESH MINT LIGHT MODE - Cool mint with chocolate accents
                    "primary": "#4AAAA4",           // Fresh mint
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#8B6F47",         // Rich chocolate
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#A4E4AA",           // Light mint
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#6B8B6B",          // Mint-chocolate neutral
                    "neutral-content": "#FFFFFF",
                    
                    "base-100": "#F8FFF8",         // Mint white
                    "base-200": "#F0F8F0",         // Very light mint
                    "base-300": "#E8F0E8",         // Light mint-gray
                    "base-content": "#1A2A1A",     // Deep mint-black
                    
                    "info": "#4AAAA4",
                    "info-content": "#FFFFFF",
                    "success": "#66BB66",
                    "success-content": "#FFFFFF",
                    "warning": "#B8956B",
                    "warning-content": "#FFFFFF",
                    "error": "#AA6666",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "mint-chocolate-dark": {
                    // DARK MINT TRUFFLE DARK MODE - Deep chocolate with mint highlights
                    "primary": "#66CCAA",           // Bright mint
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#AA7755",         // Warm chocolate
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#88EEBB",           // Electric mint
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#2A1A15",          // Deep chocolate neutral
                    "neutral-content": "#D8F8E8",  // Mint-tinted text
                    
                    // Unique mint chocolate dark backgrounds
                    "base-100": "#0F1A12",         // Deep mint-chocolate-black (UNIQUE)
                    "base-200": "#1A2A1F",         // Dark mint-chocolate (UNIQUE)
                    "base-300": "#2A3A2F",         // Medium mint-chocolate (UNIQUE)
                    "base-content": "#D8F8E8",     // Mint-tinted text (UNIQUE)
                    
                    "info": "#66CCAA",
                    "info-content": "#1A1A1A",
                    "success": "#88EEBB",
                    "success-content": "#1A1A1A",
                    "warning": "#CCAA77",
                    "warning-content": "#1A1A1A",
                    "error": "#CC7777",
                    "error-content": "#FFFFFF",
                },
            },
            // Rose Gold Palette
            {
                "rose-gold-light": {
                    // ELEGANT ROSE LIGHT MODE - Sophisticated rose with gold accents
                    "primary": "#E8B4B8",           // Elegant rose
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#D4AF37",         // Classic gold
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#F4C2C2",           // Soft blush
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#8B7B7B",          // Warm neutral
                    "neutral-content": "#FFFFFF",
                    
                    "base-100": "#FFF8F8",         // Rose white
                    "base-200": "#F8F0F0",         // Very light rose
                    "base-300": "#F0E8E8",         // Light rose-gray
                    "base-content": "#2A1A1A",     // Deep charcoal
                    
                    "info": "#E8B4B8",
                    "info-content": "#1A1A1A",
                    "success": "#A8C8A8",
                    "success-content": "#1A1A1A",
                    "warning": "#D4AF37",
                    "warning-content": "#1A1A1A",
                    "error": "#C85A5A",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "rose-gold-dark": {
                    // MIDNIGHT ROSE DARK MODE - Deep rose with golden highlights
                    "primary": "#F8C8CC",           // Bright rose
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#E6CC44",         // Bright gold
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#FFD8DD",           // Light rose
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#4A2A2A",          // Deep rose neutral
                    "neutral-content": "#F8E8E8",  // Rose-tinted text
                    
                    // Unique rose gold dark backgrounds
                    "base-100": "#1A0F0F",         // Deep rose-black (UNIQUE)
                    "base-200": "#2A1A1A",         // Dark rose-charcoal (UNIQUE)
                    "base-300": "#3A2525",         // Medium rose-gray (UNIQUE)
                    "base-content": "#F8E8E8",     // Rose-tinted text (UNIQUE)
                    
                    "info": "#F8C8CC",
                    "info-content": "#1A1A1A",
                    "success": "#B8D8B8",
                    "success-content": "#1A1A1A",
                    "warning": "#E6CC44",
                    "warning-content": "#1A1A1A",
                    "error": "#DD6A6A",
                    "error-content": "#FFFFFF",
                },
            },
            // Arctic Palette
            {
                "arctic-light": {
                    // ICE CRYSTAL LIGHT MODE - Cool arctic with ice blue tones
                    "primary": "#87CEEB",           // Sky blue
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#B0E0E6",         // Powder blue
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#E0F6FF",           // Ice blue
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#708090",          // Slate gray
                    "neutral-content": "#FFFFFF",
                    
                    "base-100": "#F8FCFF",         // Arctic white
                    "base-200": "#F0F8FF",         // Alice blue
                    "base-300": "#E8F4F8",         // Very light blue
                    "base-content": "#0A1A2A",     // Deep arctic blue
                    
                    "info": "#87CEEB",
                    "info-content": "#1A1A1A",
                    "success": "#5F9EA0",
                    "success-content": "#FFFFFF",
                    "warning": "#DDA0DD",
                    "warning-content": "#1A1A1A",
                    "error": "#CD5C5C",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "arctic-dark": {
                    // POLAR NIGHT DARK MODE - Deep arctic with aurora highlights
                    "primary": "#66DDFF",           // Bright arctic blue
                    "primary-content": "#1A1A1A",
                    
                    "secondary": "#99EEFF",         // Aurora blue
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#CCFFFF",           // Bright ice
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#2A3A4A",          // Deep arctic neutral
                    "neutral-content": "#D8F8FF",  // Arctic-tinted text
                    
                    // Unique arctic dark backgrounds
                    "base-100": "#051218",         // Deep arctic-black (UNIQUE)
                    "base-200": "#0A2535",         // Dark arctic blue (UNIQUE)
                    "base-300": "#0F3A50",         // Medium arctic blue (UNIQUE)
                    "base-content": "#D8F8FF",     // Arctic-tinted text (UNIQUE)
                    
                    "info": "#66DDFF",
                    "info-content": "#1A1A1A",
                    "success": "#77CCAA",
                    "success-content": "#1A1A1A",
                    "warning": "#DDAA77",
                    "warning-content": "#1A1A1A",
                    "error": "#FF7777",
                    "error-content": "#FFFFFF",
                },
            },
            // Coffee Palette
            {
                "coffee-light": {
                    // COFFEE HOUSE LIGHT MODE - Rich coffee with cream accents
                    "primary": "#8B4513",           // Saddle brown
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#DEB887",         // Burlywood
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#F5DEB3",           // Wheat
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#A0522D",          // Sienna
                    "neutral-content": "#FFFFFF",
                    
                    "base-100": "#FFF8DC",         // Cornsilk
                    "base-200": "#F5F5DC",         // Beige
                    "base-300": "#F0E68C",         // Khaki
                    "base-content": "#2F1B14",     // Dark brown
                    
                    "info": "#8B4513",
                    "info-content": "#FFFFFF",
                    "success": "#8FBC8F",
                    "success-content": "#1A1A1A",
                    "warning": "#DEB887",
                    "warning-content": "#1A1A1A",
                    "error": "#CD853F",
                    "error-content": "#FFFFFF",
                },
            },
            {
                "coffee-dark": {
                    // ESPRESSO DARK MODE - Deep coffee with rich cream highlights
                    "primary": "#D2691E",           // Chocolate orange
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#F4A460",         // Sandy brown
                    "secondary-content": "#1A1A1A",
                    
                    "accent": "#FFE4B5",           // Moccasin
                    "accent-content": "#1A1A1A",
                    
                    "neutral": "#3A1A0A",          // Deep coffee neutral
                    "neutral-content": "#F8E8D0",  // Coffee cream-tinted text
                    
                    // Unique coffee dark backgrounds
                    "base-100": "#1A0F06",         // Deep coffee-black (UNIQUE)
                    "base-200": "#2A1F14",         // Dark coffee brown (UNIQUE)
                    "base-300": "#3A2F22",         // Medium coffee brown (UNIQUE)
                    "base-content": "#F8E8D0",     // Coffee cream-tinted text (UNIQUE)
                    
                    "info": "#D2691E",
                    "info-content": "#FFFFFF",
                    "success": "#9FBC9F",
                    "success-content": "#1A1A1A",
                    "warning": "#F4A460",
                    "warning-content": "#1A1A1A",
                    "error": "#CD6839",
                    "error-content": "#FFFFFF",
                },
            },
            // Custom DaisyUI Inspired Palette
            {
                "custom-daisy-light": {
                    // CUSTOM LIGHT MODE - Inspired by the DaisyUI theme generator
                    "primary": "#570df8",           // Vibrant purple
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#f000b8",         // Bright magenta
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#37cdbe",           // Turquoise accent
                    "accent-content": "#FFFFFF",
                    
                    "neutral": "#3d4451",          // Dark gray-blue
                    "neutral-content": "#FFFFFF",
                    
                    "base-100": "#ffffff",         // Pure white
                    "base-200": "#f2f2f2",         // Light gray
                    "base-300": "#e5e5e5",         // Medium gray
                    "base-content": "#1f2937",     // Dark text
                    
                    "info": "#3abff8",             // Bright blue
                    "info-content": "#002B3D",
                    "success": "#36d399",          // Green
                    "success-content": "#003320",
                    "warning": "#fbbd23",          // Yellow
                    "warning-content": "#382800",
                    "error": "#f87272",            // Red
                    "error-content": "#470000",
                },
            },
            {
                "custom-daisy-dark": {
                    // CUSTOM DARK MODE - Neon cyberpunk inspired
                    "primary": "#7c3aed",           // Deep purple
                    "primary-content": "#FFFFFF",
                    
                    "secondary": "#e11d8f",         // Deep magenta
                    "secondary-content": "#FFFFFF",
                    
                    "accent": "#2dd4bf",           // Bright turquoise
                    "accent-content": "#003328",
                    
                    "neutral": "#1e293b",          // Deep slate
                    "neutral-content": "#e2e8f0",
                    
                    // Unique dark backgrounds
                    "base-100": "#0f172a",         // Deep dark blue
                    "base-200": "#1e293b",         // Darker slate
                    "base-300": "#334155",         // Medium slate
                    "base-content": "#e2e8f0",     // Light gray text
                    
                    "info": "#38bdf8",
                    "info-content": "#001322",
                    "success": "#34d399",
                    "success-content": "#001f13",
                    "warning": "#fbbf24",
                    "warning-content": "#1f1200",
                    "error": "#fb7185",
                    "error-content": "#FFFFFF",
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
