import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Library Management App",
  description:
    "Tiffany's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-100">
          <nav className="flex justify-center w-100 ">
            <Link
              className="m-1 text-red-500 hover:text-blue-700"
              href="/"
            >
              Home
            </Link>
            <Link
              className="m-1 text-red-500 hover:text-blue-700"
              href="/pages/management"
            >
              Manage Library
            </Link>
            <Link
              className="m-1 text-red-500 hover:text-blue-700"
              href="/pages/about"
            >
              About
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center">&copy; Codex January Cohort</footer>
      </body>
    </html>
  );
}