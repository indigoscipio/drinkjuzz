/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "belief-section": "url('../public/assets/belief-pattern.png')",
        "footer-section": "url('../public/assets/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
