import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Award,
  Trophy,
  CheckCircle2,
  GraduationCap,
  Brain,
  ShieldCheck,
  ArrowRight,
  Quote
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "Achievements & Academic Strengths | VB IIT Academy",
  description:
    "Explore the academic benchmarks, student mentorship successes, and institutional strengths of Vidyarthi Bhavan IIT Academy in Narasannapeta.",
};

export default function AchievementsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#071434] via-[#0B1F4C] to-[#143B8A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide">
            <span>Institutional Benchmarks</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Academic Strengths, Character & Lasting Accomplishment
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            In strict alignment with truth in education: we celebrate real mastery, conceptual depth, disciplined habits, and character growth over hollow claims.
          </p>
        </div>
      </section>

      {/* Core Institutional Strengths Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Verified Pillars of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C] tracking-tight">
              What True Achievement Means at VB IIT Academy
            </h2>
            <p className="text-slate-600 text-base">
              As articulated by Founder Arangi Govinda Babu: “Our goal is to build students who are not followers of temporary success, but creators of lasting progress.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center shadow-md">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0B1F4C]">
                Mathematical Precision & Confidence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-school students develop authentic mathematical problem-solving skills, mentored directly in class by Principal Kalepu Satish Kumar.
              </p>
              <div className="pt-2 border-t border-slate-200 text-xs font-semibold text-[#1D4ED8]">
                Proven conceptual mastery • Classes 6-10
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F4C] text-white flex items-center justify-center shadow-md">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0B1F4C]">
                Competitive Exam Foundation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Early grounding in IIT-JEE and Olympiad question patterns, developing logical deduction, timed tests, and multi-concept synthesis.
              </p>
              <div className="pt-2 border-t border-slate-200 text-xs font-semibold text-[#1D4ED8]">
                Early competitive orientation without undue stress
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0B1F4C]">
                Future AI & Technology Fluency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Equipping students with algorithmic coding logic, computational thinking, and Artificial Intelligence understanding early in secondary school.
              </p>
              <div className="pt-2 border-t border-slate-200 text-xs font-semibold text-[#1D4ED8]">
                Modern digital competencies for 21st-century Bharat
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0B1F4C]">
                Character, Gita Wisdom & Culture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Grounding academic capability in respect for parents, teachers, and civic responsibility, guided by the timeless philosophy of the Bhagavad Gita.
              </p>
              <div className="pt-2 border-t border-slate-200 text-xs font-semibold text-amber-700">
                Ethical foundation for lifelong leadership
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0B1F4C]">
                Individual Learner Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continuous diagnostic evaluations identify areas needing reinforcement, providing personalized guidance rather than generic batch teaching.
              </p>
              <div className="pt-2 border-t border-slate-200 text-xs font-semibold text-emerald-700">
                Support for every child at their own learning pace
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0B1F4C]">
                Physical Fitness, Yoga & Martial Arts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Building mental discipline and self-defense reflexes through integrated morning yoga, pranayama, and martial arts drills.
              </p>
              <div className="pt-2 border-t border-slate-200 text-xs font-semibold text-indigo-700">
                Healthy body supporting an alert, inquisitive mind
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Guarantee of Authenticity */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F4C]">
            Our Commitment to Authentic Education
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            At Vidyarthi Bhavan IIT Academy, we uphold institutional integrity. We never fabricate results, purchase rankings, or compromise on academic honesty. We earn our reputation day after day in the classroom.
          </p>
          <div className="pt-2">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-md"
            >
              <span>Enquire for Admission 2026-27</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
