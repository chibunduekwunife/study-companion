import type {Metadata} from "next";
import "./globals.css";
import {Toaster} from "sonner";
import {ThemeProvider} from "next-themes";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://study-sage"),
    title: "Study Sage",
    description: "Generate Note Summaries and Study Questions with Study Sage",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" enableSystem forcedTheme="dark">
                    <Toaster position="top-center" richColors />
                    <Navbar/>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
