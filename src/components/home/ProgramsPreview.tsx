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
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3.5 py-1 rounded-full">
              Academic Streams & Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3D] tracking-tight">
              Comprehensive Academic Programs
            </h2>
            <p className="text-[#5B6B8C] text-base">
              Engineered to balance school board excellence with early IIT-JEE foundation mastery, computational literacy, and Indian ethical values.
            </p>
          </div>

          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#1E40AF] shrink-0 transition-colors duration-200"
          >
            <span>View All Detailed Curriculums</span>
            <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionData.programs.map((program) => (
            <div
              key={program.id}
              className="bg-[#F5F8FF] rounded-2xl p-6 border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#2563EB] border border-[#E3EAF7] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 shadow-[0_2px_8px_rgba(37,99,235,0.08)]">
                    {ICON_MAP[program.icon] || <BookOpen className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold text-[#2563EB] bg-white border border-[#E3EAF7] px-2.5 py-1 rounded-full">
                    {program.targetGroup}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-xl text-[#0A1B3D] group-hover:text-[#2563EB] transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#5B6B8C] mt-0.5">
                    {program.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed line-clamp-3">
                  {program.description}
                </p>

                <div className="pt-2 border-t border-[#E3EAF7] space-y-2">
                  {program.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#0A1B3D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span className="leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E3EAF7] flex items-center justify-between">
                <Link
                  href={`/academics#${program.id}`}
                  className="text-xs font-bold text-[#0A1B3D] hover:text-[#2563EB] transition-colors duration-200"
                >
                  Explore Details
                </Link>

                <Link
                  href={`/admissions?program=${encodeURIComponent(program.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1E40AF] px-3.5 py-1.5 rounded-lg transition-all duration-200 shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3 text-[#38BDF8]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
