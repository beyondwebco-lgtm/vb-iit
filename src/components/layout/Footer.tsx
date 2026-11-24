import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0A1B3D] text-white pt-16 pb-8 border-t-2 border-[#38BDF8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1E40AF]/40">
          {/* Column 1: Institution Info & Vision (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 rounded-2xl bg-white p-1 shadow-[0_4px_12px_rgba(10,27,61,0.2)] border border-white/20">
                <Image
                  src="/images/branding/logo.png"
                  alt="Vidyarthi Bhavan IIT Academy Official Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-white leading-tight">
                  VIDYARTHI BHAVAN
                </h3>
                <p className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase">
                  IIT ACADEMY • NARASANNAPETA
                </p>
              </div>
            </div>

            <p className="text-[#E3EAF7] text-sm leading-relaxed">
              Committed to building the real pillars of Bharat through strong academic foundations,
              disciplined inquiry, mathematical competence, and timeless cultural values.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#E3EAF7]">
              <p className="font-semibold text-white mb-1">Our Core Educational Philosophy:</p>
              <p className="italic text-[#38BDF8]">“{institutionData.motto}”</p>
            </div>

            {/* Wonder Kidz Pre-Primary badge */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="relative w-10 h-10 shrink-0 rounded-xl bg-white p-1">
                <Image
                  src="/images/branding/wonder_kidz_logo.png"
                  alt="Wonder Kidz Play School Narasannapeta Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Wonder Kidz Play School</p>
                <p className="text-[#38BDF8] text-[11px]">The First Play School in Narasannapeta</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              {institutionData.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-[#1E40AF]/40 text-[#E3EAF7] border border-[#38BDF8]/20"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs tracking-wider uppercase text-[#38BDF8] border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#E3EAF7]">
              <li>
                <Link href="/" className="hover:text-[#38BDF8] hover:underline underline-offset-4 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#38BDF8] hover:underline underline-offset-4 transition-colors duration-200">
                  About the Academy
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#38BDF8] hover:underline underline-offset-4 transition-colors duration-200">
                  Academics & IIT Prep
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#38BDF8] hover:underline underline-offset-4 transition-colors duration-200">
                  Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#38BDF8] hover:underline underline-offset-4 transition-colors duration-200">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-[#38BDF8] hover:underline underline-offset-4 transition-colors duration-200">
                  Achievements & Strengths
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#38BDF8] hover:underline underline-offset-4 transition-colors duration-200">
                  Contact & Campus Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs tracking-wider uppercase text-[#38BDF8] border-b border-white/10 pb-2">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-sm text-[#E3EAF7]">
              <li>
                <Link
                  href="/academics#iit-jee-foundation"
                  className="hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>IIT-JEE Foundation (Classes 6-10)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#school-academics"
                  className="hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>School Standard Curriculum</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#ai-coding-innovation"
                  className="hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>AI, Coding & Innovation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#olympiad-competitive"
                  className="hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>Olympiad Mentorship</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#values-gita-heritage"
                  className="hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>Indian Culture & Gita Wisdom</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#holistic-health-martial-arts"
                  className="hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>Yoga & Martial Arts</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs tracking-wider uppercase text-[#38BDF8] border-b border-white/10 pb-2">
              Campus Office
            </h4>
            <div className="space-y-3 text-sm text-[#E3EAF7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                <span>
                  {institutionData.location.address}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <a
                    href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
                    className="hover:text-[#38BDF8] transition-colors duration-200 font-semibold"
                  >
                    {institutionData.contact.phone}
                  </a>
                </div>
                <div className="pl-6 text-xs text-[#E3EAF7]/75 flex flex-wrap gap-x-2 gap-y-0.5 font-mono">
                  <a href="tel:7981665714" className="hover:text-[#38BDF8]">7981665714</a>
                  <span>·</span>
                  <a href="tel:9490566550" className="hover:text-[#38BDF8]">9490566550</a>
                  <span>·</span>
                  <a href="tel:7981074545" className="hover:text-[#38BDF8]">7981074545</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href={`mailto:${institutionData.contact.email}`}
                  className="hover:text-[#38BDF8] transition-colors duration-200 break-all"
                >
                  {institutionData.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#E3EAF7]/80">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{institutionData.contact.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Online Admission Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E3EAF7]/70 text-center md:text-left">
          <p>
            © {currentYear} {institutionData.fullName}, {institutionData.location.town}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#E3EAF7] font-medium">
              Founder: Arangi Govinda Babu
            </span>
            <span>•</span>
            <span className="text-[#E3EAF7] font-medium">
              Principal: Kalepu Satish Kumar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
