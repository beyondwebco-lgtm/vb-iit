import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Atom,
  BookOpen,
  Cpu,
  Trophy,
  Heart,
  Shield,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Sparkles,
  BookMarked
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "Academics & Curriculum | Dual Pedagogy & Foundations",
  description:
    "Explore the rigorous IIT & NEET Foundation, Civils & Olympiads, CBSE & State NCERT curriculum, ULO Bangalore STEM & Coding, and Spiritual Education at Vidyarthi Bhavan IIT Academy.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Trophy: <Trophy className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
};

const PROGRAM_MEDIA: Record<string, { image: string; alt: string; tag: string }> = {
  "iit-neet-foundation": {
    image: "/images/leadership/director_at_iit_madras.jpg",
    alt: "Founder at IIT Madras embodying our IIT Foundation curriculum standards",
    tag: "IIT-JEE & NEET Mentorship"
  },
  "civils-olympiad-foundations": {
    image: "/images/achievements/district_competition_winners.jpg",
    alt: "Vidyarthi Bhavan students winning trophies at District AI & Olympiad competition",
    tag: "Olympiad & Talent Trophies"
  },
  "cbse-state-ncert": {
    image: "/images/branding/wonder_kidz_logo.png",
    alt: "Wonder Kidz Play School Narasannapeta Official Logo",
    tag: "Wonder Kidz • First Play School"
  },
  "spiritual-education": {
    image: "/images/campus/classical_dance_culture.jpg",
    alt: "Founder with students in classical dance costumes at cultural event",
    tag: "Classical Arts & Heritage"
  },
  "life-skills-creative": {
    image: "/images/campus/nature_field_trip.jpg",
    alt: "Students and teachers on Sunnapugadda nature exploration field trip",
    tag: "Experiential Field Trips"
  }
};

