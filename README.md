# Ncwala Ceremony Website

A beautiful, culturally-focused React website celebrating the Ncwala Ceremony—the First Fruits Festival of the Ngoni people in Eastern Province, Zambia.

## 🌟 Features

- **13 Beautiful Pages** showcasing the Ncwala Ceremony, Ngoni culture, history, and travel information
- **Mobile-First Responsive Design** perfect on all devices
- **Multi-Language Support** with 10 languages including English, French, Spanish, Arabic, and more
- **Rich Cultural Content** featuring history, traditions, ceremonies, and arts
- **Travel Integration** with accommodation booking, transport guides, and travel information
- **News & Blog System** powered by Supabase for dynamic content
- **Photo Gallery** with modal image viewing
- **E-Commerce Shop** for authentic Ngoni crafts and attire
- **SEO Optimized** with meta tags, JSON-LD schemas, and sitemaps
- **Real-Time Countdown** to the next Ncwala Ceremony
- **Newsletter Signup** with email integration
- **Dark Mode Compatible** color scheme (deep red, black, gold)

## 🎨 Design

- **Colors**: Deep Red (#8B1A1A), Black (#0A0A0A), Gold (#A57B0A), White (#FAFAFA)
- **Fonts**: Cinzel Decorative (hero), Cinzel (headings), EB Garamond (body), Raleway (UI)
- **Smooth Animations**: Parallax effects, fade-ins, zoom animations
- **Splash Screen**: Animated logo with intro reveal

## 📋 Pages

1. **Home** - Countdown timer, hero section, ceremony overview, FAQ
2. **History** - Ngoni people history and cultural heritage
3. **Ngoni People** - Culture, language, royal traditions, contemporary life
4. **Ceremony** - Complete ceremony guide with timeline and etiquette
5. **Travel** - Travel tips to Chipata and Eastern Province
6. **Accommodation** - Hotels, lodges, guesthouses with booking forms
7. **Transport** - Flights, buses, car hire, local transport options
8. **Shop** - Ngoni attire, crafts, souvenirs with product cards
9. **News** - Article grid with category filtering
10. **Blog** - Single article view with full content rendering
11. **Gallery** - Photo gallery with image modal viewing
12. **Directory** - Local businesses, tour operators, restaurants
13. **Contact** - Multi-purpose contact form with routing

## 🚀 Tech Stack

- **Frontend**: React 19, Vite, React Router v7
- **Styling**: Tailwind CSS v3
- **Backend/Database**: Supabase (PostgreSQL)
- **SEO**: React Helmet Async, JSON-LD schemas
- **Hosting**: Vercel
- **Icons**: Lucide React

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ncwala

# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local

# Add your Supabase credentials to .env.local
```

### Development

```bash
npm run dev
# Open http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

## ⚙️ Environment Variables

Create `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📊 Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # 13 page components
├── lib/              # Utility functions & Supabase client
├── App.jsx           # Main app with routing
├── main.jsx          # Entry point
└── index.css         # Global styles
public/
├── robots.txt
├── llms.txt
└── sitemap.xml
```

## 🌍 Deployment to Vercel

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

The `vercel.json` file automatically handles routing.

## 🌐 Multi-Language Support

10 languages: EN, FR, ES, PT, DE, ZH, AR, HI, SW, NY

Language selection persists in localStorage.

## 📱 Responsive Design

Mobile-first approach working perfectly on all devices:
- Mobile (< 600px): Hamburger navigation
- Tablet (600px - 1024px): Optimized layout
- Desktop (> 1024px): Full feature set

## 🔐 Built with Security in Mind

- Environment variables for sensitive data
- Supabase CORS headers configured
- XSS prevention
- Email validation

## 📝 License

Dedicated to preserving Ncwala and Ngoni cultural heritage.

---

**Built with ❤️ for the Ngoni people.**

