import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                fontFamily: {
                        mono: ['var(--font-vt323)', 'monospace'],
                        vt323: ['var(--font-vt323)', 'monospace'],
                },
                gridTemplateColumns: {
                        '20': 'repeat(20, minmax(0, 1fr))',
                },
                gridTemplateRows: {
                        '20': 'repeat(20, minmax(0, 1fr))',
                },
                colors: {
                        // Sepia pixel-art theme colors
                        darkSepia: '#2b1f14',
                        warmBrown: '#4a3221',
                        deepAmber: '#a86d2a',
                        gold: '#f5c16c',
                        cream: '#f9e6c1',
                        // Discord colors
                        blurple: '#5865F2',
                        'blurple-dark': '#4752C4',
                        // Legacy colors for compatibility
                        dark: '#2b1f14',
                        mint: '#f5c16c',
                        blue: '#a86d2a',
                        pink: '#f5c16c',
                        gray: '#f9e6c1',
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
