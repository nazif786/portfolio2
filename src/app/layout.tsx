import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sherzai",
  description:
    "It's a personal portfolio website that denotes my projects and services",
  icons: {
    icon: "/mylogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="">
            <Nav />
          </header>

          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
