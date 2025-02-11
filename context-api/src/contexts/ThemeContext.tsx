import React, { createContext, useContext, useState } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeColors {
  backgroundColor: string;
  textColor: string;
  primaryButtonColor: string;
  secondaryColor: string;
  cardBackground: string;
}

interface ThemeContextType {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const lightTheme: ThemeColors = {
  backgroundColor: '#FFFFFF',
  textColor: '#1A1A1A',
  primaryButtonColor: '#007AFF',
  secondaryColor: '#E5E5EA',
  cardBackground: '#F2F2F7',
};

const darkTheme: ThemeColors = {
  backgroundColor: '#1A1A1A',
  textColor: '#FFFFFF',
  primaryButtonColor: '#000000',
  secondaryColor: '#2C2C2E',
  cardBackground: '#2C2C2E',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(previousTheme => previousTheme === 'light' ? 'dark' : 'light');
  };

  const colors = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
