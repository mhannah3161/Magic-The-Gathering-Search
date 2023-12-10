import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "./storge";
import _ from "lodash";

export const useTheme = () => {
    const themes = getFromLS("all-themes");
    const [theme, setTheme] = useState(themes.devoid);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLS("theme", mode)
        setTheme(mode);
    };

    const getFonts = () => {
        const allFonts = _.values(_.mapValues(themes.devoid, 'font'));
        return allFonts;
    }

    useEffect(() => {
        const localTheme = getFromLS("theme");
        localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode, getFonts }
}