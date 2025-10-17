import type React from "react"
import {GeistSans} from "geist/font/sans"
import {GeistMono} from "geist/font/mono"
import {Suspense} from "react"
import "./globals.css"
import {
    Rubik as V0_Font_Rubik,
    IBM_Plex_Mono as V0_Font_IBM_Plex_Mono,
    IBM_Plex_Serif as V0_Font_IBM_Plex_Serif,
} from "next/font/google"
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {Metadata} from "next";

const _rubik = V0_Font_Rubik({subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"]})
const _ibmPlexMono = V0_Font_IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
})
const _ibmPlexSerif = V0_Font_IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
    title: "Joao Ferreira | Developer Portfolio",
    description: "A developer portfolio with a Docker-inspired design.",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navbar/>
        <Suspense fallback={null}>
            {children}
        </Suspense>
        <Footer/>
        </body>
        </html>
    )
}
