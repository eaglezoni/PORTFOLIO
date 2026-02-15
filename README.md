# 🎮 Janzen Portfolio

An interactive portfolio website with a video game UI aesthetic. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Boot Sequence**: Engaging 2-second loading animation
- **Interactive Brand Cards**: Hover and click to explore different ventures
- **Detailed Modals**: View comprehensive information about each brand
- **Theme Toggle**: Switch between dark and light modes
- **Keyboard Controls**: Full keyboard navigation support
- **Easter Egg**: Type "JANZEN" to unlock a secret cheat code modal
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **Game UI Aesthetics**: Grid background, scanline effects, glowing elements, and smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed on your system

### Installation

1. Navigate to the project directory:
```bash
cd janzen-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:3000`

## 🎯 Usage

### Navigation
- **Hover**: Inspect brand cards with animated hover effects
- **Click**: Open detailed modal for each brand
- **ESC**: Close any open modal
- **Tab**: Navigate through interactive elements
- **Theme Toggle**: Click the sun/moon icon in the header

### Easter Egg
Type `J-A-N-Z-E-N` anywhere on the page to unlock a secret achievement modal!

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Custom CSS** - Grid backgrounds, scanlines, and glowing effects

## 📁 Project Structure

```
janzen-portfolio/
├── src/
│   ├── components/
│   │   ├── BootScreen.tsx      # Loading animation
│   │   ├── Header.tsx          # Top navigation bar
│   │   ├── BrandCard.tsx       # Individual brand cards
│   │   ├── BrandModal.tsx      # Brand detail modal
│   │   ├── PlayerProfile.tsx   # Janzen info sidebar
│   │   ├── Controls.tsx        # Controls legend
│   │   └── CheatCodeModal.tsx  # Easter egg modal
│   ├── hooks/
│   │   └── useKeyboardControls.ts  # Keyboard event handling
│   ├── types.ts                # Brand data types
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design Philosophy

This portfolio embraces a **video game UI aesthetic** with:

- **Orbitron** - Display font for headers and titles
- **Space Mono** - Monospace font for body text
- **Cyber color palette** - Cyan, purple, and pink accents
- **Grid background** - Subtle technical feeling
- **Scanline effect** - Retro CRT monitor vibe
- **Glass morphism** - Modern layered panels
- **Smooth animations** - Framer Motion for fluid interactions

## 🎯 Brands Featured

1. **Casa Malka** - Premium tequila brand
2. **Choco Smooth** - Wellness-focused chocolate
3. **Sunday Wash** - Elevated home care
4. **Helmsman Imports** - Curated international goods

## 📝 Customization

### Updating Brand Information

Edit `src/types.ts` to modify brand data:

```typescript
export const brands: Brand[] = [
  {
    id: 'your-brand',
    name: 'Your Brand',
    tagline: 'Your tagline',
    category: 'CATEGORY',
    description: 'Description...',
    role: ['Role 1', 'Role 2'],
    color: '#hexcolor',
    icon: 'iconKey'
  }
];
```

### Changing Colors

Modify CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0f;
  --accent-cyan: #00f0ff;
  --accent-purple: #8b5cf6;
  --accent-pink: #ff006e;
}
```

### Adding New Icons

Add SVG paths to the `iconMap` in `src/components/BrandCard.tsx`.

## 🏗️ Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Stacked layout, mobile profile section
- **Tablet**: 768px - 1024px - 2-column grid, partial controls
- **Desktop**: > 1024px - Full experience with sidebar and controls

## 🌟 Performance

- **Lazy loading** of components
- **Optimized animations** with CSS and Framer Motion
- **Tree-shaking** via Vite
- **Minified production build**

## 📄 License

This is a portfolio template. Feel free to customize and use for your own projects.

## 🤝 Credits

Designed and developed with a focus on creating a memorable, interactive experience that stands out from typical portfolio websites.

---

**Built with ❤️ and a touch of 🎮 game design magic**
