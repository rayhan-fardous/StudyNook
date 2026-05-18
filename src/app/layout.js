import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
});

export const metadata = {
  title: "StudyNook",
  description: "Library Study Room Booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefinSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
