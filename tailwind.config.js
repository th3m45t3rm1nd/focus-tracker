// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Where Tailwind scans for classes (crucial for JIT compilation)
  content: [
    "./src/**/*.{html,js}", // Common path for HTML/JS files in a 'src' folder
    "./*.html",             // For HTML files directly in the project root
    // Add other paths as needed, e.g., for frameworks:
    // "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js
    // "./components/**/*.{js,ts,jsx,tsx}", // For React/Vue components
  ],
  // 2. Theme configuration (where you extend/override Tailwind's defaults)
  theme: {
    extend: {
      // This is where you would add your custom colors, fonts, spacing, etc.
      // Example:
      colors: {
      },
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      // fontFamily: {
      //   'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      //   'serif': ['Merriweather', 'serif'],
      // },
    },
  },
  // 3. Plugins (for adding custom utilities, components, etc.)
  plugins: [],
}
