import { ThemeProvider } from '@mui/system';
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import useLocalStorage from '../hooks/useLocalStorage'

interface IColorModeContext {
    toggleColorMode: () => void;
    mode: "dark" | "light";
}



export const ColorModeContext = createContext<IColorModeContext>({
    toggleColorMode: () => { },
    mode: "light",
})

export const ColorModeProvider: React.FC = ({ children }) => {
    const [localMode, setLocalMode] = useLocalStorage("themeMode", "light")
    const [mode, setMode] = useState<"light" | "dark">("light");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            mode,
        }), [mode]
    );

    useEffect(() => {
        setLocalMode(mode)
    }, [mode])


    const theme = useMemo(
        () => responsiveFontSizes(createTheme({
            palette: {
                mode,
            }
        })), [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export const useColorMode = () => useContext(ColorModeContext);