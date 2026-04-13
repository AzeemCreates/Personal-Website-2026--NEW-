import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        background: "#0F0F0F",
        surface: "#1A1A1A",
        text: "#F5F5F5",
        muted: "#888888",
        border: "#2A2A2A",
      },
    },
  },
  plugins: [],
};

export default config;
