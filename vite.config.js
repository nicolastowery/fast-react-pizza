import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  base: "https://fast-react-pizza-towery.vercel.app/",
  plugins: [react(), eslint()],
});
