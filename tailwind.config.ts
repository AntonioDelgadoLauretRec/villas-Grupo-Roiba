import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ══════════════════════════════════════════════════════════
        // PALETA OFICIAL - MANUAL DE MARCA V3 GRUPO ROIBA
        // Fuente: Manual_Maestro_Marca_Grupo_Roiba_V3_Logo_RI.pdf
        // ══════════════════════════════════════════════════════════
        roiba: {
          // Verde Profundo (Primario) - Autoridad, Solidez
          verde: {
            DEFAULT: '#122620',
            light: '#1A3830',
            dark: '#0A1613',
            50: '#E8EDEB',
            100: '#C5D1CC',
            200: '#9FB3AB',
            300: '#79958A',
            400: '#5D7D71',
            500: '#122620',
            600: '#0E1E1A',
            700: '#0A1613',
            800: '#060E0D',
            900: '#020606',
          },
          // Arena Claro (Base) - Fondos, Espacios
          arena: {
            DEFAULT: '#F4EBD0',
            light: '#FAF7EE',
            dark: '#E8DEC4',
          },
          // Dorado Claro (Acento Premium) - CTAs, Highlights
          dorado: {
            DEFAULT: '#FFCC53',
            claro: '#FFCC53',
            arena: '#B68D40',
            mate: '#B68D40',
          },
        },
        // Alias semánticos para facilidad de uso
        primary: '#122620',
        secondary: '#F4EBD0',
        accent: '#FFCC53',
        'accent-muted': '#B68D40',
      },
      fontFamily: {
        // Tipografía Manual V3: Gotham (con fallbacks web)
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Lato', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Gotham', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading': ['1.75rem', { lineHeight: '1.25' }],
        'subheading': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'legal': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-verde': 'linear-gradient(135deg, #122620 0%, #1A3830 100%)',
        'gradient-dorado': 'linear-gradient(135deg, #B68D40 0%, #FFCC53 100%)',
        'gradient-arena': 'linear-gradient(180deg, #FAF7EE 0%, #F4EBD0 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(18, 38, 32, 0.2)',
        'gold': '0 10px 40px -10px rgba(182, 141, 64, 0.25)',
        'card': '0 4px 24px rgba(18, 38, 32, 0.06)',
        'card-hover': '0 8px 32px rgba(18, 38, 32, 0.12)',
        'inner-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
      },
    },
  },
  plugins: [],
}

export default config
