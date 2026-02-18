import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Claire Cruz",
  description: "A browser-inspired portfolio showcasing web development projects and skills.",
  keywords: ["developer", "portfolio", "web development", "browser", "frontend"],
  authors: [{ name: "Claire Cruz" }],
  openGraph: {
    title: "Claire Cruz",
    description: "A browser-inspired portfolio showcasing web development projects and skills.",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/clairecruz-logo.png" type="image/png" />
      </head>
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
