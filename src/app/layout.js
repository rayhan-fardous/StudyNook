import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "./providers/NextThemeProvider";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
});

export const metadata = {
  title: "StudyNook",
  description: "Library Study Room Booking",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${josefinSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
