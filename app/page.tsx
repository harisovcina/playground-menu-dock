"use client"

import { MenuDock } from "@/components/MenuDock"

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-background relative">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover"
      />

      {/* MenuDock - Centered and expandable */}
      <MenuDock
        menuItems={[
          { href: "#about", label: "About" },
          { href: "#work", label: "Work" },
          { href: "#services", label: "Services" },
          { href: "#contact", label: "Contact" }
        ]}
      />

      {/* Main Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[clamp(3rem,8vw,8rem)] font-extralight tracking-tight text-white opacity-0 animate-fade-in">
          MenuDock
        </h1>
      </div>
    </main>
  )
}