export default function AcademicsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-semibold tracking-wide backdrop-blur-md">
              <span>Academic Philosophy: {institutionData.secondaryMotto}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-white text-xs font-semibold">
              <span>First Play School in Narasannapeta</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#38BDF8] text-xs font-semibold">
              <span>Complete A/C Campus</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Intellectual Rigor, Dual Pedagogy & Bharatiya Character
          </h1>
          <p className="text-[#E3EAF7] text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            From the pioneering legacy of the first play school in Narasannapeta to Class 10 board, IIT & NEET preparation within a complete A/C campus—guided by our motto: <strong className="text-white font-semibold">“{institutionData.secondaryMotto}”</strong>.
          </p>
        </div>
      </section>

      {/* Dual Pedagogy Highlight Section */}
      <section className="py-12 bg-[#F5F8FF] border-b border-[#E3EAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-white border border-[#E3EAF7] px-3 py-1 rounded-full">
              Teaching Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D]">
              Dual Pedagogical Framework
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B8C]">
              Every subject is mastered through two complementary pathways ensuring both deep understanding and high-speed competitive performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E3EAF7] shadow-[0_4px_16px_rgba(37,99,235,0.06)] space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase">
                <BookMarked className="w-4 h-4" />
                <span>Pedagogy Track 1</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A1B3D]">Descriptive Method</h3>
              <p className="text-sm text-[#5B6B8C] leading-relaxed">
                {institutionData.pedagogy.descriptive}
              </p>
              <ul className="text-xs space-y-2 text-[#0A1B3D] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Formula derivation from first principles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Structured descriptive answers and essay articulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Telugu & English editorial page writing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E3EAF7] shadow-[0_4px_16px_rgba(37,99,235,0.06)] space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#38BDF8]/20 text-[#0A1B3D] text-xs font-bold uppercase">
                <Trophy className="w-4 h-4 text-[#2563EB]" />
                <span>Pedagogy Track 2</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A1B3D]">Objective Method Programs</h3>
              <p className="text-sm text-[#5B6B8C] leading-relaxed">
                {institutionData.pedagogy.objective}
              </p>
              <ul className="text-xs space-y-2 text-[#0A1B3D] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>MCQ pattern recognition & options elimination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Abacus speed arithmetic & mental reasoning drills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Timed mock tests matching national Olympiad standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {institutionData.programs.map((program, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-[#F5F8FF] border border-[#E3EAF7] shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] transition-shadow duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column: Description & Highlights (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.08)]">
                        {ICON_MAP[program.icon] || <BookOpen className="w-8 h-8" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-white border border-[#E3EAF7] px-2.5 py-0.5 rounded-md">
                          {program.targetGroup}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D] mt-1">
                          {program.title}
                        </h2>
                        <p className="text-xs font-semibold text-[#5B6B8C]">
                          {program.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-[#5B6B8C] text-sm sm:text-base leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1B3D]">
                        Key Academic Highlights:
                      </h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {program.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A1B3D] bg-white p-3 rounded-xl border border-[#E3EAF7]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/admissions?program=${encodeURIComponent(program.title)}`}
                        className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
                      >
                        <span>Enquire for this Program</span>
                        <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Features & Pedagogy Card (5 cols) */}
                  <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E3EAF7] shadow-sm space-y-4">
                    {PROGRAM_MEDIA[program.id] && (
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A1B3D] border border-[#E3EAF7]">
                        {program.id === "cbse-state-ncert" ? (
                          <div className="relative w-full h-full bg-white flex items-center justify-center p-3">
                            <Image
                              src={PROGRAM_MEDIA[program.id].image}
                              alt={PROGRAM_MEDIA[program.id].alt}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                        ) : (
                          <Image
                            src={PROGRAM_MEDIA[program.id].image}
                            alt={PROGRAM_MEDIA[program.id].alt}
                            fill
                            className="object-cover"
                          />
                        )}
                        <div className="absolute top-2.5 left-2.5 bg-[#0A1B3D]/85 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                          {PROGRAM_MEDIA[program.id].tag}
                        </div>
                      </div>
                    )}

                    <h3 className="font-extrabold text-base text-[#0A1B3D] border-b border-[#E3EAF7] pb-2">
                      Program Components & Features
                    </h3>
                    <div className="space-y-2.5">
                      {program.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-xs font-medium text-[#0A1B3D]"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {program.id === "iit-neet-foundation" && (
                      <div className="mt-4 p-3.5 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-xs text-[#0A1B3D] space-y-1">
                        <p className="font-bold flex items-center gap-1.5 text-[#2563EB]">
                          <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                          Classroom Mentorship Note:
                        </p>
                        <p className="text-[#5B6B8C] leading-relaxed">
                          Personally taught by Principal Kalepu Satish Kumar utilizing systematic problem-solving methods, formula derivations, and diagnostic mock testing.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Spiritual Education & Mahamantra Anchor Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0A1B3D] via-[#1E40AF] to-[#0A1B3D] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#38BDF8] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spiritual Foundation & Bharatiya Sanskar</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Vedic Chanting, Sukthams & Gita Wisdom
          </h2>

          <p className="text-sm sm:text-base text-[#E3EAF7] max-w-3xl mx-auto leading-relaxed">
            Every school day opens with sacred recitations designed to instill tranquility, focus, and intellectual brilliance:
          </p>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-3xl mx-auto">
            <p className="font-mono text-sm sm:text-lg text-[#F59E0B] font-bold tracking-wide">
              {institutionData.spiritualAnchor}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-medium">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">Medha Suktham (Intellect & Memory)</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">Bhagavadhgeetha Lessons</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">Vishnu Sahasranamam</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">Rudra Namakam & Chamakam</div>
          </div>
        </div>
      </section>

      {/* Academic Priorities Recap: Deep Navy Anchor */}
      <section className="py-16 bg-[#0A1B3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 text-center">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
              Methodology in Action
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Consistent Practice & Conceptual Confidence
            </h2>
            <p className="text-[#E3EAF7] text-sm">
              We cultivate students who can approach difficult problems calmly, step-by-step, with analytical clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
            {institutionData.leadership.principal.priorities.map((p) => (
              <div
                key={p.title}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-sm"
              >
                <p className="font-bold text-xs text-white">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}