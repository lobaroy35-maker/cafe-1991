/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F6F0E6',
          50: '#FCFAF7',
          100: '#F6F0E6',
          200: '#EFE7DA',
        },
        milk: '#FFFDF8',
        cream: {
          DEFAULT: '#EFE4D3',
          light: '#F7F1E7',
          dark: '#E2D3BD',
        },
        peach: {
          DEFAULT: '#E4C7B8',
          light: '#F2DFD5',
          dark: '#D5A893',
        },
        sage: {
          DEFAULT: '#B6C2AF',
          light: '#D3DDD0',
          dark: '#93A48B',
        },
        sand: {
          DEFAULT: '#D7C3A7',
          light: '#E9DECE',
          dark: '#BD9E7D',
        },
        terracotta: {
          DEFAULT: '#C89276',
          light: '#DAA992',
          dark: '#AD6F53',
        },
        cocoa: {
          DEFAULT: '#55463D',
          light: '#726054',
          dark: '#3D312A',
        },
        charcoal: {
          DEFAULT: '#39332D',
          muted: '#81766D',
          faint: '#B2A9A1',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        accent: ['Marcellus', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.22em',
        'mega-wide': '0.35em',
      },
      boxShadow: {
        'soft-luxury': '0 20px 40px -15px rgba(85, 70, 61, 0.08)',
        'soft-card': '0 10px 30px -10px rgba(85, 70, 61, 0.05)',
        'soft-glow': '0 0 50px rgba(228, 199, 184, 0.25)',
        'ceramic': '0 12px 32px rgba(85, 70, 61, 0.06)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
