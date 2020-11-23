import {
  createContext,
  FunctionComponent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

export type ColorTheme = 'dark' | 'light';

export interface ColorThemeContextValue {
  colorTheme: ColorTheme | null;
  setColorTheme: React.Dispatch<SetStateAction<ColorTheme | null>>;
}

const ColorThemeContext = createContext<ColorThemeContextValue | undefined>(
  undefined
);

export const ColorThemeProvider: FunctionComponent = ({ children }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme | null>(null);

  const localStorageKey = 'theme';

  useEffect(() => {
    const fromLocalStorage = window.localStorage.getItem(
      localStorageKey
    ) as ColorTheme | null;

    if (fromLocalStorage) {
      setColorTheme(fromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (colorTheme !== null) {
      window.localStorage.setItem(localStorageKey, colorTheme);

      document.documentElement.className = '';
      document.documentElement.className = colorTheme;
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
