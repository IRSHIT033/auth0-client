const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{html,tsx}",
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};