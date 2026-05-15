# 🦷 LuxeDental Clinic

A modern, premium dental clinic website built with React, Vite, and Tailwind CSS. LuxeDental offers a smooth, highly responsive, and aesthetically pleasing user experience with animations and an intuitive layout.

## ✨ Features

- **Modern UI/UX** - Clean, professional, and trustworthy design using Tailwind CSS
- **Smooth Animations** - Scroll and entrance animations powered by Framer Motion
- **Responsive Design** - Fully mobile-friendly layout that works perfectly on all devices
- **Fast Performance** - Built with Vite for instant server start and lightning-fast HMR
- **Multi-Page Routing** - Seamless navigation using React Router DOM
- **Dedicated Pages**
  - 🏠 Home - Hero section with services preview
  - ℹ️ About - Clinic information and team
  - 🔧 Services - Complete service listing with detail pages
  - 🖼️ Smile Gallery - Before and after showcase
  - ⭐ Testimonials - Patient reviews and experiences
  - 🚨 Emergency Care - Quick access to emergency services
  - 💬 Contact - Multiple contact channels
  - ❓ FAQ - Common questions and answers
  - 📅 Appointment Booking - Easy appointment scheduling
- **Quick Contact** - Floating WhatsApp button for instant communication
- **Dental Anxiety Info** - Resources and support for anxious patients

## 💻 Tech Stack

| Technology                                                | Version | Purpose      |
| --------------------------------------------------------- | ------- | ------------ |
| [React](https://react.dev/)                               | 19.2.6  | UI Framework |
| [Vite](https://vitejs.dev/)                               | 8.0.12  | Build Tool   |
| [TypeScript](https://www.typescriptlang.org/)             | ~6.0.2  | Type Safety  |
| [Tailwind CSS](https://tailwindcss.com/)                  | 3.4.19  | Styling      |
| [React Router DOM](https://reactrouter.com/)              | 7.15.0  | Routing      |
| [Framer Motion](https://www.framer.com/motion/)           | 12.38.0 | Animations   |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.6.0   | Icon Library |
| [ESLint](https://eslint.org/)                             | 10.3.0  | Code Linting |

## 📁 Project Structure

```
dental-clinic/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── Footer.tsx              # Footer component
│   │   ├── FloatingWhatsApp.tsx    # WhatsApp contact widget
│   │   ├── ScrollToTop.tsx         # Scroll to top button
│   │   └── sections/               # Homepage sections
│   │       ├── HeroSection.tsx
│   │       ├── ServicesPreview.tsx
│   │       ├── AboutClinic.tsx
│   │       ├── WhyChooseUs.tsx
│   │       ├── Testimonials.tsx
│   │       ├── SmileGalleryPreview.tsx
│   │       ├── FAQPreview.tsx
│   │       ├── DentalAnxiety.tsx
│   │       └── AppointmentCTA.tsx
│   ├── pages/
│   │   ├── Home.tsx                # Homepage
│   │   ├── About.tsx               # About page
│   │   ├── Services.tsx            # Services listing
│   │   ├── ServiceDetails.tsx      # Individual service details
│   │   ├── SmileGallery.tsx        # Gallery showcase
│   │   ├── Testimonials.tsx        # Patient testimonials
│   │   ├── FAQ.tsx                 # FAQ page
│   │   ├── BookAppointment.tsx     # Appointment booking
│   │   ├── Contact.tsx             # Contact information
│   │   └── Emergency.tsx           # Emergency services
│   ├── assets/                     # Images and static assets
│   ├── App.tsx                     # Main App component
│   ├── main.tsx                    # Application entry point
│   ├── App.css                     # App styles
│   └── index.css                   # Global styles
├── public/                         # Static public assets
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Project dependencies

```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/dental-clinic.git
   cd dental-clinic
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command           | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start development server with hot module replacement           |
| `npm run build`   | Build for production (compile TypeScript and bundle with Vite) |
| `npm run lint`    | Run ESLint to check code quality                               |
| `npm run preview` | Preview the production build locally                           |

## 🛠️ Development

### Code Quality

To maintain code quality, run ESLint:

```bash
npm run lint
```

### Building for Production

Create a production-ready build:

```bash
npm run build
```

This generates a `dist` folder with all minified and optimized files.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

This project can be easily deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite configuration
5. Click **Deploy**

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages

1. Add to `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: "/dental-clinic/",
     // ... rest of config
   });
   ```
2. Run: `npm run build`
3. Push `dist` folder to `gh-pages` branch

### AWS Amplify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 🎨 Customization

### Update Clinic Information

- **Contact Details:** `src/pages/Contact.tsx`
- **Navigation Links:** `src/components/Navbar.tsx`
- **Footer Info:** `src/components/Footer.tsx`
- **WhatsApp Number:** `src/components/FloatingWhatsApp.tsx`

### Customize Styling

- **Colors & Theme:** `tailwind.config.js`
- **Global Styles:** `src/index.css`
- **Component Styles:** Component CSS files in `src/`

### Add Your Assets

Replace placeholder images in `src/assets/` with your clinic's photos:

- Service images
- Team photos
- Before & after gallery
- Clinic interior/exterior photos

## 🔧 Configuration Files

| File                 | Purpose                            |
| -------------------- | ---------------------------------- |
| `vite.config.ts`     | Vite build configuration           |
| `tailwind.config.js` | Tailwind CSS customization         |
| `tsconfig.json`      | TypeScript compiler options        |
| `tsconfig.app.json`  | App-specific TypeScript config     |
| `tsconfig.node.json` | Node environment TypeScript config |
| `eslint.config.js`   | ESLint rules and configuration     |
| `postcss.config.js`  | PostCSS plugins for Tailwind       |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Make your changes and commit: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 📞 Support & Contact

For support or inquiries:

- 📧 Email: your-email@example.com
- 💬 WhatsApp: Your clinic's WhatsApp number
- 🌐 Website: Your clinic website
- 📍 Address: Your clinic address

## 🎯 Roadmap

- [ ] Online payment integration
- [ ] Email notifications for appointments
- [ ] Patient login portal
- [ ] Dental records management
- [ ] Multi-language support
- [ ] Mobile app

## 📝 Notes

- Make sure to update all placeholder contact information before deployment
- Replace sample images with your clinic's actual photos
- Customize colors and branding to match your clinic's identity
- Test thoroughly on mobile devices before going live

---

**Built with ❤️ for dental clinics**

**Last Updated:** May 2026
