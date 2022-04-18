import { THEME_TO_DARK,THEME_TO_LIGHT} from "./themeTypes";


export const changeThemeToDark = () => {
  return { type: THEME_TO_DARK };
};

export const changeThemeToLight = () => {
  return { type: THEME_TO_LIGHT };
};
