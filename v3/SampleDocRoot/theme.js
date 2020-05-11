
const theme = {
    overrides: {
        MuiSvgIcon: {
            root: {
                verticalAlign:'middle',
            },
        }
    },
    typography: {
        useNextVariants: true,
        fontSize: 12,
    },
    palette: {
        primary: {
            main:'#4a5361',
        },
        secondary: {
            main:'#b7a387',
        },

        error: {
            main:'#ff0000',
        },
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    def:{
        dahuLogo: "/images/themeImages/dahu-small-green.png",
        brandLogo: "/images/themeImages/opc-small-white.png",
        fullScreen: "/images/themeImages/CabinetOffice-full-screen-light.jpg",
        horizScreen: "/images/themeImages/CabinetOfficeH-Light.jpg",
        vertScreen: "/images/themeImages/CabinetOfficeV-Light.jpg",
    }
};
