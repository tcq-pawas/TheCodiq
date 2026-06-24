# TheCodiQ

A production-ready Next.js 15 project with App Router architecture, featuring a modern dark theme design inspired by Integrix.

## 🚀 Tech Stack

- **Next.js 15+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern React patterns
- **ESLint & Prettier** - Code quality and formatting

## ✨ Features

- **Modern Dark Theme** - Pure black background with dot pattern overlay
- **3D Animations** - Metallic chrome cube cluster with CSS animations
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Metadata on all pages
- **Reusable Components** - Clean architecture
- **TypeScript** - Full type safety
- **Glassmorphism Effects** - Modern UI design

## 📁 Project Structure

```
TheCodiQ/
├── public/
│   ├── images/
│   ├── icons/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   ├── services/
│   │   │   └── page.tsx      # Services page
│   │   ├── portfolio/
│   │   │   └── page.tsx      # Portfolio page
│   │   ├── blog/
│   │   │   └── page.tsx      # Blog page
│   │   ├── contact/
│   │   │   └── page.tsx      # Contact page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTA.tsx
│   │   └── common/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SectionTitle.tsx
│   │       └── Loader.tsx
│   ├── hooks/
│   │   ├── useScroll.ts
│   │   ├── useTheme.ts
│   │   └── useWindowSize.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── helper.ts
│   │   └── api.ts
│   ├── services/
│   │   ├── contact.service.ts
│   │   └── blog.service.ts
│   ├── types/
│   │   ├── common.ts
│   │   └── api.ts
│   └── data/
│       ├── services.ts
│       ├── portfolio.ts
│       └── testimonials.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🛠️ Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Design Features

- **Dark Theme** - Pure black (#0a0a0a) background
- **Dot Pattern Overlay** - Subtle grid pattern
- **3D Cube Cluster** - Animated metallic chrome cubes
- **Glassmorphism** - Frosted glass effects
- **Blue Accent Colors** - Primary color scheme
- **Smooth Animations** - CSS-based animations
- **Professional Typography** - Clean, readable fonts

## 📄 Pages

- **Home** - Hero, Services, About preview, Testimonials, CTA
- **About** - Company overview, Mission & Vision, Team, Why Choose Us
- **Services** - Web Development, Mobile Apps, AI Solutions, UI/UX Design, Digital Marketing
- **Portfolio** - Project grid with category filter
- **Blog** - Featured articles and blog listing
- **Contact** - Contact form, company information, map placeholder

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
```

### Tailwind CSS

Customize the theme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      background: "#0a0a0a",
      primary: "#3b82f6",
      // ... other colors
    },
    // ... other extensions
  },
}
```

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📝 Development Rules

1. Every page must have its own folder and `page.tsx` file
2. Header and Footer must be separate reusable components
3. Navigation must be reusable and imported globally
4. Page-specific styles must be stored in the styles directory
5. No inline CSS
6. No duplicate code
7. Use reusable components wherever possible
8. Use TypeScript interfaces for all props
9. Use absolute imports with `@/` aliases
10. Follow clean code and SOLID principles
11. Mobile-first responsive design
12. Add loading states and error handling
13. Add metadata for SEO on every page
14. Use Server Components wherever possible
15. Use Client Components only when necessary

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For any questions or support, please contact us at contact@thecodiq.com
