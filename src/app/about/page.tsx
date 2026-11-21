import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Quote,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Sparkles,
  Heart,
  Target,
  ArrowRight
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "About Us | Leadership, Vision & Mission",
  description:
    "Learn about Vidyarthi Bhavan IIT Academy in Narasannapeta, founded by Arangi Govinda Babu and led academically by Principal Kalepu Satish Kumar.",
};

export default function AboutPage() {
  const { director, principal } = institutionData.leadership;

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#071434] via-[#0B1F4C] to-[#143B8A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide">
            <span>About Vidyarthi Bhavan IIT Academy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Shaping Confident Minds, Strong Leaders & Pillars of Bharat
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Founded on the principle that true education must provide more than temporary job literacy—it must cultivate character, conceptual insight, and lifetime competence.
          </p>
        </div>
      </section>

      {/* Institutional Overview */}
      <section className="py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Our Genesis & Identity
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B1F4C] tracking-tight">
                Rooted in Narasannapeta, Dedicated to National Excellence
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Vidyarthi Bhavan IIT Academy was conceived to bridge a vital gap in modern schooling: the false divide between rigorous competitive mathematics and deep moral character.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Located in <strong className="text-slate-900">Narasannapeta, Srikakulam District, Andhra Pradesh</strong>, our academy prepares students to meet the rigorous demands of national competitive examinations like the IIT-JEE and Olympiads, while instilling respect for parents, teachers, and Bharatiya heritage.
              </p>
              <div className="p-4 rounded-2xl bg-blue-50 border-l-4 border-[#1D4ED8] text-slate-800 space-y-1">
                <p className="font-bold text-xs uppercase tracking-wider text-[#1D4ED8]">
                  Our Uncompromising Motto:
                </p>
                <p className="font-semibold text-base sm:text-lg text-[#0B1F4C]">
                  “{institutionData.motto}”
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="font-extrabold text-lg text-[#0B1F4C] border-b border-slate-200 pb-3">
                Core Institutional Pillars
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {institutionData.pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]" />
                    <span className="text-xs font-bold text-[#0B1F4C]">{pillar}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                Every academic period, morning assembly, laboratory exploration, and sports session is designed around these six pillars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile Section */}
      <section id="director-message" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
              Founder & Director's Address
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C]">
              Building the Real Pillars of Bharat
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A comprehensive message by Arangi Govinda Babu, Founder & Director, Vidyarthi Bhavan IIT Academy.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl shadow-blue-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Director Photo & Summary Card (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                <Image
                  src={director.image || "/images/leadership/director_arangi_govinda_babu.png"}
                  alt={director.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-center">
                <h3 className="font-extrabold text-xl text-[#0B1F4C]">{director.name}</h3>
                <p className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider mt-0.5">
                  {director.role}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Vidyarthi Bhavan IIT Academy • Narasannapeta
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F4C]">
                  Key Focus Disciplines:
                </p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  {director.interests.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Full Message Text (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-5 rounded-2xl bg-blue-50/80 border-l-4 border-[#1D4ED8] text-slate-800 relative">
                <Quote className="w-8 h-8 text-blue-200 absolute right-4 top-4 opacity-50" />
                <p className="text-base sm:text-lg font-semibold italic leading-relaxed text-[#0B1F4C]">
                  “{director.quote}”
                </p>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {director.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm font-bold text-[#0B1F4C]">With best wishes and blessings,</p>
                <p className="text-lg font-extrabold text-[#1D4ED8] mt-1">{director.name}</p>
                <p className="text-xs text-slate-500">{director.role}, Vidyarthi Bhavan IIT Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Profile Section */}
      <section id="principal-message" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Principal's Educational Address
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C]">
              Leading from the Classroom
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A message from Kalepu Satish Kumar, Principal & Mathematics / IIT Foundation Faculty.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl shadow-blue-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Principal Visual & Role (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0B1F4C] to-[#1D4ED8] text-white flex flex-col items-center justify-center p-6 shadow-xl border-4 border-white text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl font-black mb-3">
                  {principal.initials}
                </div>
                <h3 className="font-black text-2xl">{principal.name}</h3>
                <p className="text-xs font-bold text-sky-300 uppercase tracking-wider mt-1">
                  Principal & IIT Foundation Faculty
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1">
                <p className="font-bold text-xs uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-amber-800" />
                  Active Teaching Commitment
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {principal.classroomConnection}
                </p>
              </div>

              {/* Priorities Quick List */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F4C]">
                  6 Guiding Priorities:
                </p>
                <ul className="text-xs space-y-1 text-slate-700">
                  {principal.priorities.map((item) => (
                    <li key={item.title} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                      <strong>{item.title}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Principal Message Text (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-5 rounded-2xl bg-white border-l-4 border-[#1D4ED8] text-slate-800 shadow-sm relative">
                <Quote className="w-8 h-8 text-blue-200 absolute right-4 top-4 opacity-50" />
                <p className="text-base sm:text-lg font-semibold italic leading-relaxed text-[#0B1F4C]">
                  “{principal.quote}”
                </p>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {principal.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm font-bold text-[#0B1F4C]">Kalepu Satish Kumar</p>
                <p className="text-xs text-slate-500">
                  Principal & Mathematics / IIT Foundation Faculty, Vidyarthi Bhavan IIT Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0B1F4C] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Experience the Vidyarthi Bhavan Academic Environment
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
            We welcome parents to visit our Narasannapeta campus, consult directly with our educators, and discover our disciplined approach to conceptual learning.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-md"
            >
              <span>Enquire for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-6 py-3 rounded-xl transition border border-white/20"
            >
              <span>View Campus Location</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
