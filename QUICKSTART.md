# 🚀 JANZEN PORTFOLIO - QUICK START GUIDE

## Installation & Running

1. **Open Terminal/Command Prompt** in the `janzen-portfolio` folder

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**: Navigate to `http://localhost:3000`

## What You Get

✅ **Complete React + TypeScript + Vite Project**
✅ **Video Game UI Aesthetic**
✅ **4 Pre-configured Brand Cards** (Casa Malka, Choco Smooth, Sunday Wash, Helmsman Imports)
✅ **Boot Screen Animation**
✅ **Interactive Modals**
✅ **Dark/Light Theme Toggle**
✅ **Keyboard Controls** (ESC to close, Tab navigation)
✅ **Easter Egg** (Type "JANZEN" to unlock)
✅ **Fully Responsive** (Mobile, Tablet, Desktop)
✅ **Production Ready**

## Key Features

### 🎮 Game-Like Interactions
- Hover effects with glowing borders
- Smooth animations via Framer Motion
- Scanline effect overlay
- Grid background pattern
- Glass morphism panels

### ⌨️ Keyboard Support
- **ESC** - Close modal
- **TAB** - Navigate elements
- Type **J-A-N-Z-E-N** - Secret achievement

### 📱 Responsive Design
- Mobile: Stacked cards + bottom profile
- Desktop: 2x2 grid + sidebar profile + controls legend

### 🎨 Theme Switching
- Click sun/moon icon in header
- Toggles between dark cyber and light modes
- Smooth color transitions

## Customization Quick Tips

### Change Brand Data
Edit `src/types.ts` - modify names, descriptions, categories

### Change Colors
Edit `src/index.css` - CSS variables at the top

### Change Fonts
Edit `tailwind.config.js` - fontFamily section (currently using Orbitron + Space Mono from Google Fonts)

### Add Contact Email
Search for `contact@placeholder.com` and replace with your email

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder - upload to any static hosting service!

## Tech Stack

- React 18.2
- TypeScript
- Vite (super fast!)
- Tailwind CSS
- Framer Motion
- Google Fonts (Orbitron + Space Mono)

## Project Structure

```
janzen-portfolio/
├── src/
│   ├── components/     # All UI components
│   ├── hooks/          # Custom React hooks
│   ├── types.ts        # Brand data (EDIT THIS!)
│   ├── App.tsx         # Main component
│   └── index.css       # Global styles
├── index.html          # Entry HTML
├── package.json        # Dependencies
└── README.md          # Full documentation
```

## Troubleshooting

**Port 3000 already in use?**
- Edit `vite.config.ts` and change `port: 3000` to another number

**Dependencies not installing?**
- Make sure Node.js 18+ is installed
- Try `npm cache clean --force` then `npm install` again

**Fonts not loading?**
- Check internet connection (Google Fonts loaded from CDN)
- Or download fonts locally and update paths

## Next Steps

1. ✅ Run the project
2. 📝 Update brand information in `src/types.ts`
3. 🎨 Customize colors/styles to match your vibe
4. 📧 Add your real contact email
5. 🚀 Build and deploy!

---

**Need Help?** Check the full README.md for detailed documentation.

**Want to add more brands?** Just add more objects to the `brands` array in `src/types.ts`!
