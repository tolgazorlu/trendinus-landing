# Trendinus Landing Page

A modern, responsive landing page for Trendinus - an email service platform for game developers. Built with React, TypeScript, Vite, and Tailwind CSS, featuring animated components and a sleek dark theme.

## Features

- **Modern React 19**: Built with the latest React features
- **TypeScript**: Full type safety and IntelliSense
- **Tailwind CSS 4**: Latest utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Magic UI Components**: Custom animated components including beams, particles, and aurora text
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** (for version control) - [Download here](https://git-scm.com/)

To check if you have Node.js installed:

```bash
node --version
npm --version
```

## Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd trendinus-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Development

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Building for Production

To create a production build:

```bash
npm run build
```

This command will:

1. Type-check your TypeScript code
2. Bundle and optimize your application
3. Generate static files in the `dist/` directory

The build artifacts will be stored in the `dist/` directory.

## Deployment

The `dist/` folder contains all the static files needed to deploy your application. You can deploy these files to any static hosting service.

### Popular Hosting Options

#### 1. **Vercel** (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npx vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

#### 2. **Netlify**

- Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
- Or use Netlify CLI:
  ```bash
  npm install -g netlify-cli
  netlify deploy --prod --dir=dist
  ```

#### 3. **GitHub Pages**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

#### 4. **AWS S3 + CloudFront**

1. Build your project: `npm run build`
2. Upload the `dist/` folder contents to an S3 bucket
3. Configure the bucket for static website hosting
4. Set up CloudFront distribution for global CDN

#### 5. **Digital Ocean App Platform**

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

#### 6. **Firebase Hosting**

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select dist as your public directory
firebase deploy
```

#### 7. **Surge.sh**

```bash
npm install -g surge
npm run build
cd dist
surge
```

### Environment Variables

If your application uses environment variables, create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_APP_TITLE=Trendinus
```

**Note**: Only variables prefixed with `VITE_` will be available in your Vite application.

## Project Structure

```
trendinus-landing/
    public/                 # Static assets
    src/
        components/        # React components
            magicui/      # Custom animated components
            ui/           # Reusable UI components
        lib/              # Utility functions
        assets/           # Images, icons, etc.
        App.tsx           # Main application component
        main.tsx          # Application entry point
        index.css         # Global styles
    dist/                 # Production build output
    package.json          # Project dependencies and scripts
    vite.config.ts        # Vite configuration
    tailwind.config.js    # Tailwind CSS configuration
    tsconfig.json         # TypeScript configuration
```

## Customization

### Styling

- The project uses Tailwind CSS 4 for styling
- Custom components are located in `src/components/`
- Global styles are in `src/index.css`

### Colors and Theme

- Primary colors are defined in Tailwind configuration
- The site uses a dark theme with blue and yellow accent colors
- Responsive breakpoints: mobile (`<768px`), tablet (`768px-1024px`), desktop (`e1024px`)

## Troubleshooting

### Common Issues

1. **Build fails with TypeScript errors**

   ```bash
   # Check for type errors
   npm run build
   # Fix any TypeScript errors shown
   ```

2. **Dependencies installation issues**

   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Port already in use**
   ```bash
   # Kill process using port 5173
   lsof -ti:5173 | xargs kill -9
   # Or use a different port
   npm run dev -- --port 3000
   ```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review the Vite documentation: https://vitejs.dev/
3. Check React documentation: https://react.dev/
4. Open an issue in the repository

---

**Happy coding!**
