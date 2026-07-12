# PenguinPortfolio - Project Context Documentation

## Project Overview

**PenguinPortfolio** is a premium, single-page portfolio website for Jahid Ahsan (PenguinStream), a senior-level Unreal Engine Developer and AI Integrator with 4+ years of professional experience. The portfolio features a cyber-dark neon aesthetic with interactive elements, smooth navigation, and a fully functional contact system.

**Stack:**
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19, shadcn/ui
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Package Manager:** pnpm

---

## Design System

### Color Palette (Cyber-Dark Neon Theme)

All colors are defined in `app/globals.css` using CSS custom properties:

```
Primary Brand Color: #00F0FF (Cyber Cyan)
Secondary Accent:    #8B5CF6 (Neon Purple)
Background:          #0B0F19 (Deep Midnight)
Card Background:     #121826 (Slightly Lighter)
Text Foreground:     #F5F5F5 (Off-White)
Border/Input:        rgba(255, 255, 255, 0.05-0.08)
```

**Key Design Principles:**
- Minimalist dark theme with glowing neon accents
- High contrast for accessibility
- Smooth transitions and hover effects throughout
- Mouse-tracking ambient glow effect on page
- Fixed-position decorative background glows (cyan and purple)

### Typography

- **Font:** System fonts (via Tailwind defaults)
- **Heading Weight:** Bold (font-bold)
- **Body Weight:** Regular (default)
- **Line Height:** 1.4-1.6 (leading-relaxed)

---

## Architecture & Component Structure

### Page Layout (`app/page.tsx`)

The main page implements a single-page application with:
1. Fixed background glow effects (pseudo-elements)
2. Fixed left sidebar navigation
3. Content area with ml-20 (left padding) for sidebar
4. 5 main sections with HTML anchor IDs: hero, skills, projects, experience, services
5. Footer component

```tsx
<main>
  <GlowBackground /> {/* Ambient lighting layer */}
  <Navigation /> {/* Fixed left sidebar */}
  <div className="ml-20"> {/* Content with padding */}
    <section id="hero"><HeroSection /></section>
    <section id="skills"><SkillsMatrix /></section>
    <section id="projects"><ProjectsSection /></section>
    <section id="experience"><ExperienceSection /></section>
    <section id="services"><ServicesSection /></section>
    <Footer />
  </div>
</main>
```

### Components

#### 1. **GlowBackground** (`components/GlowBackground.tsx`)
- Client-side component that tracks mouse movement
- Creates an interactive ambient glow effect that follows cursor
- Uses `useMouseGlow` hook to update CSS variables for glow position
- **Purpose:** Enhanced visual interactivity and immersion

#### 2. **Navigation** (`components/Navigation.tsx`)
- Fixed left sidebar with vertical navigation
- Uses IntersectionObserver for scroll-spy functionality
- 5 navigation items: Home, Skills, Projects, Experience, Services
- Active section indicator highlights current section as user scrolls
- Smooth scroll-to-section behavior on click
- **Key Features:**
  - Scroll-spy updates active nav item automatically
  - Smooth scroll anchors to section IDs
  - Minimal design with neon accent styling

#### 3. **HeroSection** (`components/HeroSection.tsx`)
- Introduction with profile name and title
- "4+ years of professional experience" hook
- Contact action buttons (Email, Phone, GitHub, LinkedIn, YouTube)
- Animated gradient text for visual interest
- **Key Data:** Name, title, experience level, social links

#### 4. **SkillsMatrix** (`components/SkillsMatrix.tsx`)
- 6 skill categories with hover-glow effects:
  - Game Engines: UE5, UE4, Blueprints
  - Languages: C++, C#, Python
  - AI Integration: LLMs, RAG, Embeddings
  - Backend & Databases: PostgreSQL, MongoDB, Redis
  - Version Control: Git, GitHub, Perforce
  - Target Platforms: Windows, Linux, Cloud
- Responsive grid layout (md:grid-cols-3)
- Hover animations with neon glow

#### 5. **ProjectsSection** (`components/ProjectsSection.tsx`)
- 3 featured projects with technical breakdowns:
  - **Sanam:** Unreal Engine multiplayer game
  - **Celestial:** AI-powered space explorer
  - **Cryptex:** Blockchain-integrated payment system
- Each project card displays: title, description, tech stack tags, key achievements
- Responsive grid layout with hover effects

