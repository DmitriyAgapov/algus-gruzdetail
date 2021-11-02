module.exports = {
    purge: [

    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            "Segoe": ["Segoe UI", "sans-serif"],
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        colors: {
            transparent: "transparent",
            black: "#000",
            button: "#fff",
            teaserHover: "#FBFBFB",
            white: "#fff",
            "links": "#3182CE",
            "label-discount": "#3B37FF",
            "label-cart": "#EF1616",
            "label-discount-text": "#ffffff",
            "label-availible": "#48BB78",
            "color-1-m-primary" : "#E53E3E",
            "color-1-m-secondary": "#FF6868",
            "color-1-n": "#262626",
            "color-1-n-p": "#262626",
            "color-1-n-m": "#8C8C8C",
            "color-1-n-mm": "#D9D9D9",
            "color-1-n-mm-input": "#F0F0F0",
            "color-1-bg": "#fff",
            "color-2-n-mm": "#E5E5E5",
            "color-2-n-m": "#E5E5E5",
            "color-2-n": "#E5E5E5",
            "color-2-n-p": "#FFFFFF",
            "color-2-bg": "#353535",
            "color-3-n-p": "#262626",
            "color-3-n": "#262626",
            "color-3-bg": "#fff",
        },
        container: {
            center: true,            
        },
        extend: {
            padding: {
                inputButton: "9px 1rem 11px",
                section: "3rem",
            },
            margin: {
                block: "3rem 0",
                section: "3rem",
            },
            dropShadow: ["hover", "focus"],
        },
        variants: {
            container: [],
        },
        lineHeight: {
            base: 1.428,
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
    ],
};
