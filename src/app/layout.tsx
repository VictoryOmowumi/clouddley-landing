import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "CloudDley",
  description: "CloudDley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sf-pro-display antialiased bg-background flex flex-col min-h-screen">
        <Header />
        <main className="w-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
