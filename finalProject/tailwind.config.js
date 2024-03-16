/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary_blue: "#1E3A8A",
        primary_orange: "#EA580C",
        search_header: "#666666",
        product_category_color: "#DDDDDD",
        primary_icon_white_color: "#FAFAFA",
        primary_footer_information_color: "#FFFFFF",
        footer_information_color: "#F1F5F9",
      },
      fontFamily:{
        Inter: "Inter, sans-serif",
      },
      fontSize:{
        '10px': '10px',
      }
    },
  },
  plugins: [],
}

