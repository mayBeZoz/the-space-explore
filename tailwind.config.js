/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily : {
                "barlow-condensed" : "Barlow Condensed",
                "bellefair" : "bellefair"
            },
            colors : {
                "main-lightblue":"rgb(208 214 251)"
            }
        },
    },
    plugins: [],
}