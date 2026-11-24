"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { institutionData } from "@/data/institutionData";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics & IIT Prep", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_8px_24px_rgba(37,99,235,0.06)] py-2.5 border-b border-[#E3EAF7]"
          : "bg-white/95 backdrop-blur-sm py-3.5 border-b border-[#E3EAF7]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Vidyarthi Bhavan IIT Academy Home"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-white p-1 shadow-[0_4px_14px_rgba(37,99,235,0.12)] border border-[#E3EAF7] group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-all duration-200">
            <Image
              src="/images/branding/logo.png"
              alt="Vidyarthi Bhavan IIT Academy Official Logo"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[#0A1B3D] text-lg sm:text-xl tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors duration-200">
              VIDYARTHI BHAVAN
            </span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-1.5 py-0.5 rounded-md">
                IIT ACADEMY
              </span>
              <span className="text-[11px] font-semibold text-[#5B6B8C]">
                • Narasannapeta
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 relative ${
                  isActive
                    ? "text-[#2563EB] font-semibold bg-[#F5F8FF]"
                    : "text-[#0A1B3D] hover:text-[#2563EB] hover:bg-[#F5F8FF]/80"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#38BDF8] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-[#0A1B3D] hover:text-[#2563EB] hover:bg-[#F5F8FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-[#E3EAF7] shadow-[0_16px_36px_rgba(37,99,235,0.12)] px-5 py-6 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 text-base font-medium rounded-xl transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "text-[#2563EB] bg-[#F5F8FF] font-bold"
                      : "text-[#0A1B3D] hover:text-[#2563EB] hover:bg-[#F5F8FF]/80"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#E3EAF7] flex flex-col gap-3">
            <Link
              href="/admissions"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold py-3 px-4 rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.25)] text-center transition-all duration-200"
            >
              <span>Enquire for Admissions</span>
              <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
            </Link>

            <a
              href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F8FF] hover:bg-white text-[#0A1B3D] border border-[#E3EAF7] font-semibold py-2.5 px-4 rounded-xl text-center text-sm transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#2563EB]" />
              <span>Call: {institutionData.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
