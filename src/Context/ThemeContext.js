import { createContext } from "./createContext";

const themes = {
  currentTheme: "dark",
  light: {
    background: "#efefef",
    color: "#333",
  },
  dark: {
    background: "#333",
    color: "#efefef",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return { ...state, currentTheme: "dark" };
    case "light":
      return { ...state, currentTheme: "light" };
    default:
      return { ...state };
  }
};

const changeThemeTo = (dispatch) => (themeColor) =>
  dispatch({ type: themeColor });

export const { Context, Provider } = createContext(
  reducer,
  { changeThemeTo },
  themes
);
