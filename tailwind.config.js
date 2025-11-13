/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,jsx,ts,tsx,mdx}",
        "./components/**/*.{js,jsx,ts,tsx,mdx}",
        "./hooks/**/*.{js,jsx,ts,tsx,mdx}",
        "./lib/**/*.{js,jsx,ts,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7b5cf4",
                dark: "#241f3a",
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
            },
        },
    },
};
