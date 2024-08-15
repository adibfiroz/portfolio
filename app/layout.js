import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adib Firoz",
  description: "adib firoz portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" sizes="32x32" href="/AF.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
