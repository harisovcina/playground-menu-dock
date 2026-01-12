# MenuDock

A modern, responsive navigation dock component built with Next.js, React, GSAP, and Tailwind CSS. Features smooth animations, backdrop blur effects, and adaptive layouts for desktop and mobile.

![MenuDock Demo](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop)

## ✨ Features

- 🎨 **Smooth Animations** - GSAP-powered dock expansion with elegant easing
- 📱 **Fully Responsive** - Desktop shows inline navigation, mobile uses overlay
- 🌫️ **Backdrop Blur** - Beautiful blur effects on mobile overlay
- ⚡ **Performance** - Optimized with React hooks and minimal re-renders
- 🎯 **Centered Logo** - Always perfectly centered regardless of menu items
- 🎭 **Customizable** - Easy to configure menu items and styling
- ♿ **Accessible** - Semantic HTML with proper ARIA attributes

## 🎬 Demo

**Desktop Behavior (≥768px):**
- Click hamburger menu to expand dock horizontally
- Navigation items appear inside the dock
- Content below remains visible (no overlay)
- Logo stays perfectly centered

**Mobile Behavior (<768px):**
- Click hamburger to show full-screen navigation overlay
- Backdrop blur effect
- Vertical menu layout with numbered items
- Dock shows only: hamburger, logo, status dot

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/menu-dock.git
cd menu-dock

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📖 Usage

Import and use the `MenuDock` component:

```tsx
import { MenuDock } from "@/components/MenuDock"

export default function App() {
  return (
    <main>
      <MenuDock
        menuItems={[
          { href: "#about", label: "About" },
          { href: "#work", label: "Work" },
          { href: "#services", label: "Services" },
          { href: "#contact", label: "Contact" }
        ]}
      />

      {/* Your content */}
    </main>
  )
}
```

## 🎛️ API Reference

### MenuDock Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `MenuItem[]` | `[...]` | Array of navigation items |

### MenuItem Interface

```typescript
interface MenuItem {
  href: string   // Navigation link URL
  label: string  // Display text
}
```

## 🎨 Customization

### Dock Styling

The component uses Tailwind CSS. Key customization points in `MenuDock.tsx`:

```tsx
// Background and blur
className="bg-white/10 backdrop-blur-md border border-white/20"

// Navigation items
className="text-sm font-mono uppercase tracking-wider text-white/80"

// Status indicator
className="bg-emerald-400 animate-pulse"
```

### Animation Settings

Adjust GSAP animation in `MenuDock.tsx`:

```tsx
gsap.to(dockRef.current, {
  width: "85vw",      // Expanded width
  maxWidth: 900,      // Max width constraint
  duration: 0.6,      // Animation duration (seconds)
  ease: "power3.out", // Easing function
})
```

### Color Scheme

Modify colors by changing these Tailwind classes:

- **Dock background**: `bg-white/10`
- **Text color**: `text-white`
- **Text hover**: `hover:text-white`
- **Status dot**: `bg-emerald-400`
- **Mobile backdrop**: `bg-black/80`

### Responsive Breakpoint

Mobile/desktop switch occurs at `768px` (Tailwind's `md:` breakpoint):

```tsx
className="md:hidden"        // Mobile only
className="hidden md:block"  // Desktop only
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles & animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Demo page
├── components/
│   └── MenuDock.tsx      # MenuDock component
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── tailwind.config.ts    # Tailwind configuration
```

## 🔧 Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [GSAP 3](https://greensock.com/gsap/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide React](https://lucide.dev/) - Icon library

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

> **Note:** Backdrop blur requires browser support for `backdrop-filter` CSS property. [Check compatibility](https://caniuse.com/css-backdrop-filter).

## 💡 Tips

### Adding More Menu Items

Simply add more items to the `menuItems` array:

```tsx
<MenuDock
  menuItems={[
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" }
  ]}
/>
```

The component automatically distributes items evenly on desktop (left and right of logo).

### External Images

To use external images (like from Unsplash), add the domain to `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}
```

### Changing Logo

Replace the logo text in `MenuDock.tsx`:

```tsx
<Link href="/" className="absolute left-1/2 -translate-x-1/2 text-sm font-mono tracking-widest text-white">
  YOUR LOGO
</Link>
```

Or use an image:

```tsx
<Link href="/" className="absolute left-1/2 -translate-x-1/2">
  <img src="/logo.svg" alt="Logo" className="h-6" />
</Link>
```

## 🐛 Troubleshooting

### Images not displaying
- Check image paths are correct
- For external images, ensure domain is configured in `next.config.ts`

### Animations not smooth
- Ensure GSAP is installed: `npm install gsap @gsap/react`
- Check browser supports `backdrop-filter` CSS property

### TypeScript errors
- Run `npm install` to install all dependencies
- Check `tsconfig.json` configuration

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Background image from [Unsplash](https://unsplash.com/)
- Built with [Next.js](https://nextjs.org/)
- Animations powered by [GSAP](https://greensock.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ by [Your Name](https://github.com/yourusername)**

**Developed with [Claude Code](https://claude.com/claude-code)**
