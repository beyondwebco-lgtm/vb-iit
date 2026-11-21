import type { Metadata } from "next";
import "./globals.css";
import TopAnnouncementBar from "@/components/layout/TopAnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vbiitacademy.edu.in"),
  title: {
    default: `${institutionData.fullName} | Building the Real Pillars of Bharat | Narasannapeta`,
    template: `%s | ${institutionData.fullName}`,
  },
  description:
    "Vidyarthi Bhavan IIT Academy (VB IIT Academy) in Narasannapeta, Srikakulam District, AP. Premier school education, IIT-JEE Foundation (Classes 6-10), AI & Coding, character building, and Indian heritage.",
  keywords: [
    "Vidyarthi Bhavan IIT Academy",
    "VB IIT Academy",
    "Vidyarthi Bhavan Narasannapeta",
    "IIT Academy Narasannapeta",
    "IIT Foundation school Srikakulam",
    "Best school in Narasannapeta",
    "Arangi Govinda Babu",
    "Kalepu Satish Kumar",
    "IIT JEE Foundation Classes 6 to 10",
    "School with AI and coding Narasannapeta",
    "Pillars of Bharat education"
  ],
  authors: [{ name: "Vidyarthi Bhavan IIT Academy" }],
  creator: "Vidyarthi Bhavan IIT Academy",
  publisher: "Vidyarthi Bhavan IIT Academy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vbiitacademy.edu.in",
    siteName: institutionData.fullName,
    title: `${institutionData.fullName} | ${institutionData.tagline}`,
    description:
      "Premier school education & IIT-JEE Foundation in Narasannapeta. Blending competitive academic rigor with AI skills and Indian culture.",
    images: [
      {
        url: "/images/branding/logo.svg",
        width: 1200,
        height: 630,
        alt: `${institutionData.fullName} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${institutionData.fullName} | Narasannapeta`,
    description:
      "Building the Real Pillars of Bharat through IIT Foundation, AI literacy, and moral character in Narasannapeta.",
    images: ["/images/branding/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: institutionData.fullName,
    alternateName: institutionData.shortName,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://vbiitacademy.edu.in",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://vbiitacademy.edu.in"}/images/branding/logo.svg`,
    slogan: institutionData.tagline,
    description:
      "Vidyarthi Bhavan IIT Academy is a premier educational institution in Narasannapeta, AP, specializing in school academics, IIT-JEE Foundation for high-school students, AI & coding, and Indian heritage values.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "State Bank Street, Narasannapeta Town, Narasannapeta Mandal",
      addressLocality: "Narasannapeta",
      addressRegion: "Andhra Pradesh",
      postalCode: "532421",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: institutionData.leadership.director.name,
      jobTitle: "Founder & Director",
    },
    employee: [
      {
        "@type": "Person",
        name: institutionData.leadership.principal.name,
        jobTitle: "Principal & Mathematics Faculty",
      },
    ],
    telephone: institutionData.contact.phone,
    email: institutionData.contact.email,
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-[#0A1B3D] bg-white selection:bg-[#F5F8FF] selection:text-[#2563EB]">
        <TopAnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
