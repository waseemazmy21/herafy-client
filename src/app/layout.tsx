import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import Header from "@/components/header";

const rubik = Rubik({ subsets: ["arabic"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Herafy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="light">
      <body
        className={cn(
          "flex h-full min-h-screen flex-col bg-background font-sans antialiased",
          rubik.variable,
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
