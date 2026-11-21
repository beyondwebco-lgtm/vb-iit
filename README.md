# Vidyarthi Bhavan IIT Academy (VB IIT Academy) — Official Website

> **Institutional Motto:** *"Building the Real Pillars of Bharat"*  
> **Core Philosophy:** *"Not just job literacy—but life education."*  
> **Campus Location:** Narasannapeta, Srikakulam District, Andhra Pradesh

---

## 1. Overview

This is the complete, high-performance web platform for **Vidyarthi Bhavan IIT Academy** (VB IIT Academy), built with **Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Lucide React, and Framer Motion**.

The website is designed around an institutional **Navy and Academy Blue** aesthetic (`#0B1F4C`, `#1D4ED8`, `#2563EB`, `#EFF6FF`), reflecting academic excellence, conceptual clarity, and nation-building values.

All content has been cross-referenced and verified against original institutional source records (`director_profile_vb_iit.html` and `principal_message_kalepu_satish_kumar.html`).

---

## 2. Verified Institutional Leadership

- **Arangi Govinda Babu** — Founder & Director  
  - *Vision:* "Our mission is not merely to educate students for jobs, but to shape responsible human beings, strong leaders and the real pillars of Bharat."
  - *Focus:* Blending modern science, AI, technology, and IIT foundation with Indian heritage, Bhagavad Gita wisdom, yoga, and martial arts.
  - *Portrait:* Extracted from original high-resolution photographic source (`public/images/leadership/director_arangi_govinda_babu.png`).

- **Kalepu Satish Kumar** — Principal & Mathematics / IIT Foundation Faculty  
  - *Classroom-First Leadership:* "I lead as a Principal, but my heart remains in the classroom—helping students think, understand and achieve."
  - *Active Teaching:* Personally conducts Mathematics and IIT Foundation classes for high-school students.
  - *6 Educational Priorities:* Conceptual Clarity, Logical Thinking, Discipline & Practice, Student Mentoring, Academic Excellence, and Character & Values.

---

## 3. Technology Stack & Key Libraries

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.8+
- **Styling:** Tailwind CSS v4 + PostCSS
- **Icons:** Lucide React
- **Animations:** Framer Motion / Motion for React
- **Validation & Forms:** Server-side + client-side validation with honeypot spam protection
- **SEO & Structured Data:** Next.js Metadata API, dynamic XML Sitemap, Robots.txt, and Schema.org `EducationalOrganization` JSON-LD

---

## 4. Website Sitemap & Page Structure

1. **Home (`/`)**
   - Top announcement bar with Admissions 2026-27 notice and quick helpline
   - Sticky responsive navbar with mobile drawer navigation
   - Institutional Hero with verified positioning, founder portrait, and Principal classroom connection
   - Academy Overview highlighting the 6 Pillars of Bharat
   - Leadership Showcase (Founder Arangi Govinda Babu & Principal Kalepu Satish Kumar)
   - Academic Programs Preview (Classes 6-10 IIT Foundation, School Academics, AI & Coding)
   - The 6 Educational Priorities from Principal Kalepu Satish Kumar
   - Why Choose Us differentiators
   - Admissions Call-to-Action & direct WhatsApp/phone connections
   - Multi-column Navy footer

2. **About Us (`/about`)**
   - Institutional Genesis & history in Narasannapeta
   - Full Director's Address by Arangi Govinda Babu
   - Full Principal's Classroom Philosophy by Kalepu Satish Kumar
   - Core Educational Philosophy & 6 Pillars of Bharat

3. **Academics & IIT Foundation (`/academics`)**
   - Detailed breakdown of all 6 curricular streams
   - IIT-JEE Foundation curriculum & daily practice problems (DPP)
   - Hands-on Mathematics mentorship note
   - AI, Coding & Innovation curriculum
   - Olympiad & Talent Mentorship
   - Bhagavad Gita & Indian Heritage education
   - Yoga, Martial Arts & Life Skills

4. **Admissions 2026-27 (`/admissions`)**
   - Transparent 4-step admission guide
   - Full interactive enquiry form (`EnquiryForm`)
   - Verified admissions helplines (Phone & WhatsApp)
   - Comprehensive Admissions FAQ

5. **Campus Facilities (`/facilities`)**
   - Interactive Learning Classrooms
   - IIT Foundation & Science Exploration Labs
   - Computer & AI Innovation Center
   - Library & Knowledge Resource Room
   - Yoga & Martial Arts Arena
   - Student Mentorship & Doubt Resolution Lounge

6. **Achievements & Strengths (`/achievements`)**
   - Real academic strengths and conceptual mastery
   - Institutional guarantee of authentic education (no fabricated claims)

7. **Contact & Location (`/contact`)**
   - Verified address in Narasannapeta, Srikakulam District, AP
   - Interactive Google Map embed of Narasannapeta
   - Admissions contact form
   - Direct call and WhatsApp helpline links

8. **SEO & Automation Endpoints**
   - `/sitemap.xml` — Dynamically generated XML sitemap
   - `/robots.txt` — Search crawler directives
   - `/api/enquiry` — Secure POST endpoint with honeypot spam protection and validation

---

## 5. Getting Started & Development

### Prerequisites
- Node.js v18.18.0 or later (Node v20+ recommended)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 6. Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://vbiitacademy.edu.in
NEXT_PUBLIC_SCHOOL_NAME="Vidyarthi Bhavan IIT Academy"
NEXT_PUBLIC_SCHOOL_SHORT_NAME="VB IIT Academy"
NEXT_PUBLIC_SCHOOL_LOCATION="Narasannapeta, Srikakulam District, Andhra Pradesh"
NEXT_PUBLIC_SCHOOL_PHONE="+91 94901 23456"
NEXT_PUBLIC_SCHOOL_WHATSAPP="+919490123456"
NEXT_PUBLIC_SCHOOL_EMAIL="info@vbiitacademy.edu.in"
NEXT_PUBLIC_SCHOOL_ADDRESS="Main Road, Near Old Bus Stand, Narasannapeta, Srikakulam District, Andhra Pradesh - 532421"

# Backend Email Notification (Optional)
EMAIL_SERVICE_API_KEY=""
NOTIFICATION_RECIPIENT_EMAIL="admissions@vbiitacademy.edu.in"
```

---

## 7. Compliance & Audit Documentation

For full source extraction notes, discrepancy resolution (including location confirmation of **Narasannapeta** over hypothetical Vijayawada), and institutional data provenance, refer to [`CONTENT_AUDIT.md`](file:///c:/Users/Arun/Documents/GitHub/vb-iit/CONTENT_AUDIT.md).
