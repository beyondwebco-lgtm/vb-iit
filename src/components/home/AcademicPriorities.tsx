import React from "react";
import { Sparkles } from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function AcademicPriorities() {
  const { principal } = institutionData.leadership;

  return (
    <section className="py-20 lg:py-24 bg-[#F5F8FF] border-y border-[#E3EAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2563EB] bg-white border border-[#E3EAF7] px-3.5 py-1 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.06)]">
            Educational Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3D] tracking-tight">
            The Six Pillars of Academic Excellence
          </h2>
          <p className="text-[#5B6B8C] text-base sm:text-lg">
            Formulated by Principal Kalepu Satish Kumar to instill intellectual rigor, patience, and analytical confidence in every student.
          </p>
        </div>

        {/* 6 Priorities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principal.priorities.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] hover:-translate-y-0.5 transition-all duration-300 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-2.5 py-1 rounded-md">
                  0{index + 1}
                </span>
                <Sparkles className="w-4 h-4 text-[#38BDF8] group-hover:text-[#2563EB] transition-colors duration-200" />
              </div>

              <h3 className="text-xl font-bold text-[#0A1B3D] group-hover:text-[#2563EB] transition-colors duration-200">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Principal Note Box: Anchor Deep Navy */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0A1B3D] text-white border border-[#1E40AF]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_16px_36px_rgba(10,27,61,0.25)]">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase">
              Classroom Connection By Principal Kalepu Satish Kumar
            </p>
            <p className="text-base sm:text-lg font-normal text-[#E3EAF7] italic max-w-3xl leading-relaxed">
              “Mathematics develops patience, precision, analytical thinking, decision-making and the courage to approach difficult problems step by step. IIT Foundation learning is about nurturing the right concepts, consistent practice, and a spirit of inquiry.”
            </p>
          </div>
          <div className="shrink-0 text-center">
            <span className="inline-block bg-white/10 border border-white/20 text-[#38BDF8] font-semibold text-xs px-4 py-2 rounded-xl backdrop-blur-sm">
              Hands-On Teaching • High School
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
