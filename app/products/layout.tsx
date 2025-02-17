import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/sections/header";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sections/sidebar";
import { Search } from "@/components/header/search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NepMart- Your Online Store",
  description: "NepMart is an online store for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col-reverse lg:flex-row m-4 mt-8 gap-y-8">
      <div className="min-w-[300] w-full lg:w-1/6">
        <Sidebar />
      </div>
      {children}
      <div className="block lg:hidden px-4"><Search/></div>
    </div>
  );
}
