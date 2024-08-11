import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  esbuild: {
    supported: {
      "top-level-await": true, //browsers can handle top-level-await features
    },
  },
  // optimizeDeps: {
  //   exclude: ["js-big-decimal"],
  // },
  plugins: [react()],
});
