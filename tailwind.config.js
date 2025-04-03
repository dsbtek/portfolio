/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            maxWidth: {
                '8xl': '1400px',
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: 'inherit',
                        a: {
                            color: '#3B82F6',
                            '&:hover': {
                                color: '#2563EB',
                            },
                        },
                        code: {
                            color: '#24292e',
                            backgroundColor: '#f6f8fa',
                            paddingLeft: '0.25rem',
                            paddingRight: '0.25rem',
                            paddingTop: '0.125rem',
                            paddingBottom: '0.125rem',
                            borderRadius: '0.25rem',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
