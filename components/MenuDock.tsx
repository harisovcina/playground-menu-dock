"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

/**
 * MenuItem interface
 */
interface MenuItem {
  href: string
  label: string
}

/**
 * MenuDock Props
 */
interface MenuDockProps {
  menuItems?: MenuItem[]
}

/**
 * MenuDock Component
 *
 * A responsive navigation dock that expands to show menu items.
 * - Desktop: Items appear inside the dock when expanded
 * - Mobile: Items appear in a full-screen overlay
 */
export function MenuDock({ menuItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" }
] }: MenuDockProps) {
  const dockRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Split menu items evenly: left and right of center logo
  const midPoint = Math.ceil(menuItems.length / 2)
  const leftItems = menuItems.slice(0, midPoint)
  const rightItems = menuItems.slice(midPoint)

  // GSAP animation: Expand/collapse dock horizontally
  useGSAP(() => {
    if (!dockRef.current) return

    if (isMenuOpen) {
      // Expand the dock
      gsap.to(dockRef.current, {
        width: "85vw",
        maxWidth: 900,
        duration: 0.6,
        ease: "power3.out",
      })
    } else {
      // Collapse to original size
      gsap.to(dockRef.current, {
        width: "auto",
        duration: 0.6,
        ease: "power3.out",
      })
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Mobile Backdrop: Blur effect behind mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/80"
          style={{ backdropFilter: 'blur(24px)' }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Dock Container: Centered at top */}
      <div className="fixed top-8 left-0 right-0 flex justify-center z-50">
        <div
          ref={dockRef}
          className="relative flex items-center gap-24 justify-between px-2 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
        >
          {/* Left Section: Hamburger + Menu Items */}
          <div className="flex items-center gap-8 flex-1">
            {/* Hamburger/Close Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-4 h-4 flex flex-col items-center justify-center gap-1">
                {/* Animated hamburger icon */}
                <span className={cn(
                  "w-4 h-[2px] bg-white rounded-full transition-all duration-300",
                  isMenuOpen && "rotate-45 translate-y-[6px]"
                )} />
                <span className={cn(
                  "w-4 h-[2px] bg-white rounded-full transition-all duration-300",
                  isMenuOpen && "opacity-0"
                )} />
                <span className={cn(
                  "w-4 h-[2px] bg-white rounded-full transition-all duration-300",
                  isMenuOpen && "-rotate-45 -translate-y-[6px]"
                )} />
              </div>
            </button>

            {/* Left Menu Items (Desktop only) */}
            {isMenuOpen && leftItems.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="hidden md:block text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white transition-colors whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Logo: Always centered using absolute positioning */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-sm font-mono tracking-widest text-white"
          >
            DEMO
          </Link>

          {/* Right Section: Menu Items + Status Dot */}
          <div className="flex items-center gap-8 flex-1 justify-end">
            {/* Right Menu Items (Desktop only) */}
            {isMenuOpen && rightItems.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="hidden md:block text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white transition-colors whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* Status Indicator Dot */}
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay: Full-screen vertical menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 45 }}
        >
          <nav
            className="flex flex-col items-center gap-8 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map(({ href, label }, index) => (
              <Link
                key={label}
                href={href}
                className="group relative text-2xl font-light uppercase tracking-widest text-white hover:tracking-[0.5em] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Index number */}
                <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs text-white/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
