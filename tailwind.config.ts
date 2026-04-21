import type { Config } from 'tailwindcss'

// Tailwind CSS v4 prefers app.css for configuration via CSS variables,
// but we keep tailwind.config.ts for semantic definitions and legacy support as requested.
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'green-deep': '#10403B',
        'green-mid': '#127369',
        'green-accent': '#8AA6A3',
        'gray-light': '#BFBFBF',
        'dark': '#0a0a0a',
        'dark-card': '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config
