/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#ffffff',
                secondary: '#9db3b4',
            },
        },
        fontFamily: {
            sans: ['VarelaRound'],
            serif: ['VarelaRound'],
            mono: ['VarelaRound'],
            display: ['VarelaRound'],
            body: ['VarelaRound'],
        },
    },
    plugins: [],
};
