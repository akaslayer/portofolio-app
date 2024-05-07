import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'neue-montreal': ['PP Neue Montreal'],
        inter: ['Inter'],
      },
      colors: {
        'light-greay': '#C7D0D9',
      },
      animation: {
        'move-rtl': 'move 3s linear infinite',
      },
      keyframes: {
        move: {
          '0%': { transform: 'tranxlateX(-100%)' },
          '100%': { transform: 'translateX(150%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
