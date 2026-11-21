import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, BookOpen, Quote } from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function LeadershipHighlight() {
  const { director, principal } = institutionData.leadership;

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-100/60 px-3.5 py-1 rounded-full border border-blue-200/60">
            Visionary Institutional Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C] tracking-tight">
            Guiding Every Student with Purpose & Mentorship
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            At Vidyarthi Bhavan IIT Academy, leadership is not administrative distance—it is an active commitment in the classroom and to the nation.
          </p>
        </div>

        {/* Leadership Grid: Director & Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Director Arangi Govinda Babu */}
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl shadow-blue-900/5 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-[#1D4ED8] shadow-md bg-slate-100">
                  <Image
                    src={director.image || "/images/leadership/director_arangi_govinda_babu.png"}
                    alt={director.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded">
                    {director.role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0B1F4C] mt-1">
                    {director.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Vidyarthi Bhavan IIT Academy • Narasannapeta
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border-l-4 border-[#1D4ED8] text-slate-800 relative">
                <Quote className="w-6 h-6 text-blue-200 absolute right-3 top-3 opacity-60" />
                <p className="text-sm font-medium italic leading-relaxed text-slate-700">
                  “{director.quote}”
                </p>
              </div>

              {/* Verified Core Message Excerpt */}
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  “Education, in my vision, is not merely the process of acquiring marks, degrees or employment. It is the journey of shaping a human being with knowledge, discipline, wisdom, values, courage, compassion and a sense of responsibility towards society and our nation.”
                </p>
                <p>
                  “My vision is to bring together the best of modern education and the timeless wisdom of Indian culture. Science, mathematics, AI, and competitive learning must go hand in hand with Indian values and patriotism.”
                </p>
              </div>

              {/* Director Key Pillars */}
              <div className="pt-2">
                <p className="text-xs font-bold text-[#0B1F4C] uppercase tracking-wider mb-2.5">
                  Core Focus & Special Initiatives:
                </p>
                <div className="flex flex-wrap gap-2">
                  {director.interests.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                Nation-Building Through Education
              </span>
              <Link
                href="/about#director-message"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1D4ED8] hover:text-[#0B1F4C] transition-colors"
              >
                <span>Read Director's Full Message</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Principal Kalepu Satish Kumar */}
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl shadow-blue-900/5 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0B1F4C] to-[#1D4ED8] text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-md border-2 border-white">
                  {principal.initials}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded">
                    Principal & Academic Head
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0B1F4C] mt-1">
                    {principal.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Principal & Mathematics / IIT Foundation Faculty
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border-l-4 border-[#1D4ED8] text-slate-800 relative">
                <Quote className="w-6 h-6 text-blue-200 absolute right-3 top-3 opacity-60" />
                <p className="text-sm font-medium italic leading-relaxed text-slate-700">
                  “{principal.quote}”
                </p>
              </div>

              {/* Classroom Teaching Highlight */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs sm:text-sm">
                <p className="font-bold flex items-center gap-2 text-amber-900">
                  <GraduationCap className="w-4 h-4 text-amber-700 shrink-0" />
                  Direct Classroom Engagement
                </p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Principal Kalepu Satish Kumar personally conducts Mathematics and IIT Foundation classes for high-school students, diagnosing learning needs directly and nurturing logical confidence.
                </p>
              </div>

              {/* Educational Priorities Preview */}
              <div>
                <p className="text-xs font-bold text-[#0B1F4C] uppercase tracking-wider mb-2.5">
                  Principal's Educational Priorities:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {principal.priorities.slice(0, 4).map((p) => (
                    <div
                      key={p.title}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                      <span className="font-semibold text-slate-800">{p.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                Mathematics & IIT Mentorship
              </span>
              <Link
                href="/about#principal-message"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1D4ED8] hover:text-[#0B1F4C] transition-colors"
              >
                <span>Read Principal's Full Message</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
