import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Award,
  Trophy,
  GraduationCap,
  Brain,
  ShieldCheck,
  ArrowRight
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
      <section className="bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-semibold tracking-wide backdrop-blur-md">
            <span>Institutional Benchmarks</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Academic Strengths, Character & Lasting Accomplishment
          </h1>
          <p className="text-[#E3EAF7] text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            In strict alignment with truth in education: we celebrate real mastery, conceptual depth, disciplined habits, and character growth over hollow claims.
          </p>
        </div>
      </section>

      {/* Core Institutional Strengths Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3 py-1 rounded-full">
              Verified Pillars of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3D] tracking-tight">
              What True Achievement Means at VB IIT Academy
            </h2>
            <p className="text-[#5B6B8C] text-base">
              As articulated by Founder Arangi Govinda Babu: “Our goal is to build students who are not followers of temporary success, but creators of lasting progress.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shadow-sm">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0A1B3D]">
                Mathematical Precision & Confidence
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                High-school students develop authentic mathematical problem-solving skills, mentored directly in class by Principal Kalepu Satish Kumar.
              </p>
              <div className="pt-2 border-t border-[#E3EAF7] text-xs font-semibold text-[#2563EB]">
                Proven conceptual mastery • Classes 6-10
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E3EAF7] text-[#0A1B3D] flex items-center justify-center shadow-sm">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0A1B3D]">
                Competitive Exam Foundation
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                Early grounding in IIT-JEE and Olympiad question patterns, developing logical deduction, timed tests, and multi-concept synthesis.
              </p>
              <div className="pt-2 border-t border-[#E3EAF7] text-xs font-semibold text-[#2563EB]">
                Early competitive orientation without undue stress
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0A1B3D]">
                Future AI & Technology Fluency
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                Equipping students with algorithmic coding logic, computational thinking, and Artificial Intelligence understanding early in secondary school.
              </p>
              <div className="pt-2 border-t border-[#E3EAF7] text-xs font-semibold text-[#2563EB]">
                Modern digital competencies for 21st-century Bharat
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E3EAF7] text-[#F59E0B] flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0A1B3D]">
                Character, Gita Wisdom & Culture
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                Grounding academic capability in respect for parents, teachers, and civic responsibility, guided by the timeless philosophy of the Bhagavad Gita.
              </p>
              <div className="pt-2 border-t border-[#E3EAF7] text-xs font-semibold text-[#D97706]">
                Ethical foundation for lifelong leadership
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0A1B3D]">
                Individual Learner Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                Continuous diagnostic evaluations identify areas needing reinforcement, providing personalized guidance rather than generic batch teaching.
              </p>
              <div className="pt-2 border-t border-[#E3EAF7] text-xs font-semibold text-[#2563EB]">
                Support for every child at their own learning pace
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E3EAF7] text-[#1E40AF] flex items-center justify-center shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0A1B3D]">
                Physical Fitness, Yoga & Martial Arts
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                Building mental discipline and self-defense reflexes through integrated morning yoga, pranayama, and martial arts drills.
              </p>
              <div className="pt-2 border-t border-[#E3EAF7] text-xs font-semibold text-[#1E40AF]">
                Healthy body supporting an alert, inquisitive mind
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Guarantee of Authenticity: Soft Surface */}
      <section className="py-16 bg-[#F5F8FF] border-t border-[#E3EAF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D]">
            Our Commitment to Authentic Education
          </h2>
          <p className="text-[#5B6B8C] text-sm leading-relaxed">
            At Vidyarthi Bhavan IIT Academy, we uphold institutional integrity. We never fabricate results, purchase rankings, or compromise on academic honesty. We earn our reputation day after day in the classroom.
          </p>
          <div className="pt-2">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Enquire for Admission 2026-27</span>
              <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
