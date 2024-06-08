import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Layout } from "@/components/SideBar";
import {Metadata} from "next";

// provider
import { QueryProvider } from "@/providers/QueryProvider";
import { NextAuthProvider } from "@/providers/NextAuthProvider";

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
            <QueryProvider>
                <html lang="en">
                <body className={inter.className}>
                <Layout>{children}</Layout>
                </body>
                </html>
            </QueryProvider>
        </NextAuthProvider>
    );
}