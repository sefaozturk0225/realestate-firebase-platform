/** 
 * ═══════════════════════════════════════════════════════════════════
 * 🎨 TAILWIND CSS CONFIGURATION - Optimized
 * ═══════════════════════════════════════════════════════════════════
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/*.{html,js}",
    "./src/**/*.{html,js}" // Gelecekte src klasörü eklenirse
  ],
  
  theme: {
    extend: {
      // Brand Colors (site-config.js ile senkronize)
      colors: {
        brand: {
          DEFAULT: '#FACC15',
          dark: '#F59E0B',
          light: '#FDE047',
          darker: '#D97706',
          lighter: '#FEF3C7'
        },
        surface: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          lighter: '#334155',
          card: '#334155',
          dark: '#020617'
        }
      },
      
      // Font Family
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      
      // Spacing (ek spacing değerleri)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem'
      },
      
      // Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      
      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      
      // Box Shadow
      boxShadow: {
        'brand': '0 4px 20px rgba(250, 204, 21, 0.3)',
        'brand-lg': '0 10px 40px rgba(250, 204, 21, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      },
      
      // Backdrop Blur
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  
  plugins: [
    // Form plugin (opsiyonel)
    // require('@tailwindcss/forms'),
    
    // Line clamp plugin (opsiyonel)
    // require('@tailwindcss/line-clamp'),
    
    // Custom utilities
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-default': {
          '-ms-overflow-style': 'auto',
          'scrollbar-width': 'auto',
          '&::-webkit-scrollbar': {
            display: 'block'
          }
        }
      })
    }
  ],
  
  // Dark mode strategy (gelecekte kullanım için)
  darkMode: 'class',
  
  // PurgeCSS için safelist (production build'de korunacak sınıflar)
  safelist: [
    'animate-fade-in',
    'animate-slide-up',
    'animate-pulse-slow',
    {
      pattern: /^(bg|text|border)-(brand|surface)/,
      variants: ['hover', 'focus', 'active']
    }
  ]
}
