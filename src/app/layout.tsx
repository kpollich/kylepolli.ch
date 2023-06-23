import { Inter } from "next/font/google";

import Navigation from "@/components/navigation";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kyle Pollich | Full stack software engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />

        <main className="flex min-h-screen flex-col px-16">{children}</main>
      </body>
    </html>
  );
}
