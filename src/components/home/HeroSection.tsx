"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  MapPin,
  CheckCircle,
  GraduationCap,
  Sparkles,
  Wind
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function HeroSection() {
  const { director, principal } = institutionData.leadership;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative Subtle Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#38BDF8] blur-3xl transform -translate-y-1/4" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#2563EB] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Institutional Positioning & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Verified Location & Distinction Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{institutionData.fullName} • {institutionData.location.town}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-white text-xs font-semibold tracking-wide backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>The First Play School in Narasannapeta</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#38BDF8] text-xs font-semibold tracking-wide backdrop-blur-md">
                <Wind className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Complete A/C Campus</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              Building the <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38BDF8] to-white">
                Real Pillars of Bharat
              </span>
            </h1>

            {/* Institutional Motto & Mission Statement */}
            <p className="text-lg sm:text-xl text-[#E3EAF7] font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="font-semibold text-white">“{institutionData.motto}”</span>
              <br className="hidden sm:inline" />
              Blending IIT-JEE foundational rigor, conceptual clarity, and AI innovation with timeless Indian culture and character building.
            </p>

            {/* Key Verified Institutional Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Wind className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Complete A/C Campus</p>
                  <p className="text-[#E3EAF7]/80">Climate-controlled, dust-free classrooms</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Sparkles className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">First Play School in Town</p>
                  <p className="text-[#E3EAF7]/80">Pioneering early education & Delhi Pub</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <CheckCircle className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Principal-Led Classroom</p>
                  <p className="text-[#E3EAF7]/80">Math taught by Principal Kalepu Satish Kumar</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <GraduationCap className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">IIT & NEET Foundations</p>
                  <p className="text-[#E3EAF7]/80">Classes 6 to 10 dual pedagogy track</p>
                </div>
              </div>
            </div>

            {/* CTAs with One Amber Accent Moment */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1B3D] font-bold text-base px-7 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(245,158,11,0.30)] hover:shadow-[0_12px_28px_rgba(245,158,11,0.40)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Enquire for Admissions 2026-27</span>
                <ArrowRight className="w-5 h-5 text-[#0A1B3D]" />
              </Link>

              <Link
                href="/academics"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 hover:border-[#38BDF8]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-sm"
              >
                <BookOpen className="w-4 h-4 text-[#38BDF8]" />
                <span>Explore Academic Programs</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Founder & Leadership Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative soft glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] opacity-25 blur-xl" />

              <div className="relative bg-white text-[#0A1B3D] rounded-3xl p-6 shadow-[0_20px_40px_rgba(10,27,61,0.18)] border border-[#E3EAF7] space-y-4">
                {/* Header with Official School Logo & Badges */}
                <div className="flex items-center justify-between border-b border-[#E3EAF7] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-10 h-10 shrink-0 rounded-xl bg-white p-0.5 border border-[#E3EAF7] shadow-sm">
                      <Image
                        src="/images/branding/logo.png"
                        alt="Vidyarthi Bhavan IIT Academy Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-[#0A1B3D] leading-tight">VB IIT ACADEMY</p>
                      <p className="text-[10px] font-bold text-[#2563EB] tracking-wider uppercase">Narasannapeta</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A1B3D] bg-[#F5F8FF] border border-[#E3EAF7] px-2 py-0.5 rounded-md">
                    Complete A/C
                  </span>
                </div>

                {/* Director Photo with Verified Tag at IIT Madras */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A1B3D] shadow-sm border border-[#E3EAF7]">
                  <Image
                    src="/images/leadership/director_at_iit_madras.jpg"
                    alt="Founder & Director Arangi Govinda Babu at Indian Institute of Technology Madras (IIT Madras)"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1B3D] via-[#0A1B3D]/80 to-transparent p-3.5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#2563EB]/80 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider mb-1">
                      <span>IIT Foundation Visionary</span>
                    </div>
                    <p className="font-extrabold text-base leading-tight">{director.name}</p>
                    <p className="text-xs text-[#E3EAF7] font-medium">
                      Founder & Director • At IIT Madras Campus
                    </p>
                  </div>
                </div>

                {/* Director Verified Quote */}
                <div className="relative pl-3.5 border-l-4 border-[#2563EB] py-0.5">
                  <p className="text-xs text-[#5B6B8C] italic font-medium leading-relaxed">
                    “{director.quote}”
                  </p>
                </div>

                {/* Principal Quick Feature Card */}
                <div className="p-3 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1B3D] to-[#2563EB] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-[0_4px_12px_rgba(37,99,235,0.2)]">
                    {principal.initials}
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-[#0A1B3D]">{principal.name}</p>
                    <p className="text-[#5B6B8C] font-medium text-[11px]">Principal & High-School Mathematics Faculty</p>
                    <p className="text-[#2563EB] font-semibold text-[11px] mt-0.5">
                      Leading conceptual derivations from the classroom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
