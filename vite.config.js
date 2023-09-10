import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
  build: {
    outDir: "public/build", // Ensure this is correctly set
  },
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true,
    }),
  ],
});
