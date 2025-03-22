import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DyslexAI Notebook",
    description: "A web-based writing application specifically designed to assist individuals with dyslexia",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <main className="min-h-screen bg-background">
                    {children}
                </main>
            </body>
        </html>
    );
} 