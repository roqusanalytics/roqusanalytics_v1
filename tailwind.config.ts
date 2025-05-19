
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				nexos: {
					purple: '#8B5CF6',
					'purple-light': '#A78BFA',
					'purple-dark': '#7C3AED',
					dark: '#F8F9FA',
					'dark-light': '#F1F3F5',
					'dark-lighter': '#E9ECEF'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.6'
					},
					'50%': {
						opacity: '1'
					}
				},
				'rise': {
					'0%': {
						height: '0%'
					},
					'100%': {
						height: '100%'
					}
				},
				'number-count': {
					'0%': {
						content: '"0%"'
					},
					'20%': {
						content: '"20%"'
					},
					'40%': {
						content: '"40%"'
					},
					'60%': {
						content: '"60%"'
					},
					'80%': {
						content: '"80%"'
					},
					'100%': {
						content: '"100%"'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'navbar-slide-down': {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'navbar-glow': {
					'0%': {
						boxShadow: '0 0 0 rgba(139, 92, 246, 0)'
					},
					'50%': {
						boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)'
					},
					'100%': {
						boxShadow: '0 0 0 rgba(139, 92, 246, 0)'
					}
				},
				'menu-item-highlight': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'accent-line-slide': {
					'0%': {
						transform: 'translateX(0%)',
						width: '0%',
						opacity: '0.7'
					},
					'10%': {
						width: '30%',
						opacity: '1'
					},
					'50%': {
						width: '100%',
						opacity: '1'
					},
					'90%': {
						width: '30%',
						opacity: '1',
						transform: 'translateX(70%)'
					},
					'100%': {
						transform: 'translateX(100%)',
						width: '0%',
						opacity: '0.7'
					}
				},
				'loading-progress': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: '100%'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-up': 'fade-up 0.6s ease-out forwards',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'pulse-slow': 'pulse-glow 5s ease-in-out infinite',
				'rise': 'rise 2s ease-in-out forwards',
				'number-count': 'number-count 2s ease-out forwards',
				'rotate-slow': 'rotate-slow 10s linear infinite',
				'navbar-slide-down': 'navbar-slide-down 0.5s ease-out forwards',
				'navbar-glow': 'navbar-glow 3s ease-in-out infinite',
				'menu-item-highlight': 'menu-item-highlight 3s ease infinite',
				'accent-line-slide': 'accent-line-slide 1.5s ease-in-out forwards',
				'loading-progress': 'loading-progress 0.3s ease-out forwards',
				'shimmer': 'shimmer 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
