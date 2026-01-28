/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design System "Lujo Tropical"
        arena: {
          DEFAULT: '#F5E6D3',
          light: '#FAF3EB',
          dark: '#E8D4BC',
        },
        oceano: {
          DEFAULT: '#1A4D5C',
          light: '#2E6F81',
          dark: '#0F3642',
        },
        dorado: {
          DEFAULT: '#C9A95A',
          light: '#D4BA7A',
          dark: '#B89842',
          mate: '#C9A95A',
        },
        carbon: {
          DEFAULT: '#2B2B2B',
          light: '#3D3D3D',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        // System font stacks (Google Fonts can be added in production)
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1': ['2.25rem', { lineHeight: '1.25' }],
        'heading-2': ['1.875rem', { lineHeight: '1.3' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        'card': '1rem',
        'button': '0.5rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'button': '0 2px 8px rgba(201, 169, 90, 0.3)',
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(135deg, #C9A95A 0%, #F5E6D3 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #1A4D5C 0%, #2E6F81 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
