/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Hangi dosyaları tarayıp Tailwind sınıflarını ekleyeceğini belirtir
  ],
  theme: {
    extend: {}, // Özel renkler, fontlar veya ölçüler ekleyebilirsin
  },
  plugins: [], // Tailwind eklentilerini buraya ekleyebilirsin
};