#### 6. **ExperienceSection** (`components/ExperienceSection.tsx`)
- Professional timeline with 6 roles
- Each entry includes: position title, company, location, date range
- Detailed achievement bullets for each role
- Timeline visual design with alternating layout
- **Roles Include:** Senior Game Developer, AI Integration Lead, Blockchain Developer, etc.

#### 7. **ServicesSection** (`components/ServicesSection.tsx`)
- "Get in Touch" heading with contact information
- Direct contact links (Email placeholder, Telegram placeholder)
- Professional contact form with fields:
  - Name (required)
  - Email (required, validated)
  - Subject (required)
  - Message (required)
- Form validation and user feedback
- Success/error status messages
- API integration to `/api/contact` endpoint
- **Form Features:**
  - Real-time validation
  - Loading state during submission
  - Success message display
  - Auto-clear on success
  - 5-second auto-dismiss for status messages

#### 8. **Footer** (`components/Footer.tsx`)
- Quick navigation links to all sections
- Social media links (Email, Code, LinkedIn, YouTube)
- Back-to-top button with smooth scroll
- Copyright information
- Contact information display

### Helper Components

#### **useMouseGlow Hook** (`hooks/useMouseGlow.ts`)
- Custom React hook for mouse tracking
- Updates CSS variables for glow position
- Used by `GlowBackground` component
- **Updates:** --mouse-x and --mouse-y CSS variables

---

## API Routes

### Contact Form Endpoint (`app/api/contact/route.ts`)

**POST `/api/contact`**

**Purpose:** Handle contact form submissions from ServicesSection

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, validated)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully"
}
```

**Features:**
- Form field validation (all required)
- Email format validation
- CORS headers included
- Console logging for message tracking
- Error handling with descriptive messages
- **Future Enhancement:** Ready for SendGrid, Resend, or Telegram Bot integration

**Integration Points:**
- Currently logs to console
- Can be extended to send emails via:
  - SendGrid API
  - Resend API
  - Telegram Bot (with bot token and chat ID)
  - Node mailer with SMTP

---

## File Structure

```
/vercel/share/v0-project/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts (Contact form API handler)
│   ├── page.tsx (Main portfolio page)
│   ├── layout.tsx (Root layout with metadata)
│   └── globals.css (Design tokens and theme)
├── components/
│   ├── GlowBackground.tsx (Mouse-tracking ambient glow)
│   ├── Navigation.tsx (Fixed left sidebar navigation)
│   ├── HeroSection.tsx (Introduction and contact)
│   ├── SkillsMatrix.tsx (Technical skills grid)
│   ├── ProjectsSection.tsx (Featured projects)
│   ├── ExperienceSection.tsx (Work experience timeline)
│   ├── ServicesSection.tsx (Contact form section)
│   ├── Footer.tsx (Footer with nav and social)
│   └── ui/
│       └── button.tsx (shadcn Button component)
├── hooks/
│   └── useMouseGlow.ts (Mouse tracking hook)
├── lib/
│   └── utils.ts (Tailwind cn() utility)
├── package.json
├── tsconfig.json
├── tailwind.config.ts (if using Tailwind v3)
└── next.config.mjs
```

---

## How It All Works Together

### Data Flow

1. **User visits portfolio** → Page loads with `app/page.tsx`
2. **Page renders** → All sections mounted with HTML anchor IDs
3. **Navigation component initializes** → IntersectionObserver watches sections
4. **User scrolls** → Observer detects section in viewport, updates active nav
5. **User clicks nav link** → Smooth scroll to section anchor (hash-based)
6. **User fills contact form** → Form validation on change
7. **User submits form** → POST to `/api/contact`
8. **Backend validates** → Confirms all required fields
9. **Success/Error shown** → Status message displayed for 5 seconds
10. **Form clears** → Ready for next submission

### Navigation Flow

- **Hash-based Routing:** Uses anchor IDs (hero, skills, projects, etc.)
- **Scroll Spy:** IntersectionObserver detects when sections enter viewport
- **Active State:** Navigation indicator shows current section
- **Smooth Scrolling:** CSS scroll-behavior: smooth + element.scrollIntoView()

### Styling Architecture

**Tailwind v4 + CSS Variables:**
- All colors defined in `:root` CSS custom properties
- Tailwind theme inherits from these variables
- Design tokens applied consistently across all components
- Dark mode is always-on (no light mode toggle)

---

## Customization Guide

### Update Personal Information

**Hero Section:**
- Edit `components/HeroSection.tsx` to update:
  - Name, title, experience level
  - Social media links (Email, GitHub, LinkedIn, YouTube URLs)

**Skills:**
- Edit `components/SkillsMatrix.tsx`
- Modify the `skills` array with your expertise

**Projects:**
- Edit `components/ProjectsSection.tsx`
- Update `projects` array with your work samples

**Experience:**
- Edit `components/ExperienceSection.tsx`
- Modify `experience` array with your work history

**Contact Links:**
- Edit `components/ServicesSection.tsx`
- Update Telegram and email addresses

### Add Email Integration

To enable actual email notifications, modify `app/api/contact/route.ts`:

**Option 1: Resend (Recommended)**
```bash
pnpm add resend
```

```ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'hello@example.com',
  to: process.env.CONTACT_EMAIL,
  subject: formData.subject,
  html: `<p>${formData.message}</p><p>From: ${formData.email}</p>`,
});
```

**Option 2: SendGrid**
```bash
pnpm add @sendgrid/mail
```

**Option 3: Telegram Bot**
- Get bot token from @BotFather on Telegram
- Add to `.env.local`: `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`
- Send messages via Telegram Bot API

### Modify Color Scheme

Edit `app/globals.css`:

```css
:root {
  --primary: #00f0ff;        /* Main accent */
  --secondary: #8b5cf6;      /* Secondary accent */
  --background: #0b0f19;     /* Page background */
  --foreground: #f5f5f5;     /* Text color */
}
```

Then rebuild to apply changes globally.

---

## Performance Optimizations

1. **IntersectionObserver:** Efficient scroll-spy without scroll event listeners
2. **CSS Variables:** Reduced JavaScript calculations for styling
3. **Client Components:** Strategic use of 'use client' for interactivity
4. **Image Optimization:** Future: consider next/image for portfolio images
5. **Code Splitting:** Components lazy-loaded as sections appear

---

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- CSS custom properties support
- IntersectionObserver API support

---

## Deployment

**Recommended:** Vercel (optimized for Next.js)

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Deploy to Vercel
vercel
```

