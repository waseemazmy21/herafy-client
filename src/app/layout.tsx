import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import Header from "@/components/header";
import { UserProvider } from "./contexts/user-context";
import Footer from "@/components/footer";
import Provider from "./contexts/query-client-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en" className="light min-h-screen">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Provider>
          <UserProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </UserProvider>
        </Provider>
      </body>
    </html>
  );
}
