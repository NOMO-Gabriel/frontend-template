import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './utils/contexts/ThemeContext';
import { LocaleProvider } from './utils/contexts/LocaleContext';
;

export const metadata: Metadata = {
  title: 'docUP',
  description: "Un environnement immersif propice pour l'apprentisage d'un medecin",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {


  return (
      <html lang="en">
      <body  className={`antialiased `}>
      <LocaleProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </LocaleProvider>
      </body>
      </html>
  );
}