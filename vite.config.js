import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "development" ? "/" : "/curso-react-vite-tailwind/", // Ajusta la base URL dependiendo del entorno
  };
});
