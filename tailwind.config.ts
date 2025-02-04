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
			colors: {
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
				},
				/* dodger_blue */
				primary: {
				    	DEFAULT: '#1098f7',
				    	100: '#021f33',
				    	200: '#033d67',
				    	300: '#055c9a',
				    	400: '#067bce',
				    	500: '#1098f7',
				    	600: '#41acf9',
				    	700: '#71c1fb',
				    	800: '#a0d6fc',
				    	900: '#d0eafe'
				}, 
				/* rosy_brown */
				secondary: {
					DEFAULT: '#b89e97',
					100: '#281e1b',
					200: '#503c37',
					300: '#785a52',
					400: '#9e7a70',
					500: '#b89e97',
					600: '#c7b2ac',
					700: '#d5c5c1',
					800: '#e3d9d6',
					900: '#f1ecea'
				}, 
				/* pale_dogwood */
				tertiary: {
					DEFAULT: '#decccc',
					100: '#342222',
					200: '#684444',
					300: '#9b6666',
					400: '#bd9a9a',
					500: '#decccc',
					600: '#e5d8d8',
					700: '#ece1e1',
					800: '#f2ebeb',
					900: '#f9f5f5'
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
