import React from "react";
import Link from "next/link";
import {
  Brain,
  Compass,
  Heart,
  ArrowRight,
  BookOpenCheck,
  Sparkles
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function AcademyOverview() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Positioning (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F8FF] border border-[#E3EAF7] text-[#2563EB] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{institutionData.secondaryMotto}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3D] tracking-tight leading-tight">
              An Educational Sanctuary for Deep Conceptual Clarity & Nation-Building
            </h2>

            <p className="text-[#5B6B8C] text-base leading-relaxed">
              Situated on <strong className="text-[#0A1B3D] font-semibold">State Bank Street, Narasannapeta, Srikakulam District</strong>, Vidyarthi Bhavan IIT Academy was established to move beyond superficial rote memorization and cultivate students who are intellectually confident, mathematically competent, and morally grounded.
            </p>

            <p className="text-[#5B6B8C] text-sm sm:text-base leading-relaxed">
              We employ a dual pedagogical system—the <strong className="text-[#0A1B3D] font-semibold">Descriptive Method</strong> for concept depth and derivations, and <strong className="text-[#0A1B3D] font-semibold">Objective Method Programs</strong> for competitive speed. Through our partnership with <strong className="text-[#0A1B3D] font-semibold">ULO Bangalore</strong> for STEM, Python, and the SPEAK communication program, alongside daily <strong className="text-[#0A1B3D] font-semibold">Medha Suktham & Gita chanting</strong>, we build true pillars of Bharat.
            </p>

            {/* Core Values / 6 Pillars */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B6B8C] mb-3">
                The Six Pillars of Our Institutional Philosophy:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {institutionData.pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="p-3 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] flex items-center gap-2.5 hover:border-[#2563EB]/40 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    <span className="text-xs font-bold text-[#0A1B3D]">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#0A1B3D] hover:bg-[#1E40AF] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(10,27,61,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Read Full Academy History & Vision</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Infographic Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-[#E3EAF7] shadow-[0_4px_20px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.25)]">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0A1B3D]">
                Dual Pedagogy System
              </h3>
              <p className="text-xs text-[#5B6B8C] leading-relaxed">
                Descriptive Method for first-principles reasoning combined with Objective Method for competitive test mastery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E3EAF7] shadow-[0_4px_20px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0A1B3D] text-[#38BDF8] flex items-center justify-center shadow-[0_4px_12px_rgba(10,27,61,0.2)]">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0A1B3D]">
                IIT, NEET & Civils
              </h3>
              <p className="text-xs text-[#5B6B8C] leading-relaxed">
                Comprehensive foundation courses, Abacus mental arithmetic, and talent olympiad guidance across all grades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E3EAF7] shadow-[0_4px_20px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(30,64,175,0.25)]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0A1B3D]">
                STEM by ULO Bangalore
              </h3>
              <p className="text-xs text-[#5B6B8C] leading-relaxed">
                Python coding, Scratch 3.0, Code.org, and the SPEAK program for communication and life vision.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E3EAF7] shadow-[0_4px_20px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(245,158,11,0.25)]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0A1B3D]">
                Spiritual Heritage & Arts
              </h3>
              <p className="text-xs text-[#5B6B8C] leading-relaxed">
                Bhagavadhgeetha, Medha Suktham chanting, martial arts, yoga, and Andhra traditional Kolatam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}