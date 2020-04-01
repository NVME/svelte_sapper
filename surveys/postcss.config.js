
const tailwindcss = require("tailwindcss");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html", "./src/components/*.svelte"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};