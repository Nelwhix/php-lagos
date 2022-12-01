/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                primary: "#293f50"
            },
            fontFamily: {
                lato: ['Lato', "Open\\ Sans","Helvetica\\ Neue", "Helvetica", "Arial", "sans-serif"]
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
