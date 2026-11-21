import React from "react";
import Link from "next/link";
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
  GraduationCap
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "Academics & IIT Foundation | Classes 6-10",
  description:
    "Explore the rigorous IIT-JEE Foundation program personally taught by Principal Kalepu Satish Kumar, comprehensive school curriculum, AI & coding courses at VB IIT Academy.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Trophy: <Trophy className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
};

export default function AcademicsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-semibold tracking-wide backdrop-blur-md">
            <span>Academic Excellence & Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Intellectual Rigor, Conceptual Depth & Future Readiness
          </h1>
          <p className="text-[#E3EAF7] text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Our curriculum balances board examinations with hands-on IIT-JEE foundation training, AI literacy, and moral anchoring—eliminating cramming in favor of genuine understanding.
          </p>
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
                    <h3 className="font-extrabold text-base text-[#0A1B3D] border-b border-[#E3EAF7] pb-2">
                      Pedagogical Features
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

                    {program.id === "iit-jee-foundation" && (
                      <div className="mt-4 p-3.5 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7] text-xs text-[#0A1B3D] space-y-1">
                        <p className="font-bold flex items-center gap-1.5 text-[#2563EB]">
                          <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                          Classroom Mentorship Note:
                        </p>
                        <p className="text-[#5B6B8C] leading-relaxed">
                          Personally taught by Principal Kalepu Satish Kumar with systematic problem-solving methods and conceptual intuition.
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
