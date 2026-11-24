import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Award,
  Trophy,
  GraduationCap,
  Brain,
  ShieldCheck,
  ArrowRight,
  Medal,
  Sparkles
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "Achievements & Competition Honors | VB IIT Academy",
  description:
    "Explore verified student achievements in State Martial Arts, District Olympiads, Spelling Bee championships, and academic merit honors at Vidyarthi Bhavan IIT Academy, Narasannapeta.",
};

const VERIFIED_ACHIEVEMENT_PHOTOS = [
  {
    image: "/images/achievements/martial_arts_champions.jpg",
    title: "State Pencak Silat Championship Winners",
    category: "Martial Arts & Athletics",
    description: "Vidyarthi Bhavan students winning championship trophies and state medals under certified martial arts guidance.",
    badge: "State Level Champion"
  },
  {
    image: "/images/achievements/district_competition_winners.jpg",
    title: "District AI & Olympiad Competition Honors",
    category: "Academic & STEM",
    description: "Student achievers holding prestigious trophies and merit medals at the District Level AI and Talent Olympiad competition.",
    badge: "District Merit Award"
  },
  {
    image: "/images/achievements/karate_belt_grading.jpg",
    title: "Inter-School Karate Belt Grading Ceremony",
    category: "Physical Fitness & Self-Defense",
    description: "Students successfully advancing across Yellow, Orange, and Green belts with official grading certificates and trophies.",
    badge: "Certified Belt Grading"
  },
  {
    image: "/images/achievements/spelling_bee_award.jpg",
    title: "District Spelling Bee Championship",
    category: "Language & Communication",
    description: "Student champion presented with the top trophy by Founder Arangi Govinda Babu at the Vedam International Spelling Bee.",
    badge: "1st Place Trophy"
  },
  {
    image: "/images/achievements/childrens_day_girls_awards.jpg",
    title: "Academic Merit Memento Honors (High School)",
    category: "Continuous Academic Excellence",
    description: "High school girls wing recognized for exemplary discipline, attendance, and academic performance with silver mementos.",
    badge: "Merit Mementos"
  },
  {
    image: "/images/achievements/childrens_day_boys_awards.jpg",
    title: "Classroom Mentorship Honors (High School)",
    category: "Mathematics & Academic Rigor",
    description: "High school boys wing mentored by Principal Kalepu Satish Kumar and faculty, awarded for term performance benchmarks.",
    badge: "Academic Honors"
  }
];

export default function AchievementsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-semibold tracking-wide backdrop-blur-md">
              <Medal className="w-3.5 h-3.5" />
              <span>Verified Institutional Honors</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-white text-xs font-semibold">
              <span>Complete A/C Campus</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Real Student Accomplishments & Competition Victories
          </h1>
          <p className="text-[#E3EAF7] text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            We celebrate genuine mastery, competitive sports championships, Olympiad recognition, and ethical character building in Narasannapeta.
          </p>
        </div>
      </section>

      {/* Photographic Achievements Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3.5 py-1 rounded-full">
              Photo Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3D] tracking-tight">
              Honoring Our Champion Students
            </h2>
            <p className="text-[#5B6B8C] text-base">
              From state martial arts podiums to district olympiads and school merit honors, our students demonstrate excellence in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_ACHIEVEMENT_PHOTOS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F8FF] rounded-2xl overflow-hidden border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A1B3D]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A1B3D]/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-white/20">
                      <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">
                      {item.category}
                    </span>
                    <h3 className="font-extrabold text-lg text-[#0A1B3D] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#E3EAF7]/80">
                  <span className="text-[11px] font-semibold text-[#0A1B3D] flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Verified Institution Benchmark
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Institutional Strengths Grid */}
      <section className="py-20 bg-[#F5F8FF] border-t border-[#E3EAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-white border border-[#E3EAF7] px-3 py-1 rounded-full">
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
            <div className="p-7 rounded-2xl bg-white border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shadow-sm">
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

            <div className="p-7 rounded-2xl bg-white border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-[#0A1B3D] flex items-center justify-center shadow-sm">
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

            <div className="p-7 rounded-2xl bg-white border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0A1B3D]">
                Future AI & Technology Fluency
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                Equipping students with algorithmic coding logic, computational thinking, and Artificial Intelligence understanding early in secondary school.
              </p>
              <div className="pt-2 border-t border-[#E3EAF7] text-xs font-semibold text-[#2563EB]">
                Modern digital competencies with ULO Bangalore
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-[#F59E0B] flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#0A1B3D]">
                Character, Gita Wisdom & Culture
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                Grounding academic capability in respect for parents, teachers, and civic responsibility, guided by Medha Suktham and the Bhagavad Gita.
              </p>
              <div className="pt-2 border-t border-[#E3EAF7] text-xs font-semibold text-[#D97706]">
                Ethical foundation for lifelong leadership
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shadow-sm">
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

            <div className="p-7 rounded-2xl bg-white border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-[#1E40AF] flex items-center justify-center shadow-sm">
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
      <section className="py-16 bg-white border-t border-[#E3EAF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D]">
            Our Commitment to Authentic Education
          </h2>
          <p className="text-[#5B6B8C] text-sm leading-relaxed">
            At Vidyarthi Bhavan IIT Academy, we uphold institutional integrity. We never fabricate results, purchase rankings, or compromise on academic honesty. We earn our reputation day after day in the classroom and on the field.
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
