import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Brain,
  Compass,
  Heart,
  Award,
  ArrowRight,
  BookOpenCheck
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function AcademyOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Positioning (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              About Vidyarthi Bhavan IIT Academy
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C] tracking-tight leading-tight">
              An Educational Sanctuary for Deep Conceptual Clarity & Nation-Building
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Situated in <strong className="text-slate-900">Narasannapeta, Srikakulam District</strong>, Vidyarthi Bhavan IIT Academy was established with a clear mandate: to move beyond superficial rote learning and create students who are intellectually confident, mathematically competent, and morally grounded.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We reject the philosophy of education merely for marks or temporary job literacy. By integrating early <strong>IIT-JEE foundation</strong> training, <strong>artificial intelligence & coding</strong>, and <strong>Bhagavad Gita wisdom</strong>, we prepare students for school success, competitive challenges, and honorable lives.
            </p>

            {/* Core Values / 6 Pillars */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                The Six Pillars of Our Institutional Philosophy:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {institutionData.pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                    <span className="text-xs font-bold text-[#0B1F4C]">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#0B1F4C] hover:bg-[#123075] text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-md"
              >
                <span>Read Full Academy History & Vision</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Infographic Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center shadow-md">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#0B1F4C]">
                First-Principles Learning
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Concepts in Mathematics and Sciences are developed from foundational intuition before memorizing formulas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F4C] text-white flex items-center justify-center shadow-md">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#0B1F4C]">
                IIT Foundation in High School
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured curriculum from Classes 6 through 10 designed to remove exam fear and cultivate competitive reasoning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#0B1F4C]">
                Future AI & Innovation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern coding and algorithmic logic training preparing students for tomorrow's technology-driven world.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#0B1F4C]">
                Indian Values & Gita Wisdom
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Character building, filial respect, yoga, and civic responsibility forming the ethical backbone of our students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
