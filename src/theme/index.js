import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import typography from "./typography"
import _ from "lodash";

const baseConfig = {
    typography

}


const themes = [
    {
        darkMode: false,
        palette: {
            type: 'light',
            primary: {
                dark: "#7b2730",
                main: "#B03845",
                light: "#bf5f6a",
            },
            secondary: {
                dark: "#ab003c",
                main: "#f50057",
                light: "#f73378",
            },
            background: {
                default: colors.common.white,
                dark: '#f4f6f8',
                paper: colors.common.white,
            },
            text: {
                primary: colors.blueGrey[900],
                secondary: colors.blueGrey[600],
            },
        }
    },
    {
        darkMode: true,
        palette: {
            type: 'dark',
            primary: {
                dark: "#7b2730",
                main: "#B03845",
                light: "#bf5f6a",
            },
            secondary: {
                dark: "#ab003c",
                main: "#f50057",
                light: "#f73378",
            },
            background: {
                default: '#282C34',
                dark: '#1c2025',
                paper: '#282C34',
            },
            text: {
                primary: '#e6e5e8',
                secondary: '#adb0bb',
            },
        }
    },
]
export default function createTheme(settings = {}) {
    const themeConfig = themes.find(
        (theme) => theme.darkMode === settings.darkMode,
    );
    let theme = createMuiTheme(_.merge({}, baseConfig, themeConfig));

    return theme;
}

