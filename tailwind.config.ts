import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hulaya: {
          gold: "#c9ab47",
          ink: "#111827",
          soft: "#f5f5f7"
        }
      }
    }
  },
  plugins: []
};

export default config;
