# Feasy Landing Page

A modern, responsive marketing website for Feasy - the iOS app for business planning and forecasting made easy.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom branding
- **Responsive**: Fully responsive across all device sizes
- **Accessible**: WCAG AA compliant with proper semantic HTML
- **Animated**: Smooth animations using Framer Motion
- **SEO Optimized**: Complete meta tags and Open Graph setup
- **TypeScript**: Fully typed for better development experience

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier

## 🎨 Design System

### Colors
- **Primary**: `#6C39F9` - Main brand purple
- **Accent**: `#BFFD38` - Highlight green
- **Neutrals**: Gray scale for text and backgrounds

### Typography
- **Font Family**: SF Pro Rounded (with fallbacks)
- **Responsive scaling**: Mobile-first approach

### Components
- Reusable component library
- Consistent spacing and shadows
- Hover states and focus indicators

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Accordion.tsx   # FAQ accordion component
│   ├── AppStoreBadge.tsx # Official App Store badge
│   ├── Badge.tsx       # Small highlight badges
│   ├── Benefits.tsx    # Benefits strip section
│   ├── Button.tsx      # Primary button component
│   ├── Container.tsx   # Layout container
│   ├── CTABand.tsx     # Purple call-to-action band
│   ├── EmailCapture.tsx # Newsletter signup section
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── FeatureCard.tsx # Individual feature cards
│   ├── Features.tsx    # Features grid section
│   ├── FinalCTA.tsx    # Final call-to-action
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section with phone mockups
│   ├── Navbar.tsx      # Sticky navigation header
│   ├── NewsletterForm.tsx # Email subscription form
│   ├── Pricing.tsx     # Pricing plans section
│   ├── PricingCard.tsx # Individual pricing cards
│   ├── ScreenFrame.tsx # iPhone-style frame for mockups
│   ├── SectionHeader.tsx # Consistent section headers
│   └── TrustedBy.tsx   # Partner logos section
├── utils/              # Utility functions
│   └── createPlaceholder.ts # Placeholder image generator
├── App.tsx             # Main app component
├── index.css           # Global styles and Tailwind
└── main.tsx            # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd feasy-landing
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📱 Sections

The landing page includes the following sections:

1. **Navbar** - Sticky navigation with logo and menu
2. **Hero** - Main headline with animated iPhone mockups
3. **Trusted By** - Partner company logos
4. **Features** - 6-card grid showcasing app features
5. **CTA Band** - Purple call-to-action with phone mockup
6. **Pricing** - Two-tier pricing plans
7. **Email Capture** - Newsletter signup for launch updates
8. **Benefits** - 4-panel benefits strip
9. **FAQ** - Expandable frequently asked questions
10. **Final CTA** - Final conversion opportunity
11. **Footer** - Links, social icons, and legal

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm(640), md(768), lg(1024), xl(1280), 2xl(1440)
- Optimized for all screen sizes

### Animations
- Scroll-triggered animations
- Floating phone mockups
- Smooth hover states
- Staggered card animations

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader friendly

### Performance
- Optimized images and assets
- Tree-shaken dependencies
- Minimal bundle size
- Fast loading times

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```js
colors: {
  primary: '#6C39F9',    // Main brand color
  accent: '#BFFD38'      // Highlight color
}
```

### Typography
Font family is configured in Tailwind config with SF Pro Rounded and fallbacks.

### Content
All content is easily editable in the respective component files. Key text content is defined as constants at the top of components.

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration

## 📊 SEO & Meta Tags

The site includes comprehensive SEO optimization:
- Title and description meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data ready

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- Vercel (recommended for React apps)
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, contact: hello@feasy.pro

---

Built with ❤️ for Feasy - Business planning made easy.