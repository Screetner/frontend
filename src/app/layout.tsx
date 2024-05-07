import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { NextAuthProvider } from "@/app/providers/NextAuthProvider";
import { Layout } from "@/app/components/SideBar";
import { usePathname } from "next/navigation";
import {Metadata} from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Screetner",
    description: "Screetner is a simple URL shortener",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <NextAuthProvider>
            <html lang="en">
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
            </html>
        </NextAuthProvider>
    );
}