**Environment Variables (if added):**
- `RESEND_API_KEY` (for email integration)
- `CONTACT_EMAIL` (destination email)
- `TELEGRAM_BOT_TOKEN` (for Telegram notifications)
- `TELEGRAM_CHAT_ID` (your Telegram chat ID)

---

## Future Enhancements

1. Add blog section with MDX support
2. Dark mode toggle (currently always dark)
3. Multi-language support (EN, FR, ES, etc.)
4. Email notification integration
5. Telegram bot for contact form submissions
6. Analytics tracking (Vercel Analytics)
7. Newsletter signup
8. Portfolio image gallery with lightbox
9. Testimonials carousel
10. Download resume/CV button

---

## Key Files & Their Purposes

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main portfolio layout and section orchestration |
| `app/layout.tsx` | Root HTML structure, metadata, fonts |
| `app/globals.css` | Design tokens, color system, typography rules |
| `components/Navigation.tsx` | Fixed sidebar with scroll-spy navigation |
| `components/ServicesSection.tsx` | Contact form component |
| `app/api/contact/route.ts` | Backend form submission handler |
| `hooks/useMouseGlow.ts` | Mouse tracking for ambient effects |

---

## Troubleshooting

**Navigation not working:**
- Check that section IDs match navigation config in Navigation.tsx
- Verify IntersectionObserver is supported in browser

**Form submission failing:**
- Check browser console for error messages
- Verify all required fields are filled
- Ensure email format is valid (contains @)

**Colors not updating:**
- Clear cache and rebuild with `pnpm build`
- Check that CSS variables are defined in `:root`
- Verify Tailwind is using correct config

**Styles not applying:**
- Rebuild Tailwind: `pnpm build`
- Clear .next folder: `rm -rf .next`
- Restart dev server: `pnpm dev`

---

## Contact & Support

For questions about this portfolio or to request modifications, contact via the Services section contact form or update your contact details in `components/ServicesSection.tsx`.

---

**Last Updated:** July 7, 2026  
**Version:** 1.0  
**Project:** PenguinPortfolio - Premium Portfolio for Jahid Ahsan (PenguinStream)
