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
      <section className="bg-gradient-to-br from-[#071434] via-[#0B1F4C] to-[#143B8A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide">
            <span>Academic Excellence & Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Intellectual Rigor, Conceptual Depth & Future Readiness
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our curriculum balances board examinations with hands-on IIT-JEE foundation training, AI literacy, and moral anchoring—eliminating cramming in favor of genuine understanding.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {institutionData.programs.map((program, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column: Description & Highlights (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#1D4ED8] text-white flex items-center justify-center shadow-md">
                        {ICON_MAP[program.icon] || <BookOpen className="w-8 h-8" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-100/70 px-2.5 py-0.5 rounded">
                          {program.targetGroup}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F4C] mt-1">
                          {program.title}
                        </h2>
                        <p className="text-xs font-semibold text-slate-500">
                          {program.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F4C]">
                        Key Academic Highlights:
                      </h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {program.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/admissions?program=${encodeURIComponent(program.title)}`}
                        className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-sm"
                      >
                        <span>Enquire for this Program</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Features & Pedagogy Card (5 cols) */}
                  <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-4">
                    <h3 className="font-extrabold text-base text-[#0B1F4C] border-b border-slate-100 pb-2">
                      Pedagogical Features
                    </h3>
                    <div className="space-y-2.5">
                      {program.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs font-medium text-slate-800"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {program.id === "iit-jee-foundation" && (
                      <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                        <p className="font-bold flex items-center gap-1.5 text-amber-900">
                          <GraduationCap className="w-4 h-4 text-amber-800" />
                          Classroom Mentorship Note:
                        </p>
                        <p className="text-slate-700 leading-relaxed">
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

      {/* Academic Priorities Recap */}
      <section className="py-16 bg-[#0B1F4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 text-center">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
              Methodology in Action
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Consistent Practice & Conceptual Confidence
            </h2>
            <p className="text-slate-300 text-sm">
              We cultivate students who can approach difficult problems calmly, step-by-step, with analytical clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
            {institutionData.leadership.principal.priorities.map((p) => (
              <div
                key={p.title}
                className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-center space-y-1 backdrop-blur-sm"
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
