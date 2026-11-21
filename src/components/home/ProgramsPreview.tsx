import React from "react";
import Link from "next/link";
import {
  Atom,
  BookOpen,
  Cpu,
  Trophy,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

export default function ProgramsPreview() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-100/60 px-3.5 py-1 rounded-full border border-blue-200/60">
              Academic Streams & Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C] tracking-tight">
              Comprehensive Academic Programs
            </h2>
            <p className="text-slate-600 text-base">
              Engineered to balance school board excellence with early IIT-JEE foundation mastery, computational literacy, and Indian ethical values.
            </p>
          </div>

          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] hover:text-[#0B1F4C] shrink-0"
          >
            <span>View All Detailed Curriculums</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionData.programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {ICON_MAP[program.icon] || <BookOpen className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold text-[#1D4ED8] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    {program.targetGroup}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-xl text-[#0B1F4C] group-hover:text-[#1D4ED8] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {program.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {program.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {program.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5" />
                      <span className="leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/academics#${program.id}`}
                  className="text-xs font-bold text-[#0B1F4C] hover:text-[#1D4ED8] transition-colors"
                >
                  Explore Details
                </Link>

                <Link
                  href={`/admissions?program=${encodeURIComponent(program.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#2563EB] px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
