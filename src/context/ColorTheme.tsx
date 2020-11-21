import React, { SetStateAction, useState, useContext, useEffect } from 'react';

export type ColorTheme = 'dark' | 'light';

export interface ColorThemeContextValue {
  colorTheme: ColorTheme | null;
  setColorTheme: React.Dispatch<SetStateAction<ColorTheme | null>>;
}

const ColorThemeContext = React.createContext<
  ColorThemeContextValue | undefined
>(undefined);

export const ColorThemeProvider: React.FunctionComponent = ({ children }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme | null>(null);

  const localStorageKey = 'theme';

  useEffect(() => {
    let theme;
    const windowTheme = (window as any).__theme;

    if (!windowTheme) {
      theme = 'dark';
    } else {
      theme = windowTheme;
    }

    setColorTheme(theme);

    (window as any).__onThemeChange = () => {
      setColorTheme((window as any).__theme);
    };
  }, []);

  useEffect(() => {
    if (colorTheme !== null) {
      window.localStorage.setItem(localStorageKey, colorTheme);

      document.body.className = '';
      document.body.className = colorTheme;
    }
  }, [colorTheme]);

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export function useColorTheme(): ColorThemeContextValue {
  const context = useContext(ColorThemeContext);

  if (context === undefined) {
    throw new Error('useColorTheme must be called inside a ColorThemeProvider');
  }

  return context;
}
