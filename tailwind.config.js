module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            keyframes: {
                slideUp: {
                    "0%": {
                        transform: "translateY(1000px)",
                        opaicty: "0",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
            },
            animation: {
                slideUp: "slideUp 600ms ease-in-out",
            },
        },
    }
}