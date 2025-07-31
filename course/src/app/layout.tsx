import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Menu from "./menu/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "test site",
  description: "this is my page description",
};

export default function RootLayout({
  children,
  info,
}: Readonly<{
  children: React.ReactNode;
  info: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        <header>
          <nav>
            <Menu />
          </nav>
        </header>
        <main>{children}</main>
        <aside>{info}</aside>
        <Footer />
      </body>
    </html>
  );
}
