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
            main:'#695944',
        },
        secondary: {
            main:'#485c68',
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
        dahuLogo: "images/themeImages/dahu-small-green.png",
	brandLogo: "images/themeImages/dahu-white-xsmall.png",
	largeBrandLogo:"images/themeImages/dahu-brand-large.png",
        fullScreen: "images/themeImages/full-screen-dahu-road.jpg",
        horizScreen: "images/themeImages/full-screen-dahu-road-light.jpg",
        vertScreen: "images/themeImages/full-screen-dahu-road-light.jpg",
    }
};
