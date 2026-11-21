import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B1F4C] text-white pt-16 pb-8 border-t-4 border-[#1D4ED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-blue-900/60">
          {/* Column 1: Institution Info & Vision (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 rounded-xl bg-white p-1 shadow-md">
                <Image
                  src="/images/branding/emblem.svg"
                  alt="VB IIT Academy Emblem"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-white leading-tight">
                  VIDYARTHI BHAVAN
                </h3>
                <p className="text-xs font-bold text-blue-300 tracking-wider uppercase">
                  IIT ACADEMY • NARASANNAPETA
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Committed to building the real pillars of Bharat through strong academic foundations,
              disciplined inquiry, mathematical competence, and timeless cultural values.
            </p>

            <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-800/40 text-xs text-blue-200">
              <p className="font-semibold text-white mb-1">Our Core Educational Philosophy:</p>
              <p className="italic">“{institutionData.motto}”</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              {institutionData.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-900/40 text-blue-200 border border-blue-700/40"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm tracking-wider uppercase text-blue-300 border-b border-blue-800/60 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About the Academy
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white hover:underline transition-colors">
                  Academics & IIT Prep
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white hover:underline transition-colors">
                  Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white hover:underline transition-colors">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-white hover:underline transition-colors">
                  Achievements & Strengths
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                  Contact & Campus Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm tracking-wider uppercase text-blue-300 border-b border-blue-800/60 pb-2">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/academics#iit-jee-foundation"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>IIT-JEE Foundation (Classes 6-10)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#school-academics"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>School Standard Curriculum</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#ai-coding-innovation"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>AI, Coding & Innovation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#olympiad-competitive"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Olympiad Mentorship</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#values-gita-heritage"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Indian Culture & Gita Wisdom</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#holistic-health-martial-arts"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Yoga & Martial Arts</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm tracking-wider uppercase text-blue-300 border-b border-blue-800/60 pb-2">
              Campus Office
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>
                  {institutionData.location.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {institutionData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${institutionData.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {institutionData.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{institutionData.contact.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-colors"
              >
                <span>Online Admission Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p>
            © {currentYear} {institutionData.fullName}, {institutionData.location.town}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 font-medium">
              Founder: Arangi Govinda Babu
            </span>
            <span>•</span>
            <span className="text-slate-300 font-medium">
              Principal: Kalepu Satish Kumar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
