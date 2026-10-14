import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { brand: { violet: "#7C3AED", deep: "#22123F", ink: "#171324", lilac: "#F2ECFF" } }, fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] }, boxShadow: { glow: "0 24px 80px rgba(124,58,237,.22)" } } }, plugins: [] };
export default config;
