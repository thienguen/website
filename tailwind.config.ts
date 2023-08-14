  /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content : ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: false,
  },
  theme   : {
    container: {
      center : true,
      padding: '2rem',
      screens: {
        'xl'      : '1380px',
        '2xl'     : '1536px',
        '3xl'     : '1920px',
        '4xl'     : '2560px',
        '5xl'     : '3240px',
        '6xl'     : '4096px',
        'tall'    : { raw: '(min-height: 800px)' },
        'tall-2xl': { raw: '(min-height: 1000px) and (min-width: 1536px)' },
        'tall-3xl': { raw: '(min-height: 1200px) and (min-width: 1920px)' },
        'xxsm'    : '380px',
        'xsm'     : '460px',
        'sxsm'    : '510px',
        'sm'      : '640px',
        'md'      : '768px',
        'mmlg'    : '810px',
        'mlg'     : '894px',
        'lg'      : '1024px',
      },
    },
    extend: {
      colors: {
        border    : 'hsl(var(--border))',
        input     : 'hsl(var(--input))',
        ring      : 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary   : {
          DEFAULT   : 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT   : 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT   : 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT   : 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT   : 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT   : 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT   : 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up'  : 'accordion-up 0.2s ease-out',
          /* AddedCho */
        'fade-in'   : 'fade-in 1.5s ease-in-out forwards',
        'fade-in-2' : 'fade-in-2 2.25s ease-in-out forwards',
        'title'     : 'title 2s ease-out forwards',
        'fade-left' : 'fade-left 4s ease-in-out forwards',
        'fade-right': 'fade-right 4s ease-in-out forwards',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to  : { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to  : { height: 0 },
        },
        'fade-in': {
          '0%': {
            opacity: '0%',
          },
          '75%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        'fade-in-2': {
          '0%': {
            opacity: '0%',
          },
          '75%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        'fade-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity  : '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity  : '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity  : '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity  : '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        'title': {
          '0%': {
            'line-height'   : '0%',
            'letter-spacing': '0.25em',
            'opacity'       : '0',
          },
          '25%': {
            'line-height': '0%',
            'opacity'    : '0%',
          },
          '80%': {
            opacity: '100%',
          },

          '100%': {
            'line-height': '100%',
            'opacity'    : '100%',
          },
        },
      },
    },
    fontFamily: {
      'dosis'          : ['Dosis', 'sans-serif'],
      'display'        : ['var(--font-calsans)'],
      'signature'      : ['Sacramento', 'cursive'],
      'metropolis'     : ['MetropolisRegular', 'sans-serif'],   // copi
      'metropolis-bold': ['MetropolisBold', 'sans-serif'],      // copi
      'jetbrains-mono' : ['JetBrains Mono', 'monospace'],
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography'), require('daisyui')],
}
