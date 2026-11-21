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
  GraduationCap
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function HeroSection() {
  const { director, principal } = institutionData.leadership;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071434] via-[#0B1F4C] to-[#143B8A] text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative Background Geometric Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-400 blur-3xl transform translate-y-[-20%]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-sky-300 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Institutional Positioning & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Verified Location & Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{institutionData.fullName} • {institutionData.location.town}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              Building the <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-white">
                Real Pillars of Bharat
              </span>
            </h1>

            {/* Institutional Motto & Mission Statement */}
            <p className="text-lg sm:text-xl text-blue-100 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="font-semibold text-white">“{institutionData.motto}”</span>
              <br className="hidden sm:inline" />
              Blending IIT-JEE foundational rigor, conceptual clarity, and AI innovation with timeless Indian culture and character building.
            </p>

            {/* Key Verified Institutional Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Principal-Led Classroom</p>
                  <p className="text-blue-200">Math taught by Principal Kalepu Satish Kumar</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <GraduationCap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">IIT-JEE Foundation</p>
                  <p className="text-blue-200">Classes 6 to 10 conceptual mastery</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Indian Heritage & Values</p>
                  <p className="text-blue-200">Bhagavad Gita wisdom, yoga & martial arts</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Award className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Future-Ready Skills</p>
                  <p className="text-blue-200">Artificial Intelligence & coding integration</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-900/40 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98] transition-all border border-blue-400/30"
              >
                <span>Enquire for Admissions 2026-27</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/academics"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
              >
                <BookOpen className="w-4 h-4 text-sky-300" />
                <span>Explore Academic Programs</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Founder & Leadership Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-500 opacity-30 blur-lg" />

              <div className="relative bg-white text-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-5">
                {/* Director Photo with Verified Tag */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md border-2 border-white">
                  <Image
                    src={director.image || "/images/leadership/director_arangi_govinda_babu.png"}
                    alt="Arangi Govinda Babu, Founder / Director of Vidyarthi Bhavan IIT Academy"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1F4C] via-[#0B1F4C]/70 to-transparent p-4 text-white">
                    <p className="font-extrabold text-lg leading-tight">{director.name}</p>
                    <p className="text-xs font-semibold text-sky-300 uppercase tracking-wider">
                      {director.role} • {institutionData.shortName}
                    </p>
                  </div>
                </div>

                {/* Director Verified Quote */}
                <div className="relative pl-4 border-l-4 border-[#1D4ED8] py-1">
                  <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
                    “{director.quote}”
                  </p>
                </div>

                {/* Principal Quick Feature Card */}
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B1F4C] to-[#1D4ED8] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    {principal.initials}
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-[#0B1F4C]">{principal.name}</p>
                    <p className="text-slate-600 font-medium">Principal & Math Faculty</p>
                    <p className="text-[#1D4ED8] font-semibold text-[11px] mt-0.5">
                      Leading hands-on from the classroom
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
