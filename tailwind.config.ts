module.exports = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/app/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'terminal-foreground': 'var(--terminal-foreground)',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
