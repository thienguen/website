

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content : ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
        /* Set up */
        'input'     : 'hsl(var(--input))',
        'ring'      : 'hsl(var(--ring))',
        'border'    : 'hsl(var(--border))',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',

        'primary': {
          DEFAULT   : 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'secondary': {
          DEFAULT   : 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'destructive': {
          DEFAULT   : 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'muted': {
          DEFAULT   : 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT   : 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'popover': {
          DEFAULT   : 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'card': {
          DEFAULT   : 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // Copi Copi
        'bglight'    : '#F9FAFB',
        'marrslight' : '#1C9A9A',
        'marrsgreen' : '#007A7A',
        'marrsdark'  : '#004D4D',
        'cardlight'  : '#EFF3F3',
        'bgdark'     : '#1D2A35',
        'carrilight' : '#57DCB4',
        'carrigreen' : '#05CE91',
        'carridark'  : '#00835B',
        'carddark'   : '#22323F',
        'textlight'  : '#F9FAFB',
        'pink-accent': '#a385b3',
        'gold'       : '#F6C177',

        /* Dangerous, don't */
        // 'yellow'     : '#ffff80',
        // 'pink'       : '#ff80bf',
        // 'purple'     : '#9580ff',
        // 'red'        : '#ff9580',
        // 'orange'     : '#ffca80',
        // 'green'      : '#8aff80',
        // 'cyan'       : '#80ffea',
        'hover'      : '#212024',
        'command'    : 'rgba(255, 255, 255, 0.05)',

        // Theme
        'darkPrimaryColor'   : '#6ACDFF',
        'darkSecondaryColor' : '#57BFFF',
        'lightPrimaryColor'  : '#D87787',
        'lightSecondaryColor': '#861657',

        'lightTheme': 'bg-gradient-to-b from-slate-300 to-gray-300',
        'darkTheme' : 'dark:bg-gradient-to-b dark:from-black dark:to-gray-900',
      },

      backgroundColor: {
        'aqua'  : '#00FFFF',
        'silver': '#C0C0C0',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      animation: {
        'accordion-down'   : 'accordion-down 0.2s ease-out',
        'accordion-up'     : 'accordion-up 0.2s ease-out',
        'fade-in'          : 'fade-in 2000ms var(--animation-delay, 0ms) ease forwards',
        'fade-in-2'        : 'fade-in-2 2.25s ease-in-out forwards',
        'title'            : 'title 2s ease-out forwards',
        'fade-left'        : 'fade-left 4s ease-in-out forwards',
        'fade-right'       : 'fade-right 4s ease-in-out forwards',
      },

      keyframes: {
        /* ??? */
        'accordion-down': {
          from: { height: 0 },
          to  : { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to  : { height: 0 },
        },
        'fade-in': {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to  : { opacity: 1, transform: 'none' },
        },
        /* Deprecated */
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
        /* Deprecated, by me */
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

      width: {
        '120': '30rem',
        '160': '40rem',
        '30' : '7.5rem',
      },
      
      height: {
        '120': '30rem',
        '160': '40rem',
        '30' : '7.5rem',
      },

      spacing: {
        '15': '3.75rem', // this corresponds to 60px; adjust if needed
      },
    },
    fontFamily: {
      'dosis'         : ['Dosis',         'sans-serif'],
      'signature'     : ['Sacramento',       'cursive'],
      'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      'metropolis'    : ['Metropolis',    'sans-serif'],
      'pixeloidMono'  : ['PixelloidMono',  'monospace'],
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
