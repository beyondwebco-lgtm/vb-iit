import React from "react";
import { CheckCircle, Sparkles, BookOpen } from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function AcademicPriorities() {
  const { principal } = institutionData.leadership;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Educational Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C] tracking-tight">
            The Six Pillars of Academic Excellence
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Formulated by Principal Kalepu Satish Kumar to instill intellectual rigor, patience, and analytical confidence in every student.
          </p>
        </div>

        {/* 6 Priorities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principal.priorities.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-gradient-to-b from-blue-50/60 to-white border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-black text-[#1D4ED8] bg-blue-100/70 px-2.5 py-1 rounded-md">
                  0{index + 1}
                </span>
                <Sparkles className="w-4 h-4 text-blue-300 group-hover:text-[#1D4ED8] transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-[#0B1F4C] group-hover:text-[#1D4ED8] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Principal Note Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1F4C] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs font-bold text-sky-300 tracking-wider uppercase">
              Classroom Connection By Principal Kalepu Satish Kumar
            </p>
            <p className="text-base sm:text-lg font-medium text-slate-200 italic max-w-3xl">
              “Mathematics develops patience, precision, analytical thinking, decision-making and the courage to approach difficult problems step by step. IIT Foundation learning is about nurturing the right concepts, consistent practice, and a spirit of inquiry.”
            </p>
          </div>
          <div className="shrink-0 text-center">
            <span className="inline-block bg-white/10 border border-white/20 text-white font-semibold text-xs px-4 py-2 rounded-xl backdrop-blur-sm">
              Hands-On Teaching • High School
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
