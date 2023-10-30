/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		backgroundImage: {
			'bg-login': `linear-gradient(to right bottom, rgba(193, 153, 92, 0), rgba(193, 153, 92,0)), url(/images/login-bg.png)`,
			'carusel-Image': `url('/src/assets/images/image1.png')`,
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			purple: '#3f3cbb',
			midnight: '#121063',
			metal: '#565584',
			tahiti: '#3ab7bf',
			silver: '#ecebff',
			'bubble-gum': '#ff77e9',
			bermuda: '#78dcca',
			'primary-text': '#303A42',
			'light-blue': '#EFF8FF',
			'icon-color': '#AED1ED',
			'gray-color': '#C5C5C5',
			blue: '#0C4B7E',
			'dark-blue': '#002F55',
			'brown-color': '#B58D50',
			highlight: '#FFFBD8',
			'blue-text': '#3B7EB4',
			'gray-text': '#9A9A9A',
			'dark-gray-text': '#6D7378',
			'darker-gray-text': '#545C62',
			'pagination-highlight': '#F5F5FF',
			'light-gray': '#E6E6E6',
			'lighter-gray': '#D9D9D9',
			'light-brown': '#C1995C',
			'red-color': '#EF495D',
			'light-red': '#FFF1F3',
			'green-highlight-bg': '#D9FFED',
			'green-highlight': '#1FEA89',
			'lighter-blue': '#DBEEFE',
			'darkest-gray': '#303A42',
			black: '#0E1012',
			'dark-gray': '#17232D',
			'lighter-brown': '#FFFAF1',
			'bg-light-gray': '#F8F8F8',
			'light-yellow': '#EDD0A5',
			'light-pink': '#FF7485',
			'darker-blue': '#76ABD6',
			error: '#FF99A5',
			'gray-border-color': '#E2E3E4',
			'brown-bg': '#F5E6D0',
		},
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', 'Roboto'],
				inter: ['Inter', 'sans-serif'],
				cambria: ['Cambria', 'sans-serif'],
			},
			fontSize: {
				'heading-3xl': [
					'28px',
					{
						lineHeight: '32px',
						fontWeight: '700',
					},
				],
				'heading-logo': [
					'16px',
					{
						lineHeight: '20px',
						fontWeight: '700',
					},
				],
				'button-1': [
					'16px',
					{
						lineHeight: '20px',
						fontWeight: '600',
						letterSpacing: '-1%',
					},
				],
				'body-small': [
					'12px',
					{
						lineHeight: '16px',
						fontWeight: '400',
					},
				],
				'title-2': [
					'16px',
					{
						lineHeight: '20px',
						fontWeight: '600',
					},
				],
				'button-2': [
					'14px',
					{
						lineHeight: '20px',
						letterSpacing: '-1%',
						fontWeight: '600',
					},
				],
				'body-14': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: '400',
					},
				],
				allcaps: [
					'14px',
					{
						lineHeight: '20px',
						letterSpacing: '4%',
						fontWeight: '400',
					},
				],
				'underline-16': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: '400',
					},
				],
				'p-sm-md': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: '500',
					},
				],
				'p-sm-reg': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: '400',
					},
				],
				'title-1': [
					'18px',
					{
						lineHeight: '24px',
						fontWeight: '600',
					},
				],
				'headline-6': [
					'20px',
					{
						lineHeight: '28px',
						fontWeight: '700',
					},
				],
				'headline-2': [
					'40px',
					{
						lineHeight: '48px',
						fontWeight: '700',
					},
				],
				'headline-4': [
					'40px',
					{
						lineHeight: '48px',
						fontWeight: '700',
					},
				],
				'body-16': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: '400',
					},
				],
				'headline-7': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: '700',
					},
				],
				'small-heading-3xl': [
					'28px',
					{
						lineHeight: '32px',
						fontWeight: '700',
					},
				],
				'small-button-1': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: '600',
						letterSpacing: '-1%',
					},
				],
				'small-body-small': [
					'12px',
					{
						lineHeight: '16px',
						fontWeight: '400',
					},
				],
				'small-title-2': [
					'12px',
					{
						lineHeight: '18px',
						fontWeight: '600',
					},
				],
				'small-body-14': [
					'12px',
					{
						lineHeight: '20px',
						fontWeight: '400',
					},
				],
				'small-allcaps': [
					'12px',
					{
						lineHeight: '16px',
						letterSpacing: '4%',
						fontWeight: '400',
					},
				],
				'small-underline-16': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: '400',
					},
				],
				'small-p-sm-reg': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: '400',
					},
				],
				'small-headline-6': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: '700',
					},
				],
				'small-headline-2': [
					'28px',
					{
						lineHeight: '32px',
						fontWeight: '700',
					},
				],
				'small-headline-4': [
					'40px',
					{
						lineHeight: '48px',
						fontWeight: '700',
					},
				],
				'small-body-16': [
					'12px',
					{
						lineHeight: '16px',
						fontWeight: '400',
					},
				],
				'small-headline-7': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: '700',
					},
				],
				'small-title-1': [
					'14px',
					{
						lineHeight: '18px',
						fontWeight: '500',
					},
				],
				'small-p-sm-md': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: '500',
					},
				],
				'small-button-2': [
					'12px',
					{
						lineHeight: '20px',
						letterSpacing: '-1%',
						fontWeight: '500',
					},
				],
				'small-heading-logo': [
					'10px',
					{
						lineHeight: '12px',
						fontWeight: '700',
					},
				],
			},
			boxShadow: {
				custom: '-1px 1px 10px 20px rgba(0, 0, 0, 0.25)',
			},
		},
		screens: {
			xs: '320px',
			sm: '576px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px',
		},
	},
	plugins: [],
};
