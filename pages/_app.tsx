import { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'; // Import your ThemeProvider
import '../styles/index.css';
import React from 'react'; // Ensure React is imported

type ThemeWrapperProps = {
  children: React.ReactNode; // Define the type for children
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {children}
    </div>
  );
};

export default MyApp;
