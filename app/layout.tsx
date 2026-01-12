import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MenuDock + ProjectPills",
  description: "Floating navigation dock with animated project pills and GSAP-powered hover previews",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
