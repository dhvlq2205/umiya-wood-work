import { extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        50: "#e6edf5",
        100: "#c2d3e6",
        200: "#9cb8d6",
        300: "#769ec7",
        400: "#5083b7",
        500: "#1B365D", // Royal Navy Blue (Primary)
        600: "#162e50",
        700: "#112642",
        800: "#0c1d34",
        900: "#071526",
    },
    secondary: {
        500: "#D4AF37", // Royal Gold Accent
    },
};

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const btn = {
    baseStyle: {
        borderRadius: "xl",
        fontWeight: "semibold",
    },
    variants: {
        solid: (props) => ({
            bg: props.colorMode === "light" ? "brand.500" : "secondary.500",
            color: "white",
            _hover: {
                opacity: 0.9,
            },
        }),
        gold: {
            bg: "secondary.500",
            color: "black",
            _hover: {
                bg: "secondary.500",
                opacity: 0.9,
            },
        },
    },
    defaultProps: {
        variant: "solid",
    },
}

const iconBtn = {
    variants: {
        icon: (props) => ({
            height: "36px",
            width: "36px",
            borderRadius: "8px",
            bg: "transparent",
            color: props.colorMode === "light" ? "black" : "white",
            _hover: {
                bg:
                    props.colorMode === "light"
                        ? "gray.100"
                        : "whiteAlpha.200",
            },
        }),
    },
}

const theme = extendTheme({
    config,
    colors,
    components: {
        Button: btn,
        IconButton: iconBtn,
    },
    styles: {
        global: (props) => ({
            body: {
                bg: props.colorMode === "light" ? "#f8f9fb" : "#0f172a",
            },
        }),
    },
});

export default theme;