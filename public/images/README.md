# Images Folder Structure

This folder contains all images used in the portfolio, organized by category.

## 📁 Folder Structure

```
images/
├── hero/                    # Hero/background images
│   └── desktop-wallpaper.jpg
├── profile/                 # Profile and branding
│   ├── claire.jpg
│   └── clairecruz-logo.png
├── projects/                # Project screenshots
│   ├── davids-salon/       # David's Salon project images
│   ├── copit/              # COPit project images
│   ├── mag-grantees/       # Mag-Grantees project images
│   └── svms/               # SVMS project images
├── playground/              # Fun designs & experiments
├── setup/                   # Current setup/gear
│   └── current-likes/
│       ├── comfortfood.png
│       ├── kdrama.png
│       ├── mouse.png
│       └── song.png
├── shop/                    # Product/shop images
└── tool-logos/              # Tool and software logos
    ├── clickup.png
    ├── figma.png
    ├── framer.png
    ├── googlefonts.png
    ├── maya.png
    ├── phosphor.png
    ├── photoshop.png
    ├── shadergradient.png
    ├── ultima.png
    ├── unsplash.png
    └── vscode.png
```

## 📝 Usage Guidelines

### Adding Project Images
1. Create a folder in `projects/` with the project ID (e.g., `davids-salon`)
2. Add screenshots with descriptive names (e.g., `dashboard.png`, `mobile-view.png`)
3. Recommended size: 1200x800px or 16:9 aspect ratio
4. Format: PNG or JPG, optimized for web

### Adding Shop/Product Images
1. Place product images in `shop/` folder
2. Use consistent naming: `product-name.png`
3. Recommended size: 600x600px (square) or 800x600px
4. Format: PNG with transparent background preferred

### Adding Playground Images
1. Place experimental/fun designs in `playground/` folder
2. Use descriptive names: `design-name.png`
3. Any size/format works - this is your creative space!
4. Format: PNG or JPG

### Adding Tool Logos
1. Place logo in `tool-logos/` folder
2. Use lowercase, hyphenated names (e.g., `visual-studio-code.png`)
3. Recommended size: 256x256px (square)
4. Format: PNG with transparent background

## 🎨 Image Optimization

Before adding images:
- Compress images using tools like TinyPNG or ImageOptim
- Use WebP format when possible for better performance
- Keep file sizes under 500KB for optimal loading

## 🔗 Path References

In code, reference images using:
```tsx
// Profile images
<img src="/images/profile/claire.jpg" alt="Claire Cruz" />

// Project images
<img src="/images/projects/davids-salon/dashboard.png" alt="Dashboard" />

// Tool logos
<img src="/images/tool-logos/figma.png" alt="Figma" />
```
