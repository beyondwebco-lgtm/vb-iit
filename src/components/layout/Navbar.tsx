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
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 py-2.5 border-b border-slate-100"
          : "bg-white py-3.5 border-b border-slate-200/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Vidyarthi Bhavan IIT Academy Home"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#0B1F4C] to-[#1D4ED8] p-1 shadow-sm shadow-blue-900/20 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/branding/emblem.svg"
              alt="VB IIT Academy Emblem"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[#0B1F4C] text-lg sm:text-xl tracking-tight leading-tight group-hover:text-[#1D4ED8] transition-colors">
              VIDYARTHI BHAVAN
            </span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-1.5 py-0.5 rounded">
                IIT ACADEMY
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
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
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                  isActive
                    ? "text-[#1D4ED8] font-semibold bg-blue-50/80"
                    : "text-slate-700 hover:text-[#0B1F4C] hover:bg-slate-50"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1D4ED8] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm shadow-blue-700/20 hover:shadow-md hover:shadow-blue-600/30 active:scale-[0.98] transition-all"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#0B1F4C] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl px-5 py-6 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-[#1D4ED8] bg-blue-50 font-bold"
                      : "text-slate-700 hover:text-[#0B1F4C] hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#1D4ED8]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/admissions"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-semibold py-3 px-4 rounded-xl shadow-md text-center"
            >
              <span>Enquire for Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0B1F4C] font-semibold py-2.5 px-4 rounded-xl text-center text-sm"
            >
              <Phone className="w-4 h-4 text-[#1D4ED8]" />
              <span>Call: {institutionData.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
