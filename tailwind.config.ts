import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#fff9e6',
  				'100': '#fff3cc',
  				'200': '#ffe799',
  				'300': '#ffdb66',
  				'400': '#ffcf33',
  				'500': '#ffc300',
  				'600': '#cc9c00',
  				'700': '#997500',
  				'800': '#664e00',
  				'900': '#332700',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
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
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			heading: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in',
  			'slide-up': 'slideUp 0.5s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      transform: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;



// import type { Config } from "tailwindcss";

// export default {
//     darkMode: ["class"],
//     content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//       extend: {
//           colors: {
//               primary: {
//                   '50': '#fff9e6',
//                   '100': '#fff3cc',
//                   '200': '#ffe799',
//                   '300': '#ffdb66',
//                   '400': '#ffcf33',
//                   '500': '#ffc300',
//                   '600': '#cc9c00',
//                   '700': '#997500',
//                   '800': '#664e00',
//                   '900': '#332700',
//                   DEFAULT: 'hsl(var(--primary))',
//                   foreground: 'hsl(var(--primary-foreground))'
//               },
//               background: '#ffffff',
//               foreground: '#111111',
//               card: {
//                   DEFAULT: '#f9f9f9',
//                   foreground: '#111111'
//               },
//               popover: {
//                   DEFAULT: '#f9f9f9',
//                   foreground: '#111111'
//               },
//               secondary: {
//                   DEFAULT: '#f0f0f0',
//                   foreground: '#111111'
//               },
//               muted: {
//                   DEFAULT: '#f0f0f0',
//                   foreground: '#444444'
//               },
//               accent: {
//                   DEFAULT: '#f0f0f0',
//                   foreground: '#111111'
//               },
//               destructive: {
//                   DEFAULT: '#ff4d4f',
//                   foreground: '#ffffff'
//               },
//               border: '#e0e0e0',
//               input: '#e0e0e0',
//               ring: '#111111',
//               chart: {
//                   '1': '#ff8c00',
//                   '2': '#00aaff',
//                   '3': '#008000',
//                   '4': '#ff4500',
//                   '5': '#9400d3'
//               }
//           },
//           fontFamily: {
//               sans: [
//                   'Inter',
//                   'system-ui',
//                   'sans-serif'
//               ],
//               heading: [
//                   'Inter',
//                   'system-ui',
//                   'sans-serif'
//               ]
//           },
//           animation: {
//               'fade-in': 'fadeIn 0.5s ease-in',
//               'slide-up': 'slideUp 0.5s ease-out'
//           },
//           borderRadius: {
//               lg: 'var(--radius)',
//               md: 'calc(var(--radius) - 2px)',
//               sm: 'calc(var(--radius) - 4px)'
//           }
//       }
//   },
//   variants: {
//     extend: {
//       opacity: ['group-hover'],
//       transform: ['group-hover'],
//       scale: ['group-hover'],
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;
