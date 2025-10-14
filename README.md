# Clouddley Landing Page

A modern, responsive landing page for Clouddley AI - built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme
- **Responsive**: Fully responsive design for all device sizes
- **Animations**: Smooth animations and transitions using Framer Motion
- **Interactive Components**: Hero carousel, use cases showcase, and interactive elements
- **Performance Optimized**: Built with Next.js for optimal performance
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd clouddley-landing
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory (if needed for future environment variables):

```bash
# .env.local
# Add any environment variables here
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Build and Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm start
# or
yarn start
```

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment:
   - Link to existing project or create new
   - Configure build settings (auto-detected for Next.js)
   - Deploy

### Deploy to Other Platforms

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

#### AWS Amplify
1. Connect your repository to AWS Amplify
2. Set build settings:
   - Build command: `npm run build`
   - Base directory: `/`
   - Publish directory: `.next`

#### Docker Deployment
Create a `Dockerfile` in the root directory:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

## 📁 Project Structure

```
clouddley-landing/
├── public/
│   ├── assets/          # Images, icons, and static assets
│   └── fonts/           # Custom fonts
├── src/
│   └── app/
│       ├── components/  # React components
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── HeroCarousel.tsx
│       │   ├── HowItWorks.tsx
│       │   ├── FeaturesHighlight.tsx
│       │   ├── Gguf.tsx
│       │   ├── UseCases.tsx
│       │   └── Footer.tsx
│       ├── globals.css  # Global styles
│       ├── layout.tsx   # Root layout
│       └── page.tsx     # Home page
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Styling
- **Global Styles**: Modify `src/app/globals.css` for global styles
- **Tailwind Config**: Update `tailwind.config.js` for custom theme
- **Component Styles**: Each component uses Tailwind classes for styling

### Content
- **Hero Section**: Update content in `src/app/components/Hero.tsx`
- **Features**: Modify feature data in `src/app/components/FeaturesHighlight.tsx`
- **Use Cases**: Update use case data in `src/app/components/UseCases.tsx`

### Animations
- **Framer Motion**: All animations are handled by Framer Motion
- **Custom Animations**: Add new animations in component files

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors

# Type checking
npm run type-check   # Run TypeScript compiler
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Next.js Optimization**: Automatic code splitting and optimization
- **Image Optimization**: Next.js Image component for optimized images
- **Lazy Loading**: Components load as needed
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**:
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **TypeScript Errors**:
   ```bash
   # Check TypeScript configuration
   npm run type-check
   ```

3. **Dependency Issues**:
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: help@clouddley.com
- Documentation: [Your documentation URL]

---

Built with ❤️ by the Clouddley team