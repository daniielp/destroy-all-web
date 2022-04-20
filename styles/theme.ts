import {createTheme, responsiveFontSizes} from "@mui/material/styles";

const theme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'light',
        primary: {
             main: "#00DC82",
             light: "#80EEC0",
        },
        secondary: {
            dark: "#012A35",
            main: "#003543",
            light: "#497A87",
        },
        // text: {
        //     primary: "#ffffff",
        //     secondary: "#92ADAD",
        // }
    }
}))

export default theme;