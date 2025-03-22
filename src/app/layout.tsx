import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({
    weight: ['700'],
    subsets: ['latin'],
    variable: '--font-merriweather'
});

export const metadata: Metadata = {
    title: "AdaptaNote",
    description: "A web-based writing application specifically designed to assist individuals with dyslexia",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} ${merriweather.variable}`}>
                <Header />
                <main className="min-h-screen bg-background">
                    {children}
                </main>
            </body>
        </html>
    );
} 