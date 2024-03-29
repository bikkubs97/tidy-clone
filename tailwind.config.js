/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        // Add your custom colors here
        primary: '#3490dc',
        secondary: '#ffed4a',
        customRed: '#D92101',
        customGreen: '#072A2A',
        background :'#ECF2FB',
        // Add as many custom colors as you need
      },

    },
  },
  plugins: [],
}